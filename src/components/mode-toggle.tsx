import { Moon, Sun } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "@/components/theme-provider";

export const ModeToggle = () => {
	const { setTheme, theme } = useTheme();

	const togleTheme = (currentTheme: string) => {
		if (currentTheme === "dark") {
			setTheme("light");
		} else {
			setTheme("dark");
		}
	};

	return (
		<div className=" flex">
			<Switch onCheckedChange={() => togleTheme(theme)} />
			<Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
			<Moon className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
		</div>
	);
};
