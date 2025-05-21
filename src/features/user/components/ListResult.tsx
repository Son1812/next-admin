'use client'
import React from 'react';
import { Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';
import type {UserList} from '../types/types'



interface ListResultProps {
  dataSource: UserList[]; // <-- nhận mảng dữ liệu từ ngoài
}

const columns: TableProps<UserList>['columns'] = [
  {
    title: 'STT',
    key: 'index',
    align:'center',
    render: (_: unknown, __: UserList, index: number) => index + 1,
    width: 65,
  },
  {
    title: 'Họ và tên',
    dataIndex: 'name',
    key: 'name',
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    align:'left'
  },
  {
    title: 'Dự án',
    dataIndex: 'project',
    key: 'project',
    align:'left'
  },
  {
    title: 'Nhóm quyền',
    dataIndex: 'role',
    key: 'role',
    align:'left'
  },
  {
    title: 'Action',
    key: 'action',
    render: (_: unknown, record: UserList) => (
      <Space size="middle">
        <a>Delete</a>
      </Space>
    ),
  },
];



const ListResult: React.FC<ListResultProps> = ({dataSource}) => (
  <Table<UserList> 
    rowKey="id"
    columns={columns} 
    dataSource={dataSource} 
    pagination={false}
    bordered
    className='list-result-pagination'
    size="small" />
);

export default ListResult;

