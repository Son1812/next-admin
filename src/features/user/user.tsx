'use client';

import React, { useState } from 'react';
import {ListGroup, ListProject, ListResult,Toolbar,UserList, FormSearch} from '@/features/user'
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

const listGroup: ListGroup[] = [ 
  {id: '1', groupName:'Admin'},
  {id: '2', groupName:'Project Owner'},
  {id: '3', groupName:'Data Engineer'},
  {id: '4', groupName:'User'},
]

const listProject: ListProject[] = [ 
  {id: '1', projectName:'Project A'},
  {id: '2', projectName:'Project B'},
  {id: '3', projectName:'Project C'},
  {id: '4', projectName:'Project D'},
]

export default function UserManagement() {

  const [formData, setFormData] = useState<FormSearch>({
    keyword: '',
    status: '',
    groupId: '',
    project: ''
  });

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

  const handleSearch = () => {
    console.log('Searching with:', formData);
    // call API or filter table here
  };

  const handleReset = () => {
    console.log('Reset filter');
  };

  const handleCreate = () => {
    console.log('Open create dialog');
  };
  
  return (
    <main className="h-full">
      <div className='data-toolbar'>
        <Toolbar
          formData={formData}
          listGroup={listGroup}
          listProject={listProject}
          onSearch={handleSearch}
          onReset={handleReset}
          onCreate={handleCreate}
        />
      </div>
      <div className='data-container'>
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