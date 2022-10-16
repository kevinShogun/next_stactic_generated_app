import { useTheme as useNextTheme } from "next-themes";
import { Switch, useTheme } from "@nextui-org/react";
import { SunIcon } from "./SunIcon";
import { MoonIcon } from "./MoonIcon";
export const SwitchTheme = () => {
	const { setTheme } = useNextTheme();
	const { isDark, theme } = useTheme();

	return (
		<div>
			<Switch
				checked={!isDark}
				size="xl"
                color={"warning"}
				onChange={(e) => setTheme(e.target.checked ? "light" : "dark")}
				iconOn={<SunIcon filled />}
				iconOff={<MoonIcon filled />}
			/>
		</div>
	);
};
