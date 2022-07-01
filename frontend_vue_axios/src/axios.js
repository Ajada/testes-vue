import axios from 'axios'
import config from '@/config/config'

const instance = axios

instance.defaults.baseURL = config.apiUrl

instance.interceptors.request.use(params => {
  if (params.method === 'post') {
    params.data = {
      ...params.data,
      authToken: 'IHJBVuyfv67890Tv&jkgovUTD8IPUG8vuijui'
    }
  }

  params.headers.common.Authorization = 'Bearer token_teste_para_validar_e_verificar_o_token'

  console.log(params)

  return params
})

export default instance
