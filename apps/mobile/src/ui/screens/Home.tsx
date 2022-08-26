import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { trpc } from 'api/transformer';
import { useTheme } from '@react-navigation/native';

export const HomeScreen = () => {
	const { colors } = useTheme();
	const hello = trpc.useQuery(['example.hello', { text: 'client' }]);

	return (
		<View style={styles.container}>
			{hello.data ? (
				<>
					<Text style={{ paddingBottom: 10 }}>{hello.data.greeting}</Text>
					<Button
						color={colors.primary}
						title="Press me"
						onPress={() => Alert.alert('Simple Button pressed')}
					/>
				</>
			) : (
				<Text>Loading...</Text>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 15,
		paddingVertical: 10
	}
});
