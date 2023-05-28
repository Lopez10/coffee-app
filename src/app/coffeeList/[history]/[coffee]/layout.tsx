export default function CoffeeLayout({
	children
}:{
	children: React.ReactNode;
}) {
	return (
		<div>
			<h1>Layout coffee</h1>
			{children}
		</div>
	);
}