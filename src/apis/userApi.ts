import axios, { AxiosRequestConfig } from 'axios'

export const baseURL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080'
export const bearerToken = process.env.NEXT_PUBLIC_BEARER || 'token'

const instance = axios.create({ baseURL })

const instanceClient = () => {
  instance.interceptors.request.use(async (config) => {
    const headers = await getHeaders()
    Object.entries(headers).forEach(([key, value]) => {
      config.headers.set(key, value)
    })
    return config
  })

  return {
    get: (url: string, config?: AxiosRequestConfig<any> | undefined) => instance.get(url, config),
    post: (url: string, data: any, config?: AxiosRequestConfig<any> | undefined) => instance.post(url, data, config),
    put: (url: string, data: any, config?: AxiosRequestConfig<any> | undefined) => instance.put(url, data, config)
  }
}

export const api = instanceClient()

export const getHeaders = async () => {
  return {
    Authorization: `Bearer ${bearerToken}`
  }
}
