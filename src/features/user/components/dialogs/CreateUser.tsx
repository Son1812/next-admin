'use client';
import React, { useState } from 'react';
import { Modal, Form, Input, Select, message, Button, Switch } from 'antd';
import {ListGroup, ListProject} from '@/features/user/types/types'
//import { createUser } from '../services/userService';

const { Option } = Select;

interface CreateUserModalProps {
  open: boolean;
  onClose: () => void;
  onSuccess?: () => void; // gọi khi tạo thành công để refresh dữ liệu
  listProject: ListProject[];
  listGroup: ListGroup[];
}

const CreateUser: React.FC<CreateUserModalProps> = ({ open, onClose, onSuccess, listProject, listGroup }) => {
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
      <Form form={form} layout="horizontal" labelCol={{ flex: '120px' }} labelAlign="left">
      <Form.Item
          label="Dự án"
          name="projectId"
          rules={[{ required: true, message: 'Vui lòng chọn dự án!' }]}
        >
          <Select>
            {listProject.map((project) => (
              <Option key={project.id} value={project.id}>
                {project.projectName}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          label="Tên người dùng"
          name="username"
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
          name="groupId"
          rules={[{ required: true, message: 'Chọn nhóm!' }]}
        >
          <Select>
            {listGroup.map((project) => (
              <Option key={project.id} value={project.id}>
                {project.groupName}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          label="Trạng thái"
          name="status"
          valuePropName="checked"
        >
          <Switch />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CreateUser;
