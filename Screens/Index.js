import { StyleSheet, Text, View, ImageBackground, Image, Button, ScrollView, Dimensions } from 'react-native';
import tw from "tailwind-react-native-classnames";
import Carousels from '../components/Carousels';


const widthScreen = Dimensions.get("window").width;


const index = () => {
    return (
        <ScrollView style={styles.main}>
            <ImageBackground source={require('../assets/playaBackground.jpg')} style={styles.background} resizeMode='cover'>
                <View style={tw`h-3/6 w-4/5 justify-center items-center`}>
                    <Text style={styles.titulo} >My<Text>Tinerary</Text></Text>
                    <Text style={tw`text-white text-lg text-justify`}>"Find your perfect trip, designed by insiders who know and love their cities!"</Text>
                </View>
                <View style={styles.hero}>
                    <Text style={tw`font-bold underline`}>Find your ideal city on MyTinerary</Text>
                    <Image style={styles.images} source={require('../assets/Roma.jpg')}></Image>
                    <View>
                        <Text style={tw`font-bold mb-2`}>Let your adventure begin!</Text>
                        <Button
                        title="SEARCH CITY"
                        color="#2dd4bf"
                        />
                    </View>
                </View>
            </ImageBackground>
            <View >
                <Carousels />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    body: {
        width: widthScreen,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    main: {
        flex: 1
    },
    background : {
        width:'100%',
        height:800,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    images : {
        width:'90%',
        height:150,
    },
    hero : {
        width : '100%',
        height : '40%',
        alignItems : 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#FFFFFF'
    },
    titulo : {
        color : 'white',
        fontSize : 65,
    },
});

export default index
