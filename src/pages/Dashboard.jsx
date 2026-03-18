import { Grid, Box } from "@mui/material";
import { useMessages } from "../hooks/useMessages";

import { getMessageCount, getTopWords, getUserActivity } from "../utils/analytics";
import { findRestrictedWords } from "../utils/filterWords";

import MessageCount from "../components/analytics/MessageCount";
import WordFrequency from "../components/analytics/WordFrequency";
import RestrictedWords from "../components/analytics/RestrictedWords";

import UserLeaderboard from "../components/analytics/UserLeaderboard";
import MessagesChart from "../components/analytics/MessagesChart";
import UserChart from "../components/analytics/UserChart";
import WordChart from "../components/analytics/WordChart";

export default function Dashboard() {
  const { messages } = useMessages();

  const total = getMessageCount(messages);
  const words = getTopWords(messages);
  const users = getUserActivity(messages);

  return (
    <Box p={2}>
      <Grid container spacing={3}>

        <Grid item xs={12}>
          <MessageCount count={total} />
        </Grid>

        <Grid item xs={6}>
          <UserLeaderboard users={users} />
        </Grid>

        <Grid item xs={6}>
          <MessagesChart messages={messages} />
        </Grid>

        <Grid item xs={6}>
          <UserChart users={users} />
        </Grid>

        <Grid item xs={6}>
          <WordChart words={words} />
        </Grid>

        <Grid item xs={12}>
          <RestrictedWords messages={findRestrictedWords(messages)} />
        </Grid>

      </Grid>
    </Box>
  );
}