import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Container,
  Grid,
  Avatar,
  TextField,
  Paper,
  Stack,
} from "@mui/material";
import { useNavigate } from "react-router-dom";


type User = {
  id: number;
  name: string;
  email: string;
};

export default function Products() {
  const [users, setUsers] = useState<User[]>([]);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editId, setEditId] = useState<number | null>(null);
  const handleDelete = (id: number) => {
  const updatedUsers = users.filter((user) => user.id !== id);
  setUsers(updatedUsers);
};

const handleAddUser = () => {
  const newUser = {
    id: Date.now(),
    name,
    email,
  };

  setUsers([...users, newUser]);

  setName("");
  setEmail("");
};

const handleUpdateUser = () => {
  const updatedUsers = users.map((user) => {
    if (user.id === editId) {
      return {
        ...user,
        name,
        email,
      };
    }

    return user;
  });

  setUsers(updatedUsers);

  setEditId(null);
  setName("");
  setEmail("");
};

  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      const data = await response.json();

      setUsers(data);
    };

    getUsers();
  }, []);

  return (
    <Container maxWidth="lg">
      <Typography
        variant="h4"
        align="center"
        sx={{ mt: 4, mb: 4 }}
      >
        Users Directory
      </Typography>
      <div>

<Paper
  elevation={3}
  sx={{
    p: 3,
    mb: 4,
    borderRadius: 3,
  }}
>
  <Typography
    variant="h6"
    sx={{ mb: 2 }}
  >
    {editId !== null ? "Update User" : "Add New User"}
  </Typography>

  <Stack
    direction={{ xs: "column", md: "row" }}
    spacing={2}
  >
    <TextField
      fullWidth
      label="Name"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />

    <TextField
      fullWidth
      label="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />

    <Button
      variant="contained"
      size="large"
      onClick={
        editId !== null
          ? handleUpdateUser
          : handleAddUser
      }
      sx={{
        minWidth: 180,
      }}
    >
      {editId !== null ? "Update User" : "Add User"}
    </Button>
  </Stack>
</Paper>
      </div>
      <Grid container spacing={3}>
        {users.map((user) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={user.id}>
            <Card
              sx={{
                height: "100%",
                borderRadius: 3,
                boxShadow: 3,
                textAlign: "center",
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-5px)",
                },
              }}
            >
              <CardContent>
                <Avatar
                  sx={{
                    width: 70,
                    height: 70,
                    mx: "auto",
                    mb: 2,
                  }}
                >
                  {user.name.charAt(0)}
                </Avatar>

                <Typography variant="h6">
                  {user.name}
                </Typography>

                <Typography
                  color="text.secondary"
                  sx={{ mb: 2 }}
                >
                  {user.email}
                </Typography>

                <Button onClick={() => navigate(`/users/${user.id}`)}>
                  View
                </Button>

                <Button
  onClick={() => {
    setEditId(user.id);
    setName(user.name);
    setEmail(user.email);
  }}
>
  Edit
</Button>

                <Button onClick={() => handleDelete(user.id)}>
                  Delete
                </Button>
                </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}