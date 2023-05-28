export default function HistoryLayout({
	children
}:{
	children: React.ReactNode;
}) {
	return (
		<div>
			<h1>Layout history coffee</h1>
			{children}
		</div>
	);
}