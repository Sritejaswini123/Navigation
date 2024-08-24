import { View, Text,StyleSheet, Button } from "react-native";
const AboutScreen = ({route ,navigation}) => {
const {name} = route.params
return(
    <View style = {styles.container}>
        <Text style={styles.text}>
           AboutScreen
        </Text>
        <Button 
        title = "UPDATE THE NAME "
        onPress = {() => 
            navigation.setParams({
                name: 'CodEVOLUTION'
            })
        }/>
       
    </View>
)

}
export default AboutScreen
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignContent: "center",
        justifyContent: 'center',
    },
    text:{
        fontSize: 24,
        fontWeight:'bold',
        marginBottom:  16,

    }
})