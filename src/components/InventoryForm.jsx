import { useState } from 'react';
import { Form, Input, InputNumber, Switch, Button, Space } from 'antd';

const InventoryForm = ({ initialValues, onSubmit, onCancel }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const values = await form.validateFields();
      onSubmit(values);
      form.resetFields();
    } catch (error) {
      console.error('Validation failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={initialValues || { status: true }}
    >
      <Form.Item
        name="name"
        label="Product Name"
        rules={[{ required: true, message: 'Please enter product name' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="sku"
        label="SKU"
        rules={[{ required: true, message: 'Please enter SKU' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="price"
        label="Price"
        rules={[{ required: true, message: 'Please enter price' }]}
      >
        <InputNumber min={0} style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item
        name="stock"
        label="Stock Quantity"
        rules={[{ required: true, message: 'Please enter stock quantity' }]}
      >
        <InputNumber min={0} style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item name="status" label="Status" valuePropName="checked">
        <Switch />
      </Form.Item>
      <Form.Item>
        <Space>
          <Button onClick={() => { form.resetFields(); onCancel(); }}>
            Cancel
          </Button>
          <Button type="primary" onClick={handleSubmit} loading={loading}>
            Submit
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default InventoryForm;