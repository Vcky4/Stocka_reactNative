import React from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native'
import colors from "../../../assets/colors/colors";
import CheckedIcon from '../../../assets/icons/checked.svg'


const points = [
    "Forecast Profit",
    "Scan goods at the point of purchase ",
    "Stay up to date with daily charts",
    "Connect with other business owners"
]

export default OnboardingIntro = () => {
    const bullets = []
    points.map((text) => {
        bullets.push(
            <View style={styles.bulletWrapper}>
                <CheckedIcon />
                <Text style={styles.bulletText}>{text}</Text>
            </View>
        )
    })

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Image
                    source={require("../../../assets/images/logo.png")}
                    style={styles.logo}
                />
                <Text style={styles.subText}>
                    The best way to manage your daily sales, income and purchases
                </Text>
                <View style={styles.bulletContainer}>
                    {bullets}
                </View>
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        paddingHorizontal: '8%'
    },
    content: {
        flex: 1,
        justifyContent: 'center',
    },
    logo: {
        height: 64,
        width: 64,
        alignSelf: 'center'
    },
    subText: {
        color: colors.black,
        fontSize: 20,
        fontWeight: 'bold',
        width: '95%',
        marginTop: '12%'
    },
    bulletContainer: {
        marginTop: '12%'
    },
    bulletWrapper: {
        flexDirection: 'row',
        marginTop: 20
    },
    bulletText: {
        color: colors.black,
        fontSize: 16,
        fontWeight: '500',
        width: '95%',
        marginLeft: 10
    },
    button:{
        width: 147,
        height: 45,
        marginBottom: '15%',
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        alignSelf: 'center'
    },
    buttonText: {
        color: colors.black,
        fontSize: 12,
        fontWeight: '500',
    }
})