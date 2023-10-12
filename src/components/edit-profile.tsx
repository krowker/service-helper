import React from "react";

import {
	Dialog,
	DialogTrigger,
	DialogContent,
	DialogTitle,
	DialogDescription,
	DialogHeader,
	DialogFooter,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export const EditProfile: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	return (
		<Dialog>
			<DialogTrigger asChild>{children}</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Редактирование профиля</DialogTitle>
					<DialogDescription>
						Введи тут своё полное имя и первую букву фамили. Например,
						Джейсон С
					</DialogDescription>
				</DialogHeader>
				<div className="grid gap-4 py-4">
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="name" className="text-right">
							Полное имя
						</Label>
						<Input
							id="name"
							defaultValue="Джейсон"
							className="col-span-3"
						/>
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="username" className="text-right">
							Буква фамилии
						</Label>
						<Input
							id="username"
							defaultValue="C"
							className="col-span-3"
						/>
					</div>
				</div>
				<DialogFooter>
					<Button type="submit">Сохранить</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};
