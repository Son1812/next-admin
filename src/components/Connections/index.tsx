'use client'

import * as React from 'react'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import Paper from '@mui/material/Paper'
import { Box, Typography, Button, Stack } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'

const columns: GridColDef[] = [
  { field: 'connectionName', headerName: 'Tên kết nối', minWidth: 200 },
  { field: 'source', headerName: 'Nguồn', minWidth: 130 },
  { field: 'distination', headerName: 'Điểm đến', width: 130 },
  { field: 'sync', headerName: 'Đồng bộ', width: 90 },
  { field: 'lastSync', headerName: 'Đồng bộ hóa lần cuối', width: 150 },
  { field: 'status', headerName: 'Trạng thái', width: 120, headerAlign: 'center' },
  {
    field: 'actions',
    headerName: 'Tác vụ',
    align: 'center',
    headerAlign: 'center',
    minWidth: 300,
    sortable: false,
    filterable: false,
    renderCell: params => (
      <Stack direction='row' spacing={1}>
        <Button
          variant='contained'
          color='primary'
          size='small'
          startIcon={<VisibilityIcon />}
          onClick={() => handleView(params.row)}
        >
          Xem
        </Button>
        <Button
          variant='contained'
          color='warning'
          size='small'
          startIcon={<EditIcon />}
          onClick={() => handleEdit(params.row)}
        >
          Sửa
        </Button>
        <Button
          variant='contained'
          color='error'
          size='small'
          startIcon={<DeleteIcon />}
          onClick={() => handleDelete(params.row)}
        >
          Xoá
        </Button>
      </Stack>
    )
  }
]

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 }
]

const paginationModel = { page: 0, pageSize: 5 }

export default function DataTable() {
  return (
    <Paper sx={{ height: '100%', width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        //checkboxSelection
        sx={{ border: 0 }}
        rowHeight={32}
      />
    </Paper>
  )
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
