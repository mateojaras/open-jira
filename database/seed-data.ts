
interface SeedData{
    entries:SeedEntry[];
}

interface SeedEntry {
    description:string;
    status:String;
    createdAt:number
}




export const seedData:SeedData = {
    entries:[
        {
			
			description: "Pendiente --- Proident dolor duis elit sunt",
			status: "pending",
			createdAt: Date.now(),
		},
		{
			
			description:
				"En progreso --- Lorem ipsum dolor sit amet consectetur adipisicing elit. Labo",
			status: "in-progress",
			createdAt: Date.now() - 1000000,
		},
		{
			
			description:
				"Terminadas ---  x recusandae esse! Ex beatae, voluptate temporibus dolor natus eligendi inventore rerum vel ea?",
			status: "finished",
			createdAt: Date.now() - 100000,
		},
    ]
}