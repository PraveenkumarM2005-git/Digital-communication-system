import { Typography } from "@mui/material";

export default function RestrictedWords({ messages }) {
  return (
    <>
      <Typography variant="h6">Restricted Messages</Typography>
      {messages.map(msg => (
        <Typography key={msg.id}>{msg.content}</Typography>
      ))}
    </>
  );
}