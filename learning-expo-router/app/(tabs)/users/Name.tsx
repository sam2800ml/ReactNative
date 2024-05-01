import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Name = () => {
  return (
    <View>
      <Text>Name</Text>
      <Link href="/users/Test">Ve a test</Link>
    </View>
  )
}

export default Name