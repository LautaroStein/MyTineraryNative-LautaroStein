import Carousel from "react-native-snap-carousel";
import { View, Image, Text, StyleSheet, Dimensions } from "react-native"

const widthScreen = Dimensions.get("window").width;

const data = [
        {
          uri: 'https://mytinerary-stein.netlify.app/assets/carusel/Kyoto.jpg',
          title: 'Kyoto',
        },
        {
          uri: 'https://mytinerary-stein.netlify.app/assets/carusel/Sydney.jpg',
          title: 'Brisbane ',
        },
        {
          uri: "https://mytinerary-stein.netlify.app/assets/carusel/Edinburgh.jpg",
          title: 'Edinburgh',
        },
        {
          uri: 'https://mytinerary-stein.netlify.app/assets/carusel/Florence.jpg',
          title: 'Florence',
        },
        {
          uri: 'https://mytinerary-stein.netlify.app/assets/carusel/London.jpg',
          title: 'London',
        },
        {
          uri: 'https://mytinerary-stein.netlify.app/assets/carusel/Paris.jpg',
          title: 'Paris',
        },
        {
          uri: 'https://mytinerary-stein.netlify.app/assets/carusel/Prague.jpg',
          title: 'Prague',
        },
        {
          uri: 'https://mytinerary-stein.netlify.app/assets/carusel/RioDeJaneiro.jpg',
          title: 'Rio De Janeiro',
        },
        {
          uri: 'https://mytinerary-stein.netlify.app/assets/carusel/SanSebasti%C3%A1n.jpg',
          title: 'San Sebastián',
        },
        {
          uri: 'https://mytinerary-stein.netlify.app/assets/carusel/Seville.jpg',
          title: 'Seville',
        },
        {
          uri: 'https://mytinerary-stein.netlify.app/assets/carusel/Brisbane.jpg',
          title: 'Brisbane',
        },
        {
          uri: 'https://mytinerary-stein.netlify.app/assets/carusel/Venice.jpg',
          title: 'Venice',
        }
    ];

const Carousels = () => {
    let renderItems = ({ item, index }) => {
        return (
          <>
            <View key={index} style={styles.container}>
              <Image
                style={styles.carouselItem}
                source={{ uri: item.uri }}
              />
              <Text style={styles.carouselText}>{item.title}</Text>
            </View>
        </>
        );
    };
    
    return (
        <Carousel
          data={data}
          renderItem={renderItems}
          layoutCardOffset={10}
          sliderWidth={500}
          itemWidth={600}
          layout={"tinder"}
          loop={true}
        />
    )
}

const styles = StyleSheet.create({
    container: {
      fontSize: 20,
    },
    carouselItem: {
      height: 200,
    },
    test: {
      fontSize: 20,
      color: "white",
      backgroundColor: "black",
    },
    carouselText: {
      textAlign: "center",
      fontSize: 30,
      fontWeight: "bold",
      color: "#fff",
    },
    container: {
      width: widthScreen,
      backgroundColor: "#2dd4bf",
      padding: 10,
    },
  });

export default Carousels
