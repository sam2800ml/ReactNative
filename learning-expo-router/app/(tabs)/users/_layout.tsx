import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const Userslayout = () => {
  return (
    <Stack>
        <Stack.Screen name='Name'/>
        <Stack.Screen name='Test'/>
        

    </Stack>
  )
}

export default Userslayout