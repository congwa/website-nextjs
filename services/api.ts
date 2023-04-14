import axios from 'axios'
import fetchAdapter from '@vespaiach/axios-fetch-adapter'

const request = axios.create({
  baseURL: 'http://localhost:3003',
  adapter: fetchAdapter,
  headers: {
    'Content-Type': 'application/json',
  },
})

export { request }
