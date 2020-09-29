import React from 'react'
import { ActivityIndicator, View, StyleSheet } from 'react-native'

//* Components
import Screen from '../components/screen'

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size='large' color='#4C7EEC' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default Screen(Loading, '#fff', 'dark-content')
