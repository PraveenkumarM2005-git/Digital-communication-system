import { Typography } from "@mui/material";

export default function WordFrequency({ words }) {
  return (
    <>
      <Typography variant="h6">Top Words</Typography>
      {words.map(([word, count]) => (
        <Typography key={word}>{word} - {count}</Typography>
      ))}
    </>
  );
}