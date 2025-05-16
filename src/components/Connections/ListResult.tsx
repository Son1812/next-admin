'use client'

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Typography, Button, Stack } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'


// function createData(
//   connectionName: string,
//   source: string,
//   distination: string,
//   sync: string,
//   lastSync: string,
//   status: string,
//   actions: string,
// ) {
//   return { connectionName, source, distination, sync, lastSync, status, actions };
// }

const dataSource = [
  { id: 1, name: 'Nguyễn Văn A', email: 'a@gmail.com' },
  { id: 2, name: 'Trần Thị B', email: 'b@gmail.com' },
  { id: 3, name: 'Lê Văn C', email: 'c@gmail.com' },
];


const paginationModel = { page: 0, pageSize: 5 }

export default function ListResult() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size='small' aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataSource.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const handleView = (row: any) => {
  alert(`👁 Xem người dùng: ${row.name}`)
}

const handleEdit = (row: any) => {
  alert(`✏️ Sửa người dùng: ${row.name}`)
}

const handleDelete = (row: any) => {
  if (confirm(`❌ Bạn có chắc muốn xoá ${row.name}?`)) {
    alert(`Đã xoá ${row.name}`)
  }
}
