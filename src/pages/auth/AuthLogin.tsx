// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/atoms/buttons/Button';
import TextInput from '../../components/atoms/textinputs/TextInput';
import useLogin from '../../hooks/auth';
import { AuthInterface } from '../../infra/api/auth/interfaces/auth.interface';

export default function AuthLogin(): React.JSX.Element {
  const navigate = useNavigate();

  const { postLogin } = useLogin();
  const [erroMsg, setErrorMsg] = useState<string>('');
  const [pass, setPass] = useState<string>('');
  const [cpf, setCpf] = useState<string>('');
  const handleCpf = (val: string): void => {
    setCpf(val);
  };
  const handlePass = (val: string): void => {
    setPass(val);
  };
  const doLogin = async () => {
    setErrorMsg('');
    try {
      const authDto: AuthInterface = {
        cpf: cpf.replace(/[^0-9]/g, ''),
        password: pass,
      };
      const loggin = await postLogin(authDto);

      if (loggin?.accessToken) {
        navigate('/');
      }
    } catch (e) {
      setErrorMsg(e.friendlyMsg || e.message);
    }
  };
  return (
    <div className="flex min-h-full flex-col justify-center px-4 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://www.gsw.com.br/wp-content/uploads/2021/12/gsw-300x66-1.png?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Bem-vindo(a) ao banco GSM
        </h2>
      </div>

      <div className="mt-10 lg:max-w-80 md:max-w-80 sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="space-y-6">
          <div>
            <label
              htmlFor="cpf"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              CPF
            </label>
            <div className="mt-2 flex flex-row">
              <TextInput
                value={cpf}
                type="text"
                onChange={(e) => handleCpf(e.target.value)}
                required
                className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                mask="999.999.999-99"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <TextInput
                value={pass}
                type="password"
                required
                onChange={(e) => handlePass(e.target.value)}
                className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="w-full">
            <Button
              color="primary"
              text="Entrar"
              size="full"
              onClick={doLogin}
              className="flex w-full justify-center px-3 py-1.5  font-semibold leading-6  shadow-sm"
            />
          </div>
          <p className="w-full text-center text-red-600">{erroMsg}</p>
        </div>
      </div>
    </div>
  );
}
