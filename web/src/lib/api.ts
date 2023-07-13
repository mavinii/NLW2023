import axios from 'axios'

/**
 * This is a pre-configured axios instance that is used to make requests to the
 * backend API. It is pre-configured with the base URL of the API and the
 * authentication token if it exists.
 * In other words, this is the axios instance that is used to make requests to
 * the backend API.
 */

export const api = axios.create({
  baseURL: 'http://localhost:3000',
})
