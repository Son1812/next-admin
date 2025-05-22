export const PATHS = {
  AUTH: {
    login: '/api/v1.0/auth/login',
    changePassword: '/api/v1.0/auth/change-password',
    refreshToken: '/api/v1.0/auth/refresh-token'
  },
  USER: {
    list: '/api/v1.0/user/list',
    get: '/api/v1.0/user/{userId}',
    add: '/api/v1.0/user',
    update: '/api/v1.0/user/{userId}',
    remove: '/api/v1.0/user/{userId}',
    resetPassword: '/api/v1.0/user/{userId}/reset-password'
  },
} as const;