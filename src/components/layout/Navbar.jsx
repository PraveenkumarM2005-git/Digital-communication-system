import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { signOut } from "../../services/authService";

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography sx={{ flexGrow: 1 }}>
          After Effect
        </Typography>

        <Button color="inherit" onClick={signOut}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
}