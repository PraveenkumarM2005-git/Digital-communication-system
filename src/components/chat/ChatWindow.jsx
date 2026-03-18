import { Box, Typography } from "@mui/material";

export default function ChatWindow({ messages }) {
  return (
    <Box>
      {messages.map((msg) => (
        <Typography key={msg.id}>
          <b>{msg.user_name}:</b> {msg.content}
        </Typography>
      ))}
    </Box>
  );
}