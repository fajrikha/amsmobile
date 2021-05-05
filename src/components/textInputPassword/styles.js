import { Dimensions, StyleSheet } from "react-native";

const {width: WIDTH, height} = Dimensions.get('window')

const styles = StyleSheet.create({
    itemWrapper: {
        height: height/15, 
        borderColor: '#000000', 
        width: '100%', 
        borderRadius: 4, 
        backgroundColor: '#FAFAFA',
        borderWidth: 1,
        
    },
    textInput: {
        fontFamily: 'FSAlbert',
        fontSize: 14,
        opacity: 0.6
    },
})
export default styles