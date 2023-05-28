import Link from 'next/link';
import { exampleCoffeeData } from './ICoffeeListExample';

export function CoffeeList () {
	const coffees = exampleCoffeeData;
	return (
		<>
			{coffees.map(coffee => (
				<article key={coffee.id}>
					<Link href={'/coffees/[history]'} as={`/coffees/${coffee.id}`}>
						<h1>{coffee.name}</h1>
					</Link>
				</article>
			))}
		</>
	);
}