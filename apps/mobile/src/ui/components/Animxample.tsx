import Animated, {
	Easing,
	useAnimatedStyle,
	useSharedValue,
	withTiming
} from 'react-native-reanimated';
import { Button } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Animxample() {
	const randomWidth = useSharedValue(10);

	const config = {
		duration: 500,
		easing: Easing.bezier(0.5, 0.01, 0, 1)
	};

	const style = useAnimatedStyle(() => {
		return {
			width: withTiming(randomWidth.value, config)
		};
	});

	return (
		<SafeAreaView
			style={{
				flex: 1,
				alignItems: 'center',
				justifyContent: 'center',
				flexDirection: 'column'
			}}
		>
			<Animated.View
				style={[{ width: 100, height: 80, backgroundColor: 'black', margin: 30 }, style]}
			/>
			<Button
				title="toggle"
				onPress={() => {
					randomWidth.value = Math.random() * 350;
				}}
			/>
		</SafeAreaView>
	);
}
