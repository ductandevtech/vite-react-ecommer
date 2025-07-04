import axios from 'axios'

const API_BASE_URL = 'https://fir-86966-default-rtdb.firebaseio.com'

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  gender: string;
  dob: string;
  city: string;
  district: string;
  ward: string;
  address: string;
}

export const createUser = async (user: User) => {
  const res = await axios.post(`${API_BASE_URL}/users.json`, user)
  return res.data
}

export const getAllUsers = async () => {
  const res = await axios.get(`${API_BASE_URL}/users.json`)
  return res.data
}
export const getUserById = async (id: string): Promise<User> => {
  const res = await axios.get(`${API_BASE_URL}/users/${id}.json`)
  return res.data
}

export const updateUser = async (id: string, user: Partial<User>) => {
  const res = await axios.patch(`${API_BASE_URL}/users/${id}.json`, user)
  return res.data
}

export const deleteUser = async (id: string) => {
  const res = await axios.delete(`${API_BASE_URL}/users/${id}.json`)
  return res.data
}
