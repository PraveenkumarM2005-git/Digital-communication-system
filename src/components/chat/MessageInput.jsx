import { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { sendMessage } from "../../services/messageService";

export default function MessageInput({ refresh }) {
  const [text, setText] = useState("");

  const handleSend = async () => {
    if (!text) return;
    await sendMessage(text, "User");
    setText("");
    refresh();
  };

  return (
    <Box display="flex">
      <TextField
        fullWidth
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button onClick={handleSend}>Send</Button>
    </Box>
  );
}