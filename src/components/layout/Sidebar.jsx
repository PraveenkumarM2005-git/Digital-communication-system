import { Box, List, ListItem, ListItemText } from "@mui/material";

export default function Sidebar() {
  return (
    <Box width={200} bgcolor="#eee" height="100vh">
      <List>
        <ListItem button>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Chat" />
        </ListItem>
      </List>
    </Box>
  );
}