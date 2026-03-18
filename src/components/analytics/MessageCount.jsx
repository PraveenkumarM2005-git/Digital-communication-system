import StatsCard from "./StatsCard";

export default function MessageCount({ count }) {
  return <StatsCard title="Total Messages" value={count} />;
}