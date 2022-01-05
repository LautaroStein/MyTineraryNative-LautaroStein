import React, {useRef, useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Dimensions, ImageBackground } from 'react-native';
import Carousel from 'react-native-anchor-carousel';

const {width: windowWidth} = Dimensions.get('window');

const data = [
  {
    uri: require('../assets/carusel/Kyoto.jpg'),
    title: 'Kyoto',
  },
  {
    uri: require('../assets/carusel/Sydney.jpg'),
    title: 'Brisbane ',
  },
  {
    uri: require("../assets/carusel/Edinburgh.jpg"),
    title: 'Edinburgh',
  },
  {
    uri: require('../assets/carusel/Florence.jpg'),
    title: 'Florence',
  },
  {
    uri: require('../assets/carusel/London.jpg'),
    title: 'London',
  },
  {
    uri: require('../assets/carusel/Paris.jpg'),
    title: 'Paris',
  },
  {
    uri: require('../assets/carusel/Prague.jpg'),
    title: 'Prague',
  },
  {
    uri: require('../assets/carusel/RioDeJaneiro.jpg'),
    title: 'Rio De Janeiro',
  },
  {
    uri: require('../assets/carusel/SanSebastián.jpg'),
    title: 'San Sebastián',
  },
  {
    uri: require('../assets/carusel/Seville.jpg'),
    title: 'Seville',
  },
  {
    uri: require('../assets/carusel/Brisbane.jpg'),
    title: 'Brisbane',
  },
  {
    uri: require('../assets/carusel/Venice.jpg'),
    title: 'Venice',
  }
];

const INITIAL_INDEX = 0;
export default function ImageCarousel(props) {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(INITIAL_INDEX);

  function handleCarouselScrollEnd(item, index) {
    setCurrentIndex(index);
  }

  function renderItem({item, index}) {
    const {uri, title, content} = item;
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.item}
        onPress={() => {
          carouselRef.current.scrollToIndex(index);
        }}>
            {console.log(uri)}
        <ImageBackground source={uri} style={styles.imageBackground}>
          <View style={styles.rightTextContainer}>
            <Text style={styles.rightText}>{title}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <Carousel
        style={styles.carousel}
        data={data}
        renderItem={renderItem}
        itemWidth={0.7 * windowWidth}
        inActiveOpacity={0.3}
        containerWidth={windowWidth}
        onScrollEnd={handleCarouselScrollEnd}
        ref={carouselRef}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { paddingVertical: 20 },
  carousel: {
    aspectRatio: 1.5,
    flexGrow: 0,
    marginBottom: 20,
    height: "400px"
  },
  item: {
    borderWidth: 2,
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    borderColor: 'white',
    elevation: 3,
  },
  imageBackground: {
    flex: 2,
    backgroundColor: '#EBEBEB',
    borderWidth: 5,
    borderColor: 'white',
  },
  rightTextContainer: {
    marginLeft: 'auto',
    marginRight: -2,
    backgroundColor: 'rgba(49, 49, 51,0.5)',
    padding: 3,
    marginTop: 3,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  rightText: {color: 'white'},
  lowerContainer: {
    flex: 1,
    margin: 10,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  contentText: {
    marginTop: 10,
    fontSize: 12,
  },
});