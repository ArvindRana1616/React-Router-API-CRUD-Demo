import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
    Card,
    CardContent,
    Typography,
    Container,
    Avatar,
} from "@mui/material";

type User = {
    id: number;
    name: string;
    email: string;
};

export default function UserDetails() {
    const { id } = useParams();

    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const getUser = async () => {
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/users/${id}`
            );

            const data = await response.json();

            setUser(data);
        };

        getUser();
    }, [id]);

    if (!user) {
        return <h2>Loading...</h2>;
    }

    return (
        <Container maxWidth="sm">
            <Typography
                variant="h4"
                align="center"
                sx={{ mt: 4, mb: 3 }}
            >
                User Details
            </Typography>

            <Card
                sx={{
                    borderRadius: 3,
                    boxShadow: 3,
                    textAlign: "center",
                    p: 2,
                }}
            >
                <CardContent>
                    <Avatar
                        sx={{
                            width: 80,
                            height: 80,
                            margin: "0 auto",
                            mb: 2,
                        }}
                    >
                        {user.name.charAt(0)}
                    </Avatar>

                    <Typography variant="h5" gutterBottom>
                        {user.name}
                    </Typography>

                    <Typography color="text.secondary">
                        {user.email}
                    </Typography>
                </CardContent>
            </Card>
        </Container>
    );
}