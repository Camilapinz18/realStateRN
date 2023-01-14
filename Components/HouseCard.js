import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
} from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import store from '../Redux/store';

export default function HouseCard({
	id,
	name,
	address,
	bedrooms,
	bathrooms,
	size,
	cost,
	rating,
	image,
}) {

	const data = useSelector(state => state.data);
	const values = Object.values(data);
	const isLiked = values.find(house => house.name === name);
	const imageThumbnail = image;

	return (
		<View style={styles.cardContainer}>
			<View style={styles.imageContainer}>
				<View style={styles.ratingContainer}>
					<Image style={styles.image} source={{uri: image}} />
					<View style={styles.rating}>
						<FontAwesome
							style={styles.icon}
							name='star' 
							size={9}
							color='#EFBB15'
						/>
						<Text style={styles.ratingText}>{rating}</Text>
					</View>
				</View>

				<View style={styles.infoContainer}>
					<Text style={styles.nameText}>{name}</Text>

					<View style={styles.addressContainer}>
						<Ionicons
							style={styles.icon}
							name='location' 
							size={18}
							color='#8F939E'
						/>
						<Text style={styles.addressText}>{address}</Text>
					</View>
					<View style={styles.spacesContainer}>
						<FontAwesome
							style={styles.icon}
							name='bed' 
							size={20}
							color='#8F939E'
						/>
						<Text style={styles.spacesText}>{bedrooms}</Text>
						<FontAwesome
							style={styles.icon}
							name='bath' 
							size={20}
							color='#8F939E'
						/>
						<Text style={styles.spacesText}>{bathrooms}</Text>
						<FontAwesome
							style={styles.icon}
							name='codepen' 
							size={20}
							color='#8F939E'
						/>
						<Text style={styles.spacesText}>{size} ft</Text>
					</View>
					<View style={styles.costContainer}>
						<Text style={styles.costText}>$ {cost}</Text>
						<TouchableOpacity
							activeOpacity={0.5}
							onPress={
								isLiked.liked
									? () =>
										store.dispatch({
											type: 'QUIT_LIKED_HOUSE',
											payload: {name},
										})
									: () =>
										store.dispatch({
											type: 'ADD_LIKED_HOUSE',
											payload: {name},
										})
							}
						>
							{isLiked.liked ? (
								<FontAwesome
									style={{
										backgroundColor: '#D32445',
										padding: 6.2,
										width: 24,
										height: 24,
										borderRadius: 100,
										marginTop: 5,
									}}
									name='heart' 
									size={12}
									color='white'
								/>
							) : (
								<FontAwesome
									style={{
										backgroundColor: '#00B074',
										padding: 6.2,
										width: 24,
										height: 24,
										borderRadius: 100,
										marginTop: 5,
									}}
									name='heart' 
									size={12}
									color='white'
								/>
							)}
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	cardContainer: {
		display: 'flex',
		flexDirection: 'row',
		backgroundColor: 'white',
		width: 330,
		height: 130,
		borderRadius: 15,
		marginTop: 5,
	},
	imageContainer: {
		// BackgroundColor: 'red',
		display: 'flex',
		flexDirection: 'row',
		flexGrow: 1,
		alignItems: 'center',
	},
	ratingContainer: {
		display: 'flex',
		flexDirection: 'column',
		// BackgroundColor: 'red',
		alignItems: 'center',
	},
	rating: {
		backgroundColor: '#FBEEB7',
		width: 40,
		height: 20,
		borderRadius: 9,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		position: 'absolute',
		marginTop: 85,
	},
	ratingText: {
		color: '#7A6229',
		fontWeight: 'bold',
		textAlign: 'center',
		fontSize: 10,
	},
	image: {
		width: 95,
		height: 95,
		borderRadius: 8,

		margin: 15,
	},
	infoContainer: {
		// BackgroundColor: 'red',
		display: 'flex',
		flexDirection: 'column',
		height: 100,
		width: 160,
	},
	nameText: {
		color: '#121222',
		fontSize: 18,
		// BackgroundColor: 'red',
		height: 24,
		width: 200,
		marginBottom: 3,
	},

	addressContainer: {
		// BackgroundColor: 'green',
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
	},
	icon: {
		// BackgroundColor: 'yellow',
	},
	addressText: {
		color: '#7C7D7D',
		fontSize: 12,
		marginLeft: 5,
	},
	spacesContainer: {
		display: 'flex',
		flexDirection: 'row',
		marginTop: 5,
		// BackgroundColor: 'yellow',
		justifyContent: 'space-between',
	},
	spacesText: {
		fontWeight: 'bold',
	},
	costContainer: {
		// BackgroundColor: 'green',
		height: 40,
		width: 195,
		// JustifyContent:'center',
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
	},
	iconHeart: {
		backgroundColor: '#00B074',
		padding: 6.2,
		width: 24,
		height: 24,
		borderRadius: 100,
		marginTop: 5,
	},
	iconHeartPressed: {
		backgroundColor: '#792F9E',
		padding: 6.2,
		width: 24,
		height: 24,
		borderRadius: 100,
		marginTop: 5,
	},
	costText: {
		fontSize: 15,
		fontWeight: 'bold',
		// BackgroundColor: 'yellow',
		flexGrow: 2.3,
		marginBottom: 5,
	},
});
