// src/services/addressApi.ts
import axios from 'axios'

const BASE_URL = 'https://provinces.open-api.vn/api'

export const getProvinces = () => {
  return axios.get(`${BASE_URL}/p`)
};

export const getDistrictsByProvinceCode = (provinceCode: string | number) => {
  return axios.get(`${BASE_URL}/p/${provinceCode}?depth=2`)
}

export const getWardsByDistrictCode = (districtCode: string | number) => {
  return axios.get(`${BASE_URL}/d/${districtCode}?depth=2`)
}
