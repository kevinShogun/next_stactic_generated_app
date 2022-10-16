import { Spacer, Text, useTheme, Navbar } from "@nextui-org/react";
import Image from "next/image";
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
			</Navbar.Brand>

			<Text
				color={
					isDark ? theme?.colors.accents9.value : theme?.colors.accents6.value
				}
				h4
			>
				Pokedex de sinnoh
			</Text>
			<SwitchTheme />
		</Navbar>
	);
};
