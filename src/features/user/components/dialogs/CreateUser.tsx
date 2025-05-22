'use client';
import React, { useState } from 'react';
import { Modal, Form, Input, Select, message, Button } from 'antd';
//import { createUser } from '../services/userService';

interface CreateUserModalProps {
  open: boolean;
  onClose: () => void;
  onSuccess?: () => void; // gọi khi tạo thành công để refresh dữ liệu
}

const CreateUser: React.FC<CreateUserModalProps> = ({ open, onClose, onSuccess }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const submitClick = async () => {
    // try {
    //   const values = await form.validateFields();
    //   setLoading(true);
    //   await createUser(values);
    //   message.success('Tạo người dùng thành công!');
    //   setLoading(false);
    //   form.resetFields();
    //   onClose();
    //   onSuccess?.(); // Gọi callback nếu có
    // } catch (error: any) {
    //   setLoading(false);
    //   message.error('Tạo thất bại. Vui lòng thử lại!');
    //   console.error('Create user failed:', error);
    // }
    console.log("Create user");
    
  };

  const cancelClick = () => {
    form.resetFields();
    onClose();
  };

  return (
    <Modal
      title="Thêm mới người dùng"
      open={open}
      onOk={submitClick}
      onCancel={cancelClick}
      confirmLoading={loading}
      maskClosable={false}
      okText="Tạo mới"
      cancelText="Hủy"
    >
      <Form form={form} layout="vertical">
        <Form.Item
          label="Tên"
          name="name"
          rules={[{ required: true, message: 'Vui lòng nhập tên!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Vui lòng nhập email!' }]}
        >
          <Input type="email" />
        </Form.Item>
        <Form.Item
          label="Nhóm quyền"
          name="group"
          rules={[{ required: true, message: 'Chọn nhóm!' }]}
        >
          <Select options={[{ value: 'admin', label: 'Admin' }, { value: 'user', label: 'User' }]} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CreateUser;
