import { Card, Statistic, Row, Col } from 'antd';
import { ShoppingCartOutlined, CheckCircleOutlined, DollarOutlined } from '@ant-design/icons';

const OrderSummary = () => {
  const summaryData = {
    totalOrders: 150,
    pendingOrders: 30,
    completedOrders: 120,
    revenue: 24500.75,
  };

  return (
    <Card title="Order Summary">
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12}>
          <Statistic
            title="Total Orders"
            value={summaryData.totalOrders}
            prefix={<ShoppingCartOutlined />}
          />
        </Col>
        <Col xs={24} sm={12}>
          <Statistic
            title="Pending Orders"
            value={summaryData.pendingOrders}
            prefix={<ShoppingCartOutlined />}
            valueStyle={{ color: '#fa8c16' }}
          />
        </Col>
        <Col xs={24} sm={12}>
          <Statistic
            title="Completed Orders"
            value={summaryData.completedOrders}
            prefix={<CheckCircleOutlined />}
            valueStyle={{ color: '#52c41a' }}
          />
        </Col>
        <Col xs={24} sm={12}>
          <Statistic
            title="Revenue"
            value={summaryData.revenue}
            prefix={<DollarOutlined />}
            precision={2}
          />
        </Col>
      </Row>
    </Card>
  );
};

export default OrderSummary;