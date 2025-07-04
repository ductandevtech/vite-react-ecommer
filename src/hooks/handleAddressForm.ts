// src/hooks/useAddressForm.ts
import { useEffect, useState } from "react"
import { getProvinces, getDistrictsByProvinceCode, getWardsByDistrictCode } from "~/services/apiAddress"

export const useAddressForm = () => {
  const [cities, setCities] = useState<any[]>([])
  const [districts, setDistricts] = useState<any[]>([])
  const [wards, setWards] = useState<any[]>([])

  useEffect(() => {
    getProvinces().then((res) => setCities(res.data))
  }, [])

  const handleCityChange = (value: string, setFieldValue: any) => {
    const selectedCity = cities.find((city) => city.name === value)
    setFieldValue("city", value)
    setFieldValue("district", "")
    setFieldValue("ward", "")
    if (selectedCity) {
      getDistrictsByProvinceCode(selectedCity.code).then((res) => {
        setDistricts(res.data.districts || [])
        setWards([])
      })
    }
  }

  const handleDistrictChange = (value: string, setFieldValue: any) => {
    const selectedDistrict = districts.find((d) => d.name === value)
    setFieldValue("district", value)
    setFieldValue("ward", "")
    if (selectedDistrict) {
      getWardsByDistrictCode(selectedDistrict.code).then((res) => {
        setWards(res.data.wards || [])
      })
    }
  }
  const setInitialAddress = async (cityName: string, districtName: string) => {
    // dùng để set lại danh sách khi edit
    await handleCityChange(cityName, () => {})
    await handleDistrictChange(districtName, () => {})
  }
  return {
    cities,
    districts,
    wards,
    handleCityChange,
    handleDistrictChange,
    setInitialAddress,
  }
}
