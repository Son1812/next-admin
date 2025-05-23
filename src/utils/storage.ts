import * as constants from './constants-storage'
import Cookies from 'js-cookie'
import jwt_decode from 'jwt-decode'

export function getToken(): string | undefined {
  return Cookies.get(constants.TOKEN_KEY)
}

export function setToken(token: string): void {
  Cookies.set(constants.TOKEN_KEY, token)
}

export function getRefreshToken(): string | undefined {
  return Cookies.get(constants.RF_TOKEN_KEY)
}

export function setRefreshToken(token: string): void {
  Cookies.set(constants.RF_TOKEN_KEY, token)
}

export function removeToken(): void {
  Cookies.remove(constants.RF_TOKEN_KEY)
  Cookies.remove(constants.TOKEN_KEY)
}
