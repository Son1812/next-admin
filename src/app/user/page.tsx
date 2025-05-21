
'use client';

import React, { useState } from 'react';
import {ListResult,UserList} from '@/features/user'
import Pagination from '@/components/Pagination'

const dataSource: UserList[] = [
  {
    id: '1',
    name: 'Nguyễn Văn A',
    email: 'example@gmail.com',
    project:'Dự án A',
    role: 'Admin',
    status: 'Active'
  },
  {
    id: '2',
    name: 'Trần Thị B',
    email: 'example@gmail.com',
    project:'Dự án A',
    role: 'Admin',
    status: 'Active'
  },
  {
    id: '3',
    name: 'Lê Văn C',
    email: 'example@gmail.com',
    project:'Dự án A',
    role: 'Admin',
    status: 'Active'
  },
  {
    id: '4',
    name: 'Đào Văn D',
    email: 'example@gmail.com',
    project:'Dự án A',
    role: 'Admin',
    status: 'Active'
  },
];


export default function UserManagement() {

  const [pagination, setPagination] = useState({
    pageIndex: 1,
    pageSize: 10,
    totalElements: dataSource.length,
    totalPages: Math.ceil(dataSource.length / 10),
  });

  const handlePageChange = (page: number) => {
    setPagination((prev) => ({ ...prev, pageIndex: page }));
  };

  const handlePageSizeChange = (size: number) => {
    setPagination({
      pageIndex: 1,
      pageSize: size,
      totalElements: dataSource.length,
      totalPages: Math.ceil(dataSource.length / size),
    });
  };  
  
  return (
    <main className="h-full">
      <div className='data-container'>
        <div className='h-10'></div>
        <ListResult dataSource={dataSource} />
        <Pagination
          pagination={pagination}
          onPageChange={handlePageChange}
          onPageSizeChange={handlePageSizeChange}
        />
      </div>
    </main>
  )
}