import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { trpc } from 'api/transformer';

export const HomeScreen = () => {
	const hello = trpc.useQuery(['example.hello', { text: 'client' }]);

	if (!hello.data) {
		return <Text>Loading...</Text>;
	}

	return (
		<View style={styles.container}>
			<Text>{hello.data.greeting}</Text>
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
