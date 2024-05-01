import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Tryme = () => {
  return (
    <View>
      <Text>Tryme</Text>
      <Link href="/Tryme/Try2me">Name</Link>
    </View>
  )
}

export default Tryme