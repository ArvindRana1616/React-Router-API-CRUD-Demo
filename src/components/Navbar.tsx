import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <AppBar
      position="sticky"
      sx={{
        background: "#111827",
        boxShadow: "none",
        borderBottom: "1px solid #374151",
      }}
    >
      <Toolbar>
        <Typography
          variant="h5"
          sx={{
            flexGrow: 1,
            fontWeight: "bold",
            letterSpacing: 1,
          }}
        >
          🚀 React CRUD
        </Typography>

        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            color="inherit"
            sx={{
              textTransform: "none",
              fontSize: "16px",
            }}
            component={Link}
            to="/home"
          >
            Home
          </Button>

          <Button
            color="inherit"
            sx={{
              textTransform: "none",
              fontSize: "16px",
            }}
            component={Link}
            to="/products"
          >
            Users
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}