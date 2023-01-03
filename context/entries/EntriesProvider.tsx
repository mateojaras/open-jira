import { FC, useEffect, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import { entriesApi } from "../../apis";

import { Entry } from "../../interfaces/entry";
import { EntriesContext, entriesReducer } from "./";

export interface EntriesState {
	entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
	entries: [
		
	],
};

interface Props {
	children: JSX.Element | JSX.Element[];
}

export const EntriesProvider: FC<Props> = ({ children }) => {

	useEffect(() => {
		refreshEntries()
	}, [])
	
	const refreshEntries = async() =>{
			const {data} = await entriesApi.get<Entry[]>('/entries');
			dispatch({type:'[Entry] refresh-Data',payload:data})
	}


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
