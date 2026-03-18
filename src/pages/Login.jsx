import { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { signInWithMagicLink } from "../services/authService";

export default function Login() {
  const [email, setEmail] = useState("");

  const handleLogin = async () => {
    const { error } = await signInWithMagicLink(email);
    if (!error) {
      alert("Check your email for login link!");
    }
  };

  return (
    <Box display="flex" height="100vh" justifyContent="center" alignItems="center">
      <Box width={300}>
        <Typography variant="h5">Login</Typography>

        <TextField
          fullWidth
          label="Email"
          margin="normal"
          onChange={(e) => setEmail(e.target.value)}
        />

        <Button fullWidth variant="contained" onClick={handleLogin}>
          Send Magic Link
        </Button>
      </Box>
    </Box>
  );
}