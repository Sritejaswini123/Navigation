import { View, Text,StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
const HomeScreen = () => {
const  navigation = useNavigation()

return(
    <View style = {styles.container}>
        <Text style={styles.text}>
            HomeScreen
        </Text>
        <Button
        title= 'go to About'
        onPress={() => navigation.navigate("About")}
/>
    </View>
)

}
export default HomeScreen
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