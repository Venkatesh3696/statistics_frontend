import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from "recharts";

const MyChart = ({ data }) => {
  const DataFormatter = (number) => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`;
    }
    return number.toString();
  };

  return (
    <ResponsiveContainer width="100%" height={500}>
      <BarChart
        data={data}
        margin={{
          top: 5,
        }}
      >
        <XAxis
          dataKey="price_range"
          tick={{
            stroke: "gray",
            strokeWidth: 1,
          }}
        />
        <YAxis
          tickFormatter={DataFormatter}
          tick={{
            stroke: "gray",
            strokeWidth: 0,
          }}
        />
        <Legend
          wrapperStyle={{
            padding: 30,
          }}
        />
        <Bar
          dataKey="total_products"
          name="products"
          fill="#1f77b4"
          barSize="10%"
        />
        {/* <Bar dataKey="girls" name="Girls" fill="#fd7f0e" barSize="20%" /> */}
      </BarChart>
    </ResponsiveContainer>
  );
};

export default MyChart;
