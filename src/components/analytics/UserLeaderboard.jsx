import { Card, CardContent, Typography } from "@mui/material";

export default function UserLeaderboard({ users }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Top Users</Typography>

        {users.map(([user, count], index) => (
          <Typography key={user}>
            {index + 1}. {user} - {count} messages
          </Typography>
        ))}
      </CardContent>
    </Card>
  );
}