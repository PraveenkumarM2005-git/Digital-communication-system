import { useMessages } from "../hooks/useMessages";
import ChatWindow from "../components/chat/ChatWindow";
import MessageInput from "../components/chat/MessageInput";
import { Box } from "@mui/material";

export default function Chat() {
  const { messages, fetchMessages } = useMessages();

  return (
    <Box>
      <ChatWindow messages={messages} />
      <MessageInput refresh={fetchMessages} />
    </Box>
  );
}