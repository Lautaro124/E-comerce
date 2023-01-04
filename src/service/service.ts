import axios from 'axios'
import { API_URL, Product } from './utils'

const service = async (): Promise<Product[]> => {
  try {
    const response = await axios.get( API_URL )
    return response.data
  }
  catch (error) {
    throw error
  }
}

export default service