import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import RegisterForm from '../RegisterForm/RegisterComponent'
import { getUserById, updateUser, User } from '~/services/userApi'

const EditUser: React.FC = () => {
  const { id } = useParams()
  const [initialData, setInitialData] = useState<User | null>(null)

  useEffect(() => {
    const fetchUser = async () => {
      if (id) {
        const user = await getUserById(id)
        setInitialData(user)
      }
    }
    fetchUser()
  }, [id])

  const handleSubmit = async (data: User) => {
    if (!id) return
    await updateUser(id, data)
  }

  if (!initialData) return <p>Đang tải...</p>

  return <RegisterForm initialData={initialData} onSubmit={handleSubmit} />
}

export default EditUser
