import { FC, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

import { Entry } from "../../interfaces/entry";
import { EntriesContext, entriesReducer } from "./";

export interface EntriesState {
	entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
	entries: [
		{
			_id: uuidv4(),
			description: "Pendiente --- Proident dolor duis elit sunt",
			status: "pending",
			createdAt: Date.now(),
		},
		{
			_id: uuidv4(),
			description:
				"En progreso --- Lorem ipsum dolor sit amet consectetur adipisicing elit. Labo",
			status: "in-progress",
			createdAt: Date.now() - 1000000,
		},
		{
			_id: uuidv4(),
			description:
				"Terminadas ---  x recusandae esse! Ex beatae, voluptate temporibus dolor natus eligendi inventore rerum vel ea?",
			status: "finished",
			createdAt: Date.now() - 100000,
		},
	],
};

interface Props {
	children: JSX.Element | JSX.Element[];
}

export const EntriesProvider: FC<Props> = ({ children }) => {
	const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

	const addNewEntry = (description: string) => {
		const newEntry: Entry = {
			_id: uuidv4(),
			description,
			status: "pending",
			createdAt: Date.now(),
		};

		dispatch({ type: "[Entry] Add-Entry", payload: newEntry });
	};

	const updateEntry = (entry: Entry) => {
		dispatch({ type: "[Entry] Entry-Updated", payload: entry });
	};

	return (
		<EntriesContext.Provider
			value={{
				...state,
				addNewEntry,
				updateEntry,
			}}
		>
			{children}
		</EntriesContext.Provider>
	);
};
