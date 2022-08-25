import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { transformer, trpc } from 'api/transformer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './screens/Home';
import Constants from 'expo-constants';

const serverUrl = Constants?.manifest?.extra?.serverUrl || 'http://localhost:300';
const apiUrl = `${serverUrl}/api/trpc`;

const Stack = createNativeStackNavigator();

export default function App() {
	const [queryClient] = React.useState(() => new QueryClient());
	const [trpcClient] = React.useState(() =>
		trpc.createClient({
			url: apiUrl,
			headers: async () => ({}),
			transformer
		})
	);

	return (
		<NavigationContainer>
			<trpc.Provider client={trpcClient} queryClient={queryClient}>
				<QueryClientProvider client={queryClient}>
					<Stack.Navigator>
						<Stack.Screen name="Home" component={HomeScreen} />
					</Stack.Navigator>
				</QueryClientProvider>
			</trpc.Provider>
		</NavigationContainer>
	);
}
