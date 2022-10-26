import axios from 'axios'
import config from '@/config/config'

const instance = axios

instance.defaults.baseURL = config.apiUrl

// instance.interceptors.request.use(params => {
//   params.headers.common.Authorization = 'Bearer token_teste_para_validar_e_verificar_o_token'

//   console.log('Interceptando requisição: ', params)

//   return params
// })

// instance.interceptors.response.use(response => {
//   for (let i = 0; i < response.data.length; i++) {
//     console.log(
//       `ID: ${response.data[i].id}, Titulo da tarefa: ${response.data[i].title}, Status da tarefa: ${response.data[i].status}`
//     )
//   }
//   return response
// })

export default instance
