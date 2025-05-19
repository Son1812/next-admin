'use client'
import React from 'react';
import { Table, Dropdown, Button, Space, message } from 'antd';
import { MoreOutlined } from '@ant-design/icons';

const data = [
  { key: 1, name: 'Nguyễn Văn A', email: 'a@gmail.com' },
  { key: 2, name: 'Trần Thị B', email: 'b@gmail.com' },
  { key: 3, name: 'Lê Văn C', email: 'c@gmail.com' },
];

const ListResult = () => {
  const handleMenuClick = (record: any, action: string) => {
    if (action === 'edit') {
      message.info(`Sửa: ${record.name}`);
    } else if (action === 'delete') {
      if (confirm(`Xác nhận xoá ${record.name}?`)) {
        message.success(`Đã xoá ${record.name}`);
      }
    }
  };

  const columns = [
    {
      title: 'Tên',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Thao tác',
      key: 'action',
      render: (_: any, record: any) => {
        const menuItems = [
          { label: 'Sửa', key: 'edit' },
          { label: 'Xoá', key: 'delete' },
        ];

        return (
          <Dropdown
            trigger={['click']}
            menu={{
              items: menuItems,
              onClick: ({ key }) => handleMenuClick(record, key),
            }}
          >
            <Button icon={<MoreOutlined />} />
          </Dropdown>
        );
      },
    },
  ];

  return <Table columns={columns} dataSource={data} pagination={false} />;
};

export default ListResult;
