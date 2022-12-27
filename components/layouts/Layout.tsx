import { Box } from "@mui/material";
import Head from "next/head";
import React, { FC } from "react";
import { Navbar, Sidebar } from "../ui";
interface Props {
	tittle?: string;
	children: JSX.Element | JSX.Element[];
}

export const Layout: FC<Props> = ({ tittle = "OpenJira", children }) => {
	return (
		<Box sx={{ flexFlow: 1 }}>
			<Head>
				<title> {tittle}</title>
			</Head>

			<Navbar />
			<Sidebar />

			<Box sx={{ padding: "10px 20px" }}>{children}</Box>
		</Box>
	);
};
