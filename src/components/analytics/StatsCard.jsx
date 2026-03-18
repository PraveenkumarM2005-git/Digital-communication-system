import { Card, CardContent, Typography } from "@mui/material";

export default function StatsCard({ title, value }) {
  return (
    <Card>
      <CardContent>
        <Typography>{title}</Typography>
        <Typography variant="h5">{value}</Typography>
      </CardContent>
    </Card>
  );
}