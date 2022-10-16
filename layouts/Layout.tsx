import * as React from "react";
import Head from "next/head";
import { ComponetNavbar } from "../components/UI";

type Props = {
	children?: React.ReactNode;
	title?: string;
};

export const Layout: React.FC<Props> = ({ children, title }) => {
	return (
		<>
			<Head>
				<title>{title || "Pokemon App"}</title>
				<meta name="author" content="Kevin Garcia" />
				<meta name="description" content="Informacion sobre el pokemon" />
				<meta name="keywords" content="xxxx, pokemon, pokedex" />
			</Head>
			<ComponetNavbar />
			<main style={{
                padding: "0px 20px"
            }}>{children}</main>
		</>
	);
};
