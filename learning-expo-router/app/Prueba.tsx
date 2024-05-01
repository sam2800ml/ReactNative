import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

const Prueba = () => {
  return (
    <View>
      <Text>Prueba</Text>
      <Pressable onPress={() => 
            router.push
            ({
                pathname:"(tabs)",
               
            })}>
        <Text>
          Navega a el screen
        </Text>
      </Pressable>
    </View>
  )
}

export default Prueba