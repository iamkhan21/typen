import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { transformer, trpc } from 'api/transformer';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './screens/Home';
import Constants from 'expo-constants';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const MyTheme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		primary: 'rgb(255, 45, 85)'
	}
};
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
		<trpc.Provider client={trpcClient} queryClient={queryClient}>
			<QueryClientProvider client={queryClient}>
				<SafeAreaProvider>
					<NavigationContainer theme={MyTheme}>
						<Stack.Navigator>
							<Stack.Screen name="Home" component={HomeScreen} />
						</Stack.Navigator>
					</NavigationContainer>
				</SafeAreaProvider>
			</QueryClientProvider>
		</trpc.Provider>
	);
}
