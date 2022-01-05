import { StyleSheet, Text, View, ImageBackground, Image, Button, ScrollView } from 'react-native';
import tw from "tailwind-react-native-classnames";

const Cities = () => {
    return (
        <ScrollView style={styles.main}>
            <ImageBackground source={require('../assets/Fondo-Cities.png')} resizeMode='cover' style={tw`w-screen h-96`}>
            <Text>hola</Text>
            <Text>hola</Text>
            <Text>hola</Text>

            </ImageBackground>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    main: {
        fontFamily : 'IBM Plex Sans',
        flex: 1,
        height: "100%",
        width: "100%",
    }
});
export default Cities
