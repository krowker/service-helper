import { ThemeProvider } from "@/components/theme-provider"
import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";

function App() {
	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
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
		</ThemeProvider>
	);
}

export default App;
