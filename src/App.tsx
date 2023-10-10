import { ThemeProvider } from "@/components/theme-provider"
import { Button } from "@/components/ui/Button";
import { ModeToggle } from "@/components/mode-toggle";

function App() {
	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ModeToggle/>
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
