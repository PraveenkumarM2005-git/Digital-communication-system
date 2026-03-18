import { Typography } from "@mui/material";

export default function MessageItem({ msg }) {
  return (
    <Typography>
      <b>{msg.user_name}:</b> {msg.content}
    </Typography>
  );
}