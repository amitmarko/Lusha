import axios from 'axios'

const API_URL = '/api'

export const getImages = () => axios.get(`${API_URL}/images`)
