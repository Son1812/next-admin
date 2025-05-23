import { useMutation } from '@tanstack/react-query';
import { createUser } from '../services/index';
import { message } from 'antd';

export function useCreateUser() {
  return useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      message.success('Tạo người dùng thành công');
    },
    onError: (error: any) => {
      message.error(error?.message || 'Tạo người dùng thất bại');
    },
  });
}
