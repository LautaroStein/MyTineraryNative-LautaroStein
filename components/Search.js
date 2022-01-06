import { StyleSheet, Text, View, ImageBackground, Image, Button, ScrollView, Dimensions } from 'react-native';
import tw from "tailwind-react-native-classnames";
import React, { useState } from 'react';
import { TextInput } from 'react-native-element-textinput';

const widthScreen = Dimensions.get("window").width;

const Search = (props) => {
    const [value, setValue] = useState('');
    console.log(value)
    return (
        <View style={styles.contenedor}>
            <Image source={require("../assets/Fondo-Cities.png")} style={styles.imagenabsolute}></Image>
            <Text style={styles.titulo}>Enjoy your dream vacation</Text>
            <Text style={tw`text-white text-lg w-5/6 font-bold text-justify h-1/3`}>"The world is a book and those who do not travel read only one page." ~ Saint Augustine</Text>
            <View style={styles.content}>
                <Text>Search <Text>Cities</Text></Text>
                <Text>15 results</Text>
                <View style={styles.container}>
                    <TextInput
                    value={value}
                    style={styles.input}
                    inputStyle={styles.inputStyle}
                    labelStyle={styles.labelStyle}
                    placeholderStyle={styles.placeholderStyle}
                    textErrorStyle={styles.textErrorStyle}
                    label="City"
                    placeholder="Search city"
                    placeholderTextColor="gray"
                    focusColor="blue"
                    onChangeText={text => {
                        setValue(text);
                        props.filter(text.trim().toLowerCase() , props.aux)
                    }}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    contenedor : {
        width : "100%",
        height : 500,
        alignItems : "center",
    },
    imagenabsolute : {
        position : "absolute",
        width : "100%",
        height : 400,
        zIndex : -1,
    },
    titulo : {
        fontSize : 40,
        color : "white",
        textAlign : "left",
        justifyContent : "center",
        marginTop : 10,
        width : widthScreen - 60 ,
        height : 125,
    },
    content : {
        flex : 1,
        backgroundColor : "white",
        width : widthScreen - 60 ,
        borderRadius : 20,
    },
    container: {
        padding: 16,
    },
    input: {
        height: 55,
        paddingHorizontal: 12,
        borderRadius: 8,
        borderWidth: 0.5,
        borderColor: '#DDDDDD',
    },
    inputStyle: { fontSize: 16 },
    labelStyle: {
        fontSize: 14,
        position: 'absolute',
        top: -10,
        backgroundColor: 'white',
        paddingHorizontal: 4,
        marginLeft: -4,
    },
    placeholderStyle: { fontSize: 16 },
    textErrorStyle: { fontSize: 16 },

});

export default Search
