import * as React from "react";
import Head from "next/head";
import { ComponetNavbar } from "../components/UI";
import { useRouter } from "next/router";

type Props = {
	children?: React.ReactNode;
	title?: string;
};

export const Layout: React.FC<Props> = ({ children, title }) => {

	const router = useRouter();

	return (
		<>
			<Head>
				<title>{title || "Pokemon App"}</title>
				<meta name="author" content="Kevin Garcia" />
				<meta name="description" content="Informacion sobre el pokemon" />
				<meta name="keywords" content="xxxx, pokemon, pokedex" />
				<meta
					property="og:title"
					content={`Información sobre ${title}`}
				/>
				<meta
					property="og:description"
					content={`Esta es la pagina sobre ${title}`}
				/>
				{/* <meta
					property="og:image"
					content={`${router.basePath}/img`}
				/> */}
			</Head>
			<ComponetNavbar />
			
			<main
				style={{
					padding: "0px 20px",
				}}
			>
				{children}
			</main>
		</>
	);
};
