'use client'
import React from 'react';
import { Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';

interface DataType {
  key: string;
  name: string;
  accountNumber: number;
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'STT',
    key: 'index',
    align:'center',
    render: (_: unknown, __: DataType, index: number) => index + 1,
    width: 65,
  },
  {
    title: 'Tên nhóm quyền',
    dataIndex: 'name',
    key: 'name',
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: 'Số lượng tài khoản',
    dataIndex: 'accountNumber',
    key: 'accountNumber',
    align:'right'
  },
  {
    title: 'Action',
    key: 'action',
    render: (_: unknown, record: DataType) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const dataSource: DataType[] = [
  {
    key: '1',
    name: 'Admin',
    accountNumber: 3
  },
  {
    key: '2',
    name: 'Project Owner',
    accountNumber: 8
  },
  {
    key: '3',
    name: 'Data Engineer',
    accountNumber: 12,
  },
  {
    key: '4',
    name: 'User',
    accountNumber: 19,
  },
];

const ListResult: React.FC = () => (
  <Table<DataType> 
    columns={columns} 
    dataSource={dataSource} 
    pagination={false}
    bordered
    size="small" />
);

export default ListResult;

