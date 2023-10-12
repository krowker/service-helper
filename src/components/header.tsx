import React from "react";
import { ModeToggle } from "./mode-toggle";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { EditProfile } from "./edit-profile";

export const Header: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	return (
		<header className="flex justify-between place-items-center">
			<EditProfile>
				<Avatar>
					<AvatarFallback>ВЖ</AvatarFallback>
				</Avatar>
			</EditProfile>
			<span className="text-xl">{children}</span>
			<ModeToggle />
		</header>
	);
};
