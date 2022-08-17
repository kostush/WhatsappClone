import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        margin:10,
        alignItems:'flex-end',

    },
    mainContainer:{
        flexDirection:'row',
        backgroundColor:'white',
        borderRadius:25,
        marginRight:10,
        padding:10,
        flex:1,
        alignItems:'flex-end'
    },
    textInput:{
        flex:1,
        marginHorizontal:10
    },
    icon:{
     marginHorizontal:5
    },
    buttonContainer:{
        backgroundColor:Colors.light.tint,
        borderRadius:25,
        height:50,
        width:50,
        justifyContent:'center',
        alignItems:'center'
    }

})

export default styles