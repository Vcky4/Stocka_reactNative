import React from "react";
import { View, Image, StyleSheet } from 'react-native'

export default Splash = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require("../../../assets/images/splash.png")}
                style={styles.splash}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    splash: {
        height: '100%',
        width: '100%',
    }
})