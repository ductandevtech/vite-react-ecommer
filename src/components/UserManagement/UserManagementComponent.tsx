// src/components/UserForm/UserTable.tsx
import React, { useEffect, useState } from 'react'
import { Table, Button, Space } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import { getAllUsers, deleteUser, User } from '~/services/userApi'
import { useNavigate } from 'react-router-dom'
interface UserRecord extends User {
  id: string //id cua firebase
}

const UserManagementComponent: React.FC = () => {
  const navigate = useNavigate()
  const [users, setUsers] = useState<UserRecord[]>([])
  
  const fetchUsers = async () => {
    try {
      const data = await getAllUsers()
      if (!data) {
        setUsers([])
        return
      }

      const userList: UserRecord[] = Object.entries(data).map(
        ([id, user]: [string, User]) => ({ ...user, id })
      );
      setUsers(userList)
    } catch (error) {
      console.error('Lỗi khi lấy danh sách user:', error)
    }
  }
  const handleUpdate = (id: string) => {
    navigate(`/users/edit/${id}`)
  }
  const handleDelete = async (id: string) => {
    if (confirm('Bạn có chắc chắn muốn xóa user này không?')) {
      await deleteUser(id)
      fetchUsers()
    }
  };

  useEffect(() => {
    fetchUsers()
  }, []);

  const columns: ColumnsType<UserRecord> = [
    {
      title: 'Họ',
      dataIndex: 'lastName',
      key: 'lastName',
    },
    {
      title: 'Tên',
      dataIndex: 'firstName',
      key: 'firstName',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Điện thoại',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Tỉnh/TP',
      dataIndex: 'city',
      key: 'city',
    },
    {
      title: 'Thao tác',
      key: 'actions',
      render: (_, record) => (
        <Space>
          <Button type="link" onClick={() => handleUpdate(record.id)}>Sửa</Button>
          <Button type="link" danger onClick={() => handleDelete(record.id)}>Xóa</Button>
        </Space>
      )
    }
  ];

  return (
    <div>
      <h2>Danh sách người dùng</h2>
      <Table
        dataSource={users}
        columns={columns}
        rowKey="id"
        
        pagination={{ pageSize: 10 }}
      />
    </div>
  );
};

export default UserManagementComponent;
