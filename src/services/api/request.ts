import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios'
import { Modal } from 'antd'
import Router from 'next/router'
import { getToken, removeToken } from '@/modules/Auth/utils/auth'
import { TOKEN_HEADER_KEY } from './constants'

const AUTH_ERROR_CODE = 401
const AUTH_EXPIRED_MESSAGE = 'Hết phiên đăng nhập'

// Create Axios instance
const service = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL, // e.g., "https://api.example.com"
  timeout: 600000 // 10 minutes
})

// Request interceptor
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = getToken()

    if (token && config.headers) {
      config.headers[TOKEN_HEADER_KEY] = `Bearer ${token}`
    }

    if (config.headers) {
      config.headers['Content-Type'] = 'application/json'
    }

    return config
  },
  (error: AxiosError) => {
    console.error('[Request Error]', error)
    return Promise.reject(error)
  }
)

// Response interceptor
service.interceptors.response.use(
  (response: AxiosResponse) => {
    const { data } = response
    const statusCode = data?.statusCode

    if (statusCode === AUTH_ERROR_CODE) {
      handleAuthExpired()
    }

    return data
  },
  (error: AxiosError) => {
    const status = error?.response?.status

    if (status === AUTH_ERROR_CODE) {
      handleAuthExpired()
    }

    return Promise.reject(error)
  }
)

// Handle auth token expiration
function handleAuthExpired() {
  Modal.warning({
    title: 'Thông báo',
    content: AUTH_EXPIRED_MESSAGE,
    onOk: () => {
      removeToken()
      Router.replace('/login') // hoặc window.location.href = '/login'
    }
  })
}

export default service
