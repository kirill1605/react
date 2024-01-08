import React from 'react';
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 7 ? 'geekblue' : 'green';
          if (tag === 'злой') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Пригласить {record.name}</a>
        <a>Удалить</a>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'Иванов Иван',
    age: 21,
    address: 'Кремлёвская набережная, 1, стр. 3',
    tags: ['добрый', 'разработчик'],
  },
  {
    key: '2',
    name: 'Винник Дмитрий',
    age: 32,
    address: 'Преображенская улица, 132',
    tags: ['алкоголик'],
  },
  {
    key: '3',
    name: 'Алексеев Михаил',
    age: 32,
    address: 'Рижский проезд, 15, к. 2',
    tags: ['злой'],
  },
  {
    key: '4',
    name: 'Ульянов Владимир',
    age: 53,
    address: 'Красная площадь, 9,',
    tags: ['рабочий'],
  },
];

const CustomTable: React.FC = () => <Table columns={columns} dataSource={data} />;

export default CustomTable;