import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableRow, styled, tableCellClasses } from '@mui/material'; // **Added missing import for tableCellClasses**
import ButtonHaver from './ButtonHaver'; // **Added import for ButtonHaver**

const TableTemplate = ({ columns, rows }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  return (
    <>
      <TableContainer>
        <Table aria-label="sticky table">
          <StyledTableRow>
            {columns.map((column) => (
              <StyledTableCell
                key={column.id}
                align={column.align}
                style={{ minWidth: column.minWidth }}
              >
                {column.label} {/* **Added column header label here** */}
              </StyledTableCell>
            ))}
            <StyledTableCell align="center">
              Actions
            </StyledTableCell>
          </StyledTableRow>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) // **Fixed the slice logic**
              .map((row) => {
                return (
                  <StyledTableRow hover role="checkbox" tabIndex={0} key={row.id}> {/* **Changed key to row.id** */}
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <StyledTableCell key={column.id} align={column.align}> {/* **Changed key to column.id** */}
                          {
                            column.format && typeof value === 'number'
                              ? column.format(value) // **Fixed usage of `format` method**
                              : value
                          }
                        </StyledTableCell>
                      );
                    })}
                    <StyledTableCell align="center">
                      <ButtonHaver row={row}/> {/* **Added ButtonHaver component** */}
                    </StyledTableCell>
                  </StyledTableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      {/* Pagination component is missing here. Consider adding a Pagination component from MUI */}
      {/* Here's a rough example of how it could be included */}
      {/* 
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 100]}
          component="div"
          count={rows.length} // **Fixed rows size to rows.length**
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={(event, newPage) => setPage(newPage)} // **Fixed page setter**
          onRowsPerPageChange={(event) => {
            setRowsPerPage(parseInt(event.target.value, 10)); // **Fixed radix parameter**
            setPage(0);
          }}
        />
      */}
    </>
  );
}

export default TableTemplate;

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: { // **Fixed reference to tableCellClasses**
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: { // **Fixed reference to tableCellClasses**
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
