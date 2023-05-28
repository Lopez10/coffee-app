import React from 'react';

export default function RootLayout({
	children,
}: {
  children: React.ReactNode;
}) {
	return (
		<html>
			<title>Cofy App</title>
			<body>{children}</body>
		</html>
	);
}
