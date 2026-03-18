import {
  BarChart, Bar, XAxis, YAxis, Tooltip
} from "recharts";

export default function WordChart({ words }) {

  const data = words.map(([word, count]) => ({
    word,
    count
  }));

  return (
    <BarChart width={500} height={300} data={data}>
      <XAxis dataKey="word" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="count" />
    </BarChart>
  );
}