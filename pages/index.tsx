import { Inter } from "@next/font/google";
import { NextPage } from "next";
import { Card, CardContent, CardHeader, Grid } from "@mui/material";
import { Layout } from "../components/layouts";
import { EntryList, NewEntry } from "../components/ui";

const inter = Inter({ subsets: ["latin"] });

const HomePage: NextPage = () => {
	return (
		<Layout tittle="Home - OpenJira">
			<Grid container spacing={2}>
				<Grid item xs={12} sm={4}>
					<Card sx={{ height: "calc(100vh - 100px)" }}>
						<CardHeader title="Pendientes" />
						<NewEntry />
						<EntryList status={"pending"} />
					</Card>
				</Grid>
				<Grid item xs={12} sm={4}>
					<Card sx={{ height: "calc(100vh - 100px)" }}>
						<CardHeader title="El progreso" />
						<EntryList status={"in-progress"} />
					</Card>
				</Grid>
				<Grid item xs={12} sm={4}>
					<Card sx={{ height: "calc(100vh - 100px)" }}>
						<CardHeader title="Completadas" />
						<EntryList status={"finished"} />
					</Card>
				</Grid>
			</Grid>
		</Layout>
	);
};

export default HomePage;
