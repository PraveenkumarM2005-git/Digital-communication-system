import {
  BarChart, Bar, XAxis, YAxis, Tooltip
} from "recharts";

export default function UserChart({ users }) {

  const data = users.map(([user, count]) => ({
    user,
    count
  }));

  return (
    <BarChart width={500} height={300} data={data}>
      <XAxis dataKey="user" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="count" />
    </BarChart>
  );
}