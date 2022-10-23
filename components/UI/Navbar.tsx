import {
	Spacer,
	Text,
	useTheme,
	Navbar,
	Link as NextUILink,
} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { SwitchTheme } from "./SwicthTheme";

export const ComponetNavbar = () => {
	const { theme, isDark } = useTheme();

	return (
		<Navbar shouldHideOnScroll variant="sticky" maxWidth="fluid">
			<Navbar.Brand>
				<Image
					src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/443.png"
					alt="best pokemon ever"
					width={70}
					height={70}
					objectFit="cover"
					quality={100}
				/>
				<Link href="/" passHref>
					<NextUILink>
						<Text
							color={
								isDark
									? theme?.colors.yellow700.value
									: theme?.colors.yellow500.value
							}
							h2
						>
							P
						</Text>
						<Text
							color={
								isDark
									? theme?.colors.yellow700.value
									: theme?.colors.yellow500.value
							}
							h3
						>
							okémon
						</Text>
					</NextUILink>
				</Link>
			</Navbar.Brand>

			<Text
				color={
					isDark ? theme?.colors.accents9.value : theme?.colors.accents6.value
				}
				h4
				className="titleNavbar"
			>
				Pokedex de sinnoh
			</Text>

			<div
				style={{
					display: "flex",
					alignItems: "center",
				}}
			>
				<Link href="/favorites" passHref>
					<NextUILink>
						<Text
							color={
								isDark
									? theme?.colors.accents9.value
									: theme?.colors.accents6.value
							}
							h4
							css={{
								marginRight: "20px",
							}}
						>
							Favorites
						</Text>
					</NextUILink>
				</Link>

				<SwitchTheme />
			</div>
		</Navbar>
	);
};
