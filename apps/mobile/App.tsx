import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text } from 'react-native';
import { QueryClient, QueryClientProvider } from 'react-query';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { transformer, trpc } from 'api/src/trpc';
import React from 'react';

const localhost = `http://localhost:3000`;

export default function App() {
	const [queryClient] = React.useState(() => new QueryClient());
	const [trpcClient] = React.useState(() =>
		trpc.createClient({
			url: `${localhost}/api/trpc`,

			async headers() {
				return {};
			},
			transformer
		})
	);

	return (
		<trpc.Provider client={trpcClient} queryClient={queryClient}>
			<QueryClientProvider client={queryClient}>
				<SafeAreaProvider style={styles.container}>
					<Text>Open up App.tsx to start working on your 12323123 app!</Text>
					<StatusBar style="auto" />
				</SafeAreaProvider>
			</QueryClientProvider>
		</trpc.Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'flex-start',
		justifyContent: 'center'
	}
});
