import {
	FlatList,
	Image,
	StyleSheet,
	Text,
	View,
	Dimensions,
	LogBox,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";

const CarouselPage = () => {
	const flatlistRef = useRef();
	const screenWidth = Dimensions.get("window").width;
	const [activeIndex, setActiveIndex] = useState(0);

	const carouselData = [
		{
			id: "01",
			image: require("../assets/images/tennis.jpg"),
		},
		{
			id: "02",
			image: require("../assets/images/bascket.jpg"),
		},
		{
			id: "03",
			image: require("../assets/images/yoga.jpg"),
		},
	];

	// Fonction de défilement automatique
	useEffect(() => {
		let interval = setInterval(() => {
			// Arrondir l'index actif au nombre entier le plus proche
			const nextIndex = Math.round(activeIndex) + 1;
			if (nextIndex >= carouselData.length) {
				flatlistRef.current.scrollToIndex({
					index: 0,
					animated: true, // Correction ici: Utiliser "animated" au lieu de "animation"
				});
				setActiveIndex(0); // Réinitialiser l'index actif à 0
			} else {
				flatlistRef.current.scrollToIndex({
					index: nextIndex,
					animated: true,
				});
				setActiveIndex(nextIndex); // Mettre à jour l'index actif
			}
		}, 2000);

		return () => clearInterval(interval);
	}, [activeIndex, carouselData.length]);

	const getItemLayout = (data, index) => ({
		length: screenWidth,
		offset: screenWidth * index,
		index: index,
	});

	const renderItem = ({ item }) => (
		<View>
			<Image
				source={item.image}
				style={{ height: 200, width: screenWidth }}
			/>
		</View>
	);

	const handleScroll = (event) => {
		const scrollPosition = event.nativeEvent.contentOffset.x;
		const index = scrollPosition / screenWidth;

		setActiveIndex(Math.round(index));
	};

	const renderDotIndicators = () => {
		return carouselData.map((dot, index) => (
			<View
				key={dot.id}
				style={{
					backgroundColor: activeIndex === index ? "green" : "red",
					height: 10,
					width: 10,
					borderRadius: 5,
					marginHorizontal: 6,
				}}
			/>
		));
	};

	return (
		<View>
			<FlatList
				data={carouselData}
				ref={flatlistRef}
				getItemLayout={getItemLayout}
				renderItem={renderItem}
				keyExtractor={(item) => item.id}
				horizontal={true}
				pagingEnabled={true}
				onScroll={handleScroll}
			/>

			<View
				style={{
					flexDirection: "row",
					justifyContent: "center",
					marginTop: 10,
				}}
			>
				{renderDotIndicators()}
			</View>
		</View>
	);
};

export default CarouselPage;

const styles = StyleSheet.create({});
