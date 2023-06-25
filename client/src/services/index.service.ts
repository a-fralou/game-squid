import axios from 'axios'

const defaultOptions = {
  baseURL: 'http://localhost:5001'
}

export const API = axios.create(defaultOptions)
