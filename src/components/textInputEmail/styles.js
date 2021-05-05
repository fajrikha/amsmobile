import { Dimensions, StyleSheet } from "react-native";

const {width: WIDTH, height} = Dimensions.get('window')

const styles = StyleSheet.create({
    wrapper: {
        paddingEnd: 47,
        paddingStart: 47,
        marginTop: 50,
        width: '100%'
    },
    textInput: {
        fontFamily: 'FSAlbert',
        fontSize: 14,
        opacity: 0.6
    },
    itemWrapper: {
        height: height/14 , 
        borderColor: '#000000', 
        width: '100%',  
        borderRadius: 4,
        backgroundColor: '#FAFAFA',
        borderWidth: 1,
        padding: 5
    },

})

export default styles