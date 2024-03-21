import { useState } from 'react';
import TablePagination from '@mui/material/TablePagination';

export default function Paginator({data, handleChangeDataToPrese, rowsPerPage, changeRowsPerPage}: {data: Stock[], rowsPerPage: number, handleChangeDataToPrese: (data: any) => void, changeRowsPerPage: (data: any) => void}) {
  const [page, setPage] = useState(0);
  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
    displayData(newPage)
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    changeRowsPerPage(parseInt(event.target.value));
    handleChangeDataToPrese(data.slice(0, parseInt(event.target.value)));
    setPage(0);
  };
  const  displayData = (page: number) => {

    const startIndex = (page) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    const currentPageData = data.slice(startIndex, endIndex);
    handleChangeDataToPrese(currentPageData);
}
  return (
    <TablePagination
      component="div"
      count={data.length}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
}