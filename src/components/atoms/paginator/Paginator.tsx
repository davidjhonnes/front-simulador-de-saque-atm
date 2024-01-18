import React from 'react';
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic.css';

export default function Paginator({
  currentPage,
  pageCount,
  onPaginationClick,
}): React.JSX.Element {
  return (
    <ResponsivePagination
      current={currentPage}
      total={pageCount}
      onPageChange={onPaginationClick}
    />
  );
}
