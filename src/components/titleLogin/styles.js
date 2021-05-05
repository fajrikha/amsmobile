import { Dimensions, StyleSheet } from "react-native";

const {width: WIDTH, height} = Dimensions.get('window')

const styles= StyleSheet.create({
    container: {
        paddingLeft: 36,
        width: '100%',
        padding: 10,
        marginTop: 50
    },
    text: {
        fontFamily: 'FSAlbert',
        fontWeight: '400',
        fontStyle: 'normal',
        fontSize: 15,
        color: '#22215B',
        
    },
    text1: {
        fontFamily: 'FSAlbert',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 30,
        color: '#22215B',
        paddingBottom: 7,
    },
    text2: {
        fontFamily: 'FSAlbert',
        fontStyle: 'normal',
        fontSize: 9,
        fontWeight: '400',
        color: '#7B7F9E'
    }
})

export default styles