import { Line } from '@ant-design/plots';
import { Card } from 'antd';
import { salesData } from '../data/mockData';

const SalesChart = () => {
  const config = {
    data: salesData,
    xField: 'date',
    yField: 'sales',
    point: { size: 5, shape: 'diamond' },
    tooltip: {
      formatter: (datum) => ({
        name: 'Sales',
        value: `$${datum.sales.toFixed(2)}`,
      }),
    },
  };

  return (
    <Card title="Sales Analytics (Last 30 Days)">
      <Line {...config} />
    </Card>
  );
};

export default SalesChart;