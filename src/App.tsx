import { useEffect, useState } from "react";

import { ThemeProvider } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";
import { Input } from "@/components/ui/input";

function App() {
	const [selectedVariant, setSelectedVariant] =
		useState<ButtonGroupProps["selectedVariant"]>("Нет");
	const [name, setName] = useState("");
	const [hours, setHours] = useState(0);
	const [studies, setStudies] = useState(0);

	useEffect(() => {
		switch (selectedVariant) {
			case "Нет":
				setHours(0);
				break;
			case "Подсобным":
				setHours(30);
				break;
			case "Общим":
				setHours(50);
				break;
			default:
				break;
		}
	}, [selectedVariant]);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log("hi");
	};

	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<Header>Сдай отчет</Header>
			<form onSubmit={handleSubmit}>
				<div className="flex flex-col gap-3 p-2 max-w-md place-items-center">
					<h1>Укажи свое имя и первую букву фамилии.</h1>
					<div>
						<Input
							placeholder="Джейсон С"
							required
							defaultValue={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</div>
					<h1>Ты служил пионером в этом месяце?</h1>
					<ButtonGroup
						selectedVariant={selectedVariant}
						setSelectedVariant={setSelectedVariant}
					/>
					{selectedVariant !== "Нет" && (
						<>
							<h1>Укажи количество часов в служении.</h1>
							<div>
								<Input
									type="number"
									value={hours}
									onChange={(e) => setHours(Number(e.target.value))}
								/>
							</div>
						</>
					)}
					<h1>Укажи количество изучений.</h1>
					<div>
						<Input
							type="number"
							value={studies}
							onChange={(e) => setStudies(Number(e.target.value))}
						/>
					</div>
					<Button variant="outline" type="submit" size="lg">
						Отправить отчет
					</Button>
				</div>
			</form>
		</ThemeProvider>
	);
}

type ButtonGroupProps = {
	selectedVariant: "Нет" | "Подсобным" | "Общим";
	setSelectedVariant: (button: ButtonGroupProps["selectedVariant"]) => void;
};

function ButtonGroup({
	selectedVariant,
	setSelectedVariant,
}: ButtonGroupProps) {
	return (
		<div className="flex flex-col gap-2">
			<Button
				variant={selectedVariant === "Нет" ? "default" : "outline"}
				size="lg"
				type="button"
				onClick={() => setSelectedVariant("Нет")}
			>
				Нет
			</Button>
			<Button
				variant={selectedVariant === "Подсобным" ? "default" : "outline"}
				size="lg"
				type="button"
				onClick={() => setSelectedVariant("Подсобным")}
			>
				Подсобным
			</Button>
			<Button
				variant={selectedVariant === "Общим" ? "default" : "outline"}
				size="lg"
				type="button"
				onClick={() => setSelectedVariant("Общим")}
			>
				Общим
			</Button>
		</div>
	);
}

export default App;
