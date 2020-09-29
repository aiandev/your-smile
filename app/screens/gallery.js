import React from 'react'
import { View, StyleSheet, ImageBackground, Dimensions } from 'react-native'

//* Components
import Navbar from '../components/navbar'
import Screen from '../components/screen'

const { width, height } = Dimensions.get('window')

//* Test Images
const img1 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS5jDVcdzGPTTgKKZXszril5XvqmsGK0Hb-kA&usqp=CAU'
const img2 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTWakCbbyVdAsKcB0OKKj8-yqWw0D6nCJqo2g&usqp=CAU'
const img3 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTYi3nxAn6ugH-dwoBW-ej-44fiumgf9AuLIg&usqp=CAU'

const Picture = ({ flex = 1, source }) => (
  <View style={{ padding: 5, flex }}>
    <View style={styles.image}>
      <ImageBackground style={{ flex: 1 }} source={source} />
    </View>
  </View>
)

const Gallery = () => {
  return (
    <>
      <Navbar title='Gallery' color='#8395a7' withBackButton />
      <View style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={{ flexDirection: 'row', flex: 1 }}>
            <Picture source={{ uri: img1 }} />
            <Picture source={{ uri: img2 }} />
          </View>
          <Picture source={{ uri: img3 }} />
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    width,
    height: width,
    padding: 5,
  },
  image: {
    padding: 10,
    borderWidth: 2,
    borderColor: 'rgba(0, 0, 0, 0.05)',
    flex: 1,
  },
})

export default Screen(Gallery)
