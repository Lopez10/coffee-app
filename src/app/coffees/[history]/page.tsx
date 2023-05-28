import Link from 'next/link';
import { exampleCoffeeData } from '../ICoffeeListExample';

export default function HistoryPage({
	params
}:{
	params: {
		history: string;
	};
}) {
	const { history: historyId } = params;

	// TODO: Remove this mock
	const coffeeHistoryFounded = exampleCoffeeData
		.find(coffee => coffee.history
			.find(coffeeHistory => coffeeHistory.id === historyId	));

	return (
		<section>
			<h1>{coffeeHistoryFounded?.name}</h1>
			{
				coffeeHistoryFounded?.history.map(coffeeHistory => (
					<article key={coffeeHistory.id}>
						<Link href={'/coffees/[history]/[coffee]'} as={`/coffees/${historyId}/${coffeeHistory.id}`}>
							<h2>{coffeeHistory.name}</h2>
						</Link>
					</article>
				))
			}
		</section>
	);
}