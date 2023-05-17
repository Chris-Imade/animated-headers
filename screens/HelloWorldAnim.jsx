import { StyleSheet, Text, View, Animated, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const HelloWorldAnim = () => {
  const value = useState(new Animated.ValueXY({ x: 0, y: 0 }))[0];


  const handlePress = () => {
    Animated.timing(value, {
      toValue: { x: 100, y: 100 },
      duration: 100,
      useNativeDriver: false
    }).start();
  }

  return (
    <View style={styles.container}>
      <Animated.View style={value.getLayout()}>
        <View style={{
          width: 100,
          height: 100,
          backgroundColor: "red",
          borderRadius: 100 / 2
      }}></View>
      </Animated.View>

      <TouchableOpacity onPress={handlePress}>
        <Text style={{
          fontSize: 24,
          marginTop: 20,
          backgroundColor: "blue",
          color: "white",
          padding: 10,
          borderRadius: 5
        }}>Click Me</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HelloWorldAnim

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})