import { ThemeProvider } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";
import { useTelegram } from "./components/useTelegram";

function App() {
	const { CloudStorage } = useTelegram();

	const checkName = async () => {
		const name = await CloudStorage.getItem("name");
		console.log("name is ", name);
		return name;
	};

	const checkSurName = async () => {
		const surname = await CloudStorage.getItem("surname");
		console.log("surname is", surname);

		return surname;
	};

	checkName();

	checkSurName();

	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<div className="p-2">
				<Header>Сдай отчет</Header>
				<h1>Привет! Ты служил пионером в этом месяце? </h1>
				<div className="flex gap-2">
					<Button variant="outline" size={"lg"}>
						Нет
					</Button>
					<Button variant="outline" size={"lg"}>
						Да
					</Button>
				</div>
			</div>
		</ThemeProvider>
	);
}

export default App;
