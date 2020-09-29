import React from 'react'
import { StyleSheet } from 'react-native'
import { FontAwesome5 as Icon } from '@expo/vector-icons'

const Logo = props => {
  return <Icon name='tooth' styles={styles.container} size={80} color={props.color || '#fff'} {...props} />
}

const styles = StyleSheet.create({
  container: {
    shadowRadius: 10,
    shadowColor: '#fff',
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
})

export default Logo
