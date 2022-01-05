import { StyleSheet, Text, View, ImageBackground, Image, Button, ScrollView } from 'react-native';
import tw from "tailwind-react-native-classnames";
import Carousel from "../components/Carousel"

const index = () => {
    return (
        <ScrollView style={styles.main}>
            <ImageBackground source={require('../assets/playaBackground.jpg')} style={styles.background} resizeMode='cover'>
                <View style={tw`h-3/6 w-4/5 justify-center items-center`}>
                    <Text style={styles.titulo} >My<Text style={styles.bordeado}>Tinerary</Text></Text>
                    <Text style={tw`text-white text-lg text-justify`}>"Find your perfect trip, designed by insiders who know and love their cities!"</Text>
                </View>
                <View style={styles.hero}>
                    <Text style={tw`font-bold underline underline-offset-4`}>Find your ideal city on MyTinerary</Text>
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
            <Carousel />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    body: {
        width:'100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    main: {
        fontFamily : 'IBM Plex Sans',
        flex: 1
    },
    background : {
        width:'100%',
        height:'100vh',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    images : {
        width:'90%',
        height:'150px'
    },
    hero : {
        width : '100%',
        height : '40%',
        alignItems : 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#FFFFFF'
    },
    text : {
        fontFamily : 'IBM Plex Sans',
    },
    titulo : {
        color : 'white',
        fontSize : '65px',
        fontFamily : 'IBM Plex Sans',
    },
    bordeado : {
        '-webkit-text-stroke' : '0.5px rgb(255, 255, 255)',
        color : 'transparent' 
    }
});

export default index
