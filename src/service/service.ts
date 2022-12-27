import axios from 'axios'
import { API_URL } from './utils'

const service =async <P> () => {
  try {
    const response: P = (await axios.get(API_URL)).data

    return response
  }
  catch (error) {
    throw error
  }
}

export default service