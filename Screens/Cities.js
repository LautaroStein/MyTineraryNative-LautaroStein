import { StyleSheet, Text, View, ImageBackground, Image, Button, ScrollView, Dimensions } from 'react-native';
import { connect } from "react-redux";
import citiesActions from '../redux/actions/citiesActions';
import Search from '../components/Search';
import react, {useEffect} from "react"

const widthScreen = Dimensions.get("window").width;

const Cities = (props) => {
    useEffect(() => {
        props.fetchCities()
    }, [])

    return (
        <ScrollView style={styles.main}>
            <Search filter={props.filtrando} aux={props.aux} />
            <View style={styles.contenedor}>
                {
                    props.cities.map(city => {
                        return(
                            <View key={city.pais}>
                                <Image style={styles.image} source={{uri : city.img}}></Image>
                                    <Text>{city.name}</Text>
                            </View>
                        )
                    })
                }
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        height : 800,
        width: "100%",
    },
    contenedor : {
        width : widthScreen,
        alignItems : "center",
    },
    image : {
        height : 400,
        width : widthScreen -60,
        marginTop : 10,
    }
});

const mapDispatchToProps = {
    fetchCities: citiesActions.fetchCities,
    filtrando : citiesActions.filtroCity,
}

const mapStateToProps = (state) =>{
    return { 
        cities: state.citiesReducer.cities,
        aux: state.citiesReducer.aux
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cities)
