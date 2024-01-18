// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useEffect, useState } from 'react';
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';
import Paginator from '../../components/atoms/paginator/Paginator';
import ApplicationLayout from '../../components/template/ApplicationLayout';
import useAccount from '../../hooks/account';
import { TransactionInterface } from '../../infra/api/transaction/interfaces/transaction.interface';
import transactionsService from '../../infra/api/transaction/transactions.service';
import { nFormat } from '../../util/util';

export default function Transactions(): JSX.Element {
  const { myAccount } = useAccount();
  const [queryParams] = useSearchParams();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);

  const [transactions, setTransactions] = useState<TransactionInterface[]>();
  const [meta, setMeta] = useState(null);

  const callTransaction = async () => {
    const { page, pageSize } = Object.fromEntries(queryParams);

    const paramsTransaction = {
      page,
      pageSize,
    };
    const request = await transactionsService.findAll(paramsTransaction);
    if (request.status <= 201) {
      setTransactions(request?.data?.data);
      const obj = request?.data;
      delete obj.data;
      setMeta(obj);
    }
  };
  const updateTable = (newPage: number) => {
    queryParams.set('page', `${newPage}`);

    if (newPage) queryParams.set('items', `${newPage}`);

    navigate({
      search: createSearchParams(queryParams.toString()).toString(),
    });
    setCurrentPage(newPage);
  };

  useEffect(() => {
    callTransaction();
  }, [currentPage]);

  return (
    <ApplicationLayout
      balanceCurrent={myAccount?.currentBalanceAccount}
      title="Transações"
      userSession={myAccount}
    >
      <div className="bg-white">
        <div className="mx-auto max-w-3xl  lg:max-w-7xl lg:px-2">
          <table className="w-full table-fixed border-spacing-4 ">
            <thead className="bg-purple-700	rounded-lg text-white">
              <tr>
                <th>Data</th>
                <th>Origem Transação</th>
                <th>Tipo transação</th>
                <th>Valor</th>
                <th>Saldo</th>
              </tr>
            </thead>
            <tbody>
              {transactions?.map((transaction, index) => {
                const isDebit = transaction.typeTransaction === 'debit';
                const isAtm = transaction.originTransaction === 'atm';
                return (
                  <tr key={`${index.toString()}=${isDebit}`}>
                    <td>
                      {new Date(transaction.dateTransaction).toLocaleDateString(
                        'pt-br',
                      )}
                    </td>
                    <td>{isAtm ? 'Movimentação em ATM' : 'Transferências'}</td>
                    <td>{isDebit ? 'Débito' : 'Crédito'}</td>
                    <td className={isDebit ? 'text-red-600' : 'text-blue-600'}>
                      {isDebit ? '-' : ''}
                      {nFormat.format(transaction.value)}
                    </td>
                    <td>{nFormat.format(transaction.balanceInCurrentLine)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="mt-10">
          {meta?.totalPages > 0 && (
            <Paginator
              pageCount={meta?.totalPages}
              onPaginationClick={updateTable}
              currentPage={currentPage}
            />
          )}
        </div>
      </div>
    </ApplicationLayout>
  );
}
