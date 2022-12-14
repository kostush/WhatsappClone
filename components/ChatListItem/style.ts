import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    avatar:{
        width:60,
        height:60,
        marginRight:10,
        borderRadius:50,
    },
    container:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between',
        padding: 10,
    },
    midContainer:{
        justifyContent:'space-around'

    },
    leftContainer:{
        flexDirection:'row'
    },
    rightContainer:{

    },
    username:{
        fontWeight:'bold',
        fontSize:16
    },
    lastMessage:{
        fontSize:16,
        color:'gray',
        flexWrap:'wrap'
    },
    time:{
        fontSize:14,
        color:'gray'
    }

})

export default styles;