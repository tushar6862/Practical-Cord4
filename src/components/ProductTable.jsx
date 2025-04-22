import { useState } from 'react';
import { Table, Input, Button, Space, Switch, Modal } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import InventoryForm from './InventoryForm';
import { products } from '../data/mockData';

const ProductTable = () => {
  const [data, setData] = useState(products);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [searchText, setSearchText] = useState('');

  const handleEdit = (record) => {
    setEditingProduct(record);
    setIsModalVisible(true);
  };

  const handleDelete = (key) => {
    setData(data.filter((item) => item.key !== key));
  };

  const handleSubmit = (values) => {
    if (editingProduct) {
      setData(
        data.map((item) =>
          item.key === editingProduct.key ? { ...item, ...values } : item
        )
      );
    } else {
      setData([...data, { key: Date.now(), ...values }]);
    }
    setIsModalVisible(false);
    setEditingProduct(null);
  };

  const columns = [
    {
      title: 'Image',
      dataIndex: 'image',
      render: (text) => <img src={text} alt="product" style={{ width: 50 }} />,
    },
    { title: 'Name', dataIndex: 'name', sorter: (a, b) => a.name.localeCompare(b.name) },
    { title: 'SKU', dataIndex: 'sku' },
    {
      title: 'Price',
      dataIndex: 'price',
      sorter: (a, b) => a.price - b.price,
      render: (text) => `$${text.toFixed(2)}`,
    },
    {
      title: 'Stock',
      dataIndex: 'stock',
      sorter: (a, b) => a.stock - b.stock,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      sorter: (a, b) => a.status - b.status,
      render: (status) => <Switch checked={status} disabled />,
    },
    {
      title: 'Actions',
      render: (_, record) => (
        <Space>
          <Button icon={<EditOutlined />} onClick={() => handleEdit(record)} />
          <Button icon={<DeleteOutlined />} onClick={() => handleDelete(record.key)} />
        </Space>
      ),
    },
  ];

  const filteredData = data.filter(
    (item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase()) ||
      item.sku.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <>
      <Space style={{ marginBottom: 16 }}>
        <Input.Search
          placeholder="Search products"
          onChange={(e) => setSearchText(e.target.value)}
          style={{ width: 200 }}
        />
        <Button
          type="primary"
          onClick={() => {
           setEditingProduct(null);
           setIsModalVisible(true);
          }}
        >
          Add Product
        </Button>
      </Space>
      <Table
        columns={columns}
        dataSource={filteredData}
        pagination={{ pageSize: 5 }}
        scroll={{ x: 800 }}
      />
      {isModalVisible && <Modal
        title={editingProduct ? 'Edit Product' : 'Add Product'}
        open={isModalVisible}
        onCancel={() => {
          setIsModalVisible(false);
          setEditingProduct(null);
        }}
        footer={null}
      >
        <InventoryForm
          initialValues={editingProduct}
          onSubmit={handleSubmit}
          onCancel={() => {
            setIsModalVisible(false);
            setEditingProduct(null);
          }}
        />
      </Modal> }
    </>
  );
};

export default ProductTable;