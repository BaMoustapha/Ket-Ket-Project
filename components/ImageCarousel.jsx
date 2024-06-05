// Image.js
import React, { useState, useEffect, useRef } from 'react';
import {
	View,
	Text,
	Image,
	StyleSheet,
	ScrollView,
	Dimensions,
	TouchableOpacity,
	Animated,
	Modal,
} from 'react-native';
const { width } = Dimensions.get('window');
const height = (width * 14) / 20;
const gfgImages = [
'https://media.geeksforgeeks.org/img-practice/banner/dsa-to-development-coding-guide-thumbnail.png?v=19678',
'https://media.geeksforgeeks.org/img-practice/banner/full-stack-node-thumbnail.png?v=19678',
'https://media.geeksforgeeks.org/img-practice/banner/gate-data-science-and-artificial-intelligence-da-2024-thumbnail.png?v=19678',
'https://media.geeksforgeeks.org/img-practice/banner/data-science-live-thumbnail.png?v=19678',
];
const gfgCourses = [
	{
		title: 'DSA to Development Coding Guide',
		description: 'Learn the essentials of Data Structures and Algorithms for development.',
	},
	{
		title: 'Full Stack Node.js',
		description: 'Master the art of Full Stack Development with Node.js.',
	},
	{
		title: 'GATE Data Science and AI',
		description: 'Prepare for GATE with a focus on Data Science and Artificial Intelligence.',
	},
	{
		title: 'Data Science Live',
		description: 'Explore the world of Data Science through live projects and examples.',
	},
];
const ImageCarousel = () => {
	const [activeInd, setActiveInd] = useState(0);
	const [modalShow, setModalShow] = useState(false);
	const [autoScrollEnabled, setAutoScrollEnabled] = useState(true);
	const scrollX = new Animated.Value(0);
	const scrollViewRef = useRef();
	const imageClickFunction = (ind) => {
		setActiveInd(ind);
		setModalShow(true);
	};
	useEffect(() => {
		let inter;
		if (autoScrollEnabled) {
			inter = setInterval(() => {
				const newInd = (activeInd + 1) % gfgImages.length;
				setActiveInd(newInd);
				scrollViewRef.current.scrollTo({ x: newInd * width, animated: true });
			}, 4000);
		}
		return () => clearInterval(inter);
	}, [activeInd, autoScrollEnabled]);

	return (
		<View style={styles.container}>
			<ScrollView ref={scrollViewRef}
						horizontal
						pagingEnabled
						showsHorizontalScrollIndicator={false}
						onMomentumScrollEnd={(event) => {
							const newIndex = Math.floor
							(event.nativeEvent.contentOffset.x / width);
							setActiveInd(newIndex);
				}}
				onScroll={Animated.event(
					[{ nativeEvent: { contentOffset: { x: scrollX } } }],
					{ useNativeDriver: false }
				)}>
				{gfgImages.map((image, index) => (
					<TouchableOpacity key={index} 
										activeOpacity={0.9} 
										style={styles.imageContainer} 
										onPress={() => imageClickFunction(index)}>
						<Image source={{ uri: image }} style={styles.image} />
					</TouchableOpacity>
				))}
			</ScrollView>
			<View style={styles.pagination}>
				{gfgImages.map((_, index) => (
					<Animated.View key={index}
								style={[styles.paginationDot,{
									opacity: scrollX.interpolate({
									inputRange: [
										(index - 1) * width,
										index * width,
										(index + 1) * width,
									],
									outputRange: [0.5, 1, 0.5],
									extrapolate: 'clamp',
								})}]}/>
				))}
			</View>
			<Modal animationType="slide"
				transparent={true}
				visible={modalShow}
				onRequestClose={() => setModalShow(false)}>
				<View style={styles.modalContainer}>
					<View style={styles.modalContent}>
						<Text style={styles.modalTitle}>
							{gfgCourses[activeInd].title}
						</Text>
						<Text style={styles.modalDescription}>
							{gfgCourses[activeInd].description}
						</Text>
						<TouchableOpacity style={styles.closeButton}
										onPress={() => setModalShow(false)}>
							<Text style={styles.closeButtonText}>Close</Text>
						</TouchableOpacity>
					</View>
				</View>
			</Modal>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		width,
		height,
		backgroundColor: '#272',
		borderRadius: 10,
		overflow: 'hidden',
	},
	imageContainer: {
		width,
		height,
		borderRadius: 10,
		overflow: 'hidden',
	},
	image: {
		width,
		height,
		resizeMode: 'cover',
		borderRadius: 10,
		borderWidth: 4,
		borderColor: '#ff0000',
	},
	pagination: {
		flexDirection: 'row',
		position: 'absolute',
		bottom: 20,
		alignSelf: 'center',
	},
	paginationDot: {
		width: 10,
		height: 10,
		borderRadius: 5,
		backgroundColor: '#6b52ae',
		margin: 8,
	},
	modalContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
	},
	modalContent: {
		backgroundColor: '#fff',
		borderRadius: 10,
		padding: 20,
		width: width - 40,
		alignItems: 'center',
	},
	modalTitle: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 10,
		color: '#6b52ae',
	},
	modalDescription: {
		fontSize: 18,
		textAlign: 'center',
		marginBottom: 20,
		color: '#555',
	},
	closeButton: {
		backgroundColor: '#4a3',
		padding: 12,
		borderRadius: 8,
		alignSelf: 'stretch',
		alignItems: 'center',
		marginTop: 10,
	},
	closeButtonText: {
		color: '#fff',
		fontWeight: 'bold',
		fontSize: 16,
	},
});
export default ImageCarousel;
