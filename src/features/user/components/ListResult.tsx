'use client'
import React from 'react';
import { Space, Table, Tag, Dropdown, MenuProps, Button } from 'antd';
import type { TableProps } from 'antd';
import type {UserList} from '../types/types'
import {  DownOutlined, LockOutlined, InfoCircleOutlined } from '@ant-design/icons';


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
    title: 'Tác vụ',
    key: 'action',
    width:'120',
    render: (_, record) => {
      const items: MenuProps['items'] = [
        {
          key: 'detail',
          label: 'Xem chi tiết',
          icon: <InfoCircleOutlined />,
          onClick: () => viewDetail(record),
        },
        {
          key: 'change-password',
          label: 'Đổi mật khẩu',
          icon: <LockOutlined />,
          onClick: () => changePassword(record),
        },
      ];

      return (
        
        <Dropdown.Button menu={{ items }} trigger={['click']} type='primary' icon={<DownOutlined />}>
          Tác vụ
        </Dropdown.Button>
      );
    },
  },
];

const viewDetail = (record: UserList) => {
  console.log('Xem chi tiết:', record);
  // mở modal hoặc chuyển trang
};

const changePassword = (record: UserList) => {
  console.log('Đổi mật khẩu cho:', record);
  // mở modal đổi mật khẩu
};



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

