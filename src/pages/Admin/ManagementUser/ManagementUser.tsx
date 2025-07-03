import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import type { TableProps } from 'antd';
import { Space, Table } from 'antd';

type ColumnsType<T extends object> = TableProps<T>['columns'];

interface DataType {
  key: number;
  name: string;
  age: number;
  address: string;
  description: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    filters: [
      {
        text: 'London',
        value: 'London',
      },
      {
        text: 'New York',
        value: 'New York',
      },
    ],
    onFilter: (value, record) => record.address.indexOf(value as string) === 0,
  },
  {
    title: 'Action',
    key: 'action',
    sorter: true,
    render: () => (
      <Space size="middle">
        <a>Delete</a>
        <a>
          <Space>
            More actions
            <DownOutlined />
          </Space>
        </a>
      </Space>
    ),
  },
];

const data = Array.from({ length: 10 }).map<DataType>((_, i) => ({
  key: i,
  name: 'John Brown',
  age: Number(`${i}2`),
  address: `New York No. ${i} Lake Park`,
  description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
}));

const ManagementUser: React.FC = () => {
  return (
    <Table<DataType>
      bordered
      size="large"
      expandable={{
        expandedRowRender: (record) => <p>{record.description}</p>,
      }}
      showHeader
      footer={() => 'Here is footer'}
      rowSelection={{}}
      scroll={{ y: 240, x: '100vw' }}
      tableLayout="fixed"
      pagination={{
        position: ['none', 'bottomRight'],
      }}
      columns={columns}
      dataSource={data}
    />
  );
};

export default ManagementUser;
