import { useLoaderData } from "react-router-dom";
import {
  Area,
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  Scatter,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Hero from "../Components/Hero";
import { Helmet } from "react-helmet";
import { useEffect } from "react";

const Statistics = () => {
  const gadgets = useLoaderData();
  console.log(gadgets);
  useEffect(()=>{
    document.title='Statistics'
  },[])
  return (
    <div className="space-y-4">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Statistics</title>
      </Helmet>
      <Hero
        address="stats"
        message="Statistics"
        des="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
      ></Hero>
      <div>
        <ResponsiveContainer width="100%" height={400}>
          <ComposedChart
            width={500}
            height={400}
            data={gadgets}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="product_title" scale="band" />
            <YAxis dataKey="price" />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="price"
              fill="#8884d8"
              stroke="blue"
            />
            <Bar dataKey="price" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="rating" stroke="#ff7300" />
            <Scatter data={gadgets} fill="#8884d8" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistics;
