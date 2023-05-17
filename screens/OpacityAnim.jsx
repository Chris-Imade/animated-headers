import { StyleSheet, Text, TouchableOpacity, View, Animated } from 'react-native'
import React, { useState } from 'react'

const OpacityAnim = () => {
    const value = useState(new Animated.Value(0))[0];

    const handleFadeIn = () => {
        Animated.timing(value, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true
        }).start();
    }
    const handleFadeOut = () => {
        Animated.timing(value, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true
        }).start();
    }
  return (
    <View style={styles.container}>
        <Animated.View style={[styles.circle, { opacity: value }]} />
      <TouchableOpacity onPress={handleFadeIn}>
        <Text style={styles.text}>Fade In</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleFadeOut}>
        <Text style={styles.text}>Fade Out</Text>
      </TouchableOpacity>
    </View>
  )
}

export default OpacityAnim;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: 24,
        marginTop: 20,
        backgroundColor: "blue",
        color: "white",
        padding: 10,
        borderRadius: 5
    },
    circle: {
        width: 100,
        height: 100,
        backgroundColor: "red",
        borderRadius: 100 / 2
    }
})