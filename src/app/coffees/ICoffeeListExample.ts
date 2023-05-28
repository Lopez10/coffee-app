export const exampleCoffeeData: ICoffeeListExample[] = [
	{
		id: '1',
		name: 'Ballenato',
		history: [
			{
				id: '1',
				name: 'History 1',
				coffeData: 
					{
						id: '1',
						name: 'Data 1',
						date: '2020-01-01',
						grams: 18,
						extracted: 36,
						time: 36,
						temperature: 92,
						grind: 20
					},
			}
		]
	},
];

export interface ICoffeeListExample {
    id: string;
    name: string;
    history: CoffeHistory[];
}

export interface CoffeHistory {
    id: string;
    name: string;
    coffeData: {
		id: string;
		name: string;
		date: string;
		grams: number;
		extracted: number;
		time: number;
		temperature: number;
		grind: number;
	}
}

interface CoffeeData {
    id: string;
    name: string;
    date: string;
    grams: number;
    extracted: number;
    time: number;
    temperature: number;
    grind: number;
}