import React from 'react'
import { Text, View, StyleSheet, ImageBackground } from 'react-native'
import moment from 'moment'
import 'moment/locale/pt-br'
import todayImage from '../../assets/imgs/today.jpg'
import CommonStyles from '../CommonStyles'

export default class Agenda extends React.Component {
	render () {
		return (
			<View style={styles.container}>
				<ImageBackground source={todayImage} style={styles.background}>
					<View style={styles.titleBar}>
						<Text style={styles.title}>Hoje</Text>
						<Text style={styles.subtitle}>
							{moment().locale('pt-br').format('ddd, D [de] MMMM')}
						</Text>
					</View>
				</ImageBackground>

				<View style={styles.tasksContainer}>
					<Text>Tarefa 1</Text>
					<Text>Tarefa 2</Text>
					<Text>Tarefa 3</Text>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	background: {
		flex: 3
	},
	titleBar: {
		flex: 1,
		justifyContent: 'flex-end'
	},
	title: {
		fontFamily: CommonStyles.fontFamily,
		color: CommonStyles.colors.secondary,
		fontSize: 50,
		marginLeft: 20,
		marginBottom: 10
	},
	subtitle: {
		fontFamily: CommonStyles.fontFamily,
		color: CommonStyles.colors.secondary,
		fontSize: 20,
		marginLeft: 20,
		marginBottom: 30
	},
	tasksContainer: {
		flex: 7
	}
})