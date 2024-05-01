import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const Trymelayout = () => {
  return (
    <Stack>
        <Stack.Screen name='Try1me'/>
        <Stack.Screen name='Try2me'/>
        

    </Stack>
  )
}

export default Trymelayout