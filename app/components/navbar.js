import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const Navbar = ({ background = '#fff', color = '#000', clickable = false, withBackButton = false, title, iconName, onPress }) => {
  const navigation = useNavigation()
  return (
    <View style={[styles.container, { backgroundColor: background }]}>
      {withBackButton ? (
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.titleContainer}>
          <Icon name='arrow-left' size={25} color={color} style={{ marginRight: 5 }} />
          <Text style={[styles.title, { color }]}>{title}</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.titleContainer}>
          <Text style={[styles.title, { color }]}>{title}</Text>
        </View>
      )}
      {clickable && (
        <TouchableOpacity onPress={onPress} style={styles.iconContainer}>
          <Icon name={iconName} color={color} size={25} />
        </TouchableOpacity>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    padding: 10,
    flexDirection: 'row',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
})

export default Navbar
