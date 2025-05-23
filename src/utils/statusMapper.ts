
export enum UserStatus {
  ACTIVE = 'ACTIVE',
  DEACTIVE = 'DEACTIVE'
}

export function mapStatusToEnum(status: boolean): UserStatus {
  return status ? UserStatus.ACTIVE : UserStatus.DEACTIVE;
}