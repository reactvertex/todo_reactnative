import React from 'react';
import { View } from 'react-native';
import { SafeAreaView, StyleSheet, Text, Image, ListView } from 'react-native';

const Card = (props) => {

    return (
        <SafeAreaView >
            <View
                style={styles.cardView}
            >
                <Text style={styles.taskText}>{props.taskDetail.task}</Text>
                <Text style={styles.taskDescriptionText}>{props.taskDetail.taskDescription}</Text>
                <Text style={styles.date}>Date : {props.taskDetail.date}</Text>
                <View style={styles.iconsList}>
                    <Image style={{ width: 20, height: 20 }} onPress={props.handleDeleteTask(props.taskDetail)} source={require('../assests/delete.png')}></Image>
                    <Image style={{ width: 20, height: 20 }} onPress={props.handleUpdateTask(props.taskDetail)} source={require('../assests/edit.png')}></Image>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    cardView: {
        backgroundColor: '#94b8b8',
        width: 350,
        height: 150,
        borderRadius: 4,
        marginTop: 10,
        marginBottom: 10,
        marginRight: 20,
        marginLeft: 20,
        padding: 8,
        shadowColor: 'rgba(149, 157, 165, 0.2)',
        shadowOffset: 1,
        shadowRadius: 4
    },
    taskText: {
        fontSize: 18,
        color: '#000',
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: 4
    },
    taskDescriptionText: {
        fontSize: 16,
        fontWeight: 500,
        color: '#141f1f'
    },
    date: {
        fontSize: 16,
        paddingTop: 6
    },
    iconsList: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        marginTop: 10,
    },
    editIcon: {
        height: 30,
        width: 30,
    },
    deletIcon: {
    }

});
export default Card;