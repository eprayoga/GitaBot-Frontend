import axios, { AxiosRequestConfig } from 'axios'
import Cookies from 'js-cookie'

interface CallAPIProps extends AxiosRequestConfig {
  token?: boolean
  serverToken?: string
  uploadProgress?: boolean
}

export default async function callAPI({
  url,
  method,
  data,
  token,
  serverToken,
  uploadProgress
}: CallAPIProps) {
  let headers = {}
  if (serverToken) {
    headers = {
      Authorization: `Bearer ${serverToken}`
    }
  } else if (token) {
    const tokenCookies = Cookies.get('token')
    if (tokenCookies) {
      const jwtToken = atob(tokenCookies)
      headers = {
        Authorization: `Bearer ${jwtToken}`
      }
    }
  }
  if (uploadProgress) {
    const response = await axios({
      url,
      method,
      data,
      headers,
      onUploadProgress: (upload: any) => {
        let uploadProgress = Math.round((upload.loaded / upload.total) * 100)
        localStorage.setItem('upload-progress', uploadProgress.toString())
      }
    }).catch(err => err.response)
    localStorage.removeItem('upload-progress')
    if (response?.status > 300) {
      const res = {
        error: true,
        message: response.data.message,
        data: null
      }
      return res
    }
    const res = {
      error: false,
      message: 'success',
      data: response.data
    }
    return res
  } else {
    const response = await axios({
      url,
      method,
      data,
      headers
    }).catch(err => err.response)
    if (response?.status > 300) {
      const res = {
        error: true,
        message: response.data.message,
        data: null
      }
      return res
    }
    const res = {
      error: false,
      message: 'success',
      data: response.data
    }
    return res
  }
}
