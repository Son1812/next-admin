import { post, PATHS } from '@/services/api/api-base';
import { mapStatusToEnum } from '@/utils/statusMapper';
import {CreateUser} from '../types/types'

export function createUser(data: CreateUser) {
  const payload = {
    ...data,
    status: mapStatusToEnum(data.status),
  };

  return post(PATHS.USER.add, payload);
}