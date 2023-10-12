import React from "react";
import { ModeToggle } from "./mode-toggle";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export const Header: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	return (
		<header className="flex justify-between place-items-center">
			<Avatar>
				<AvatarFallback>ВЖ</AvatarFallback>
			</Avatar>
			<span className="text-xl">{children}</span>
			<ModeToggle />
		</header>
	);
};
