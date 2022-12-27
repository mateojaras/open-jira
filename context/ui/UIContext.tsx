import { createContext } from "react";

interface ContextProps {
	sidemenuOpen: boolean;
	isAddingEntry: boolean;
	isDragging: boolean;
	setIsAddingEntry: (entry: boolean) => void;
	openSideMenu: () => void;
	closeSideMenu: () => void;
	startDragging: () => void;
	endDragging: () => void;
}

export const UIContext = createContext({} as ContextProps);
