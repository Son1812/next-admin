'use client'

import React, { useState } from 'react';
import { Input, Select, Button, Space } from 'antd';
import { PlusOutlined, SearchOutlined, DeleteOutlined } from '@ant-design/icons';
import {CreateUserDialog} from './dialogs/index'

const { Option } = Select;
import {FormSearch, ListGroup, ListProject} from '../types/types'

interface Props {
  formData: FormSearch;
  listGroup: ListGroup[];
  listProject: ListProject[];
  onSearch: () => void;
  onReset: () => void;
  onCreate: () => void;
}

const Toolbar: React.FC<Props> = ({ formData, listGroup, listProject , onSearch, onReset, onCreate }) => {
  const [localForm, setLocalForm] = useState<FormSearch>(formData);

  const [isOpenDialog, setOpenDialog] = useState(false);

  const handleChange = (field: keyof FormSearch, value: string) => {
    setLocalForm((prev) => ({ ...prev, [field]: value }));
  };

  const searchClick = () => {
    Object.assign(formData, localForm); // cập nhật parent formData (giống .sync bên Vue)
    onSearch();
  };

  const resetClick = () => {
    const resetForm = { keyword: '', status: '', groupId: '', project: '' };
    setLocalForm(resetForm);
    Object.assign(formData, resetForm);
    onReset();
  };

  return (
    <div className="w-full flex flex-wrap md:flex-nowrap justify-between items-center">
      <Space wrap size="small">
        <Input
          placeholder="Nhập tên, username"
          size="middle"
          value={localForm.keyword}
          onChange={(e) => handleChange('keyword', e.target.value)}
          allowClear
        />

        <Select
          placeholder="Chọn dự án"
          size="middle"
          style={{ width: 160 }}
          value={localForm.project || undefined}
          onChange={(val) => handleChange('project', val)}
          allowClear
        >
          {listProject.map((project) => (
            <Option key={project.id} value={project.id}>
              {project.projectName}
            </Option>
          ))}
        </Select>

        <Select
          placeholder="Chọn trạng thái"
          size="middle"
          style={{ width: 160 }}
          value={localForm.status || undefined}
          onChange={(val) => handleChange('status', val)}
          allowClear
        >
          <Option value="ACTIVE">Đang hoạt động</Option>
          <Option value="INACTIVE">Không hoạt động</Option>
        </Select>

        <Select
          placeholder="Chọn nhóm quyền"
          size="middle"
          style={{ width: 160 }}
          value={localForm.groupId || undefined}
          onChange={(val) => handleChange('groupId', val)}
          allowClear
        >
          {listGroup.map((group) => (
            <Option key={group.id} value={group.id}>
              {group.groupName}
            </Option>
          ))}
        </Select>

        <Button type="primary" size="middle" icon={<SearchOutlined />} onClick={searchClick}>
          Tra cứu
        </Button>

        <Button type="text" size="middle" danger icon={<DeleteOutlined />} onClick={resetClick}>
          Xóa tìm kiếm
        </Button>
      </Space>

      <Button type="primary" size="middle" className='' icon={<PlusOutlined />} onClick={() => setOpenDialog(true)}>
        Thêm mới
      </Button>

      <CreateUserDialog
        open={isOpenDialog}
        onClose={() => setOpenDialog(false)}
        listProject={listProject}
        listGroup={listGroup}
      />
    </div>
  );
};

export default Toolbar;