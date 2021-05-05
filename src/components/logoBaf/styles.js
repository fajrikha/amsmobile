import { StyleSheet, Dimensions } from "react-native";

const {width: WIDTH, height} = Dimensions.get('window')

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row', 
        justifyContent: 'center',
        marginTop: 25,   
    },
    logo: {
        width: WIDTH/12, 
        height: height/44 
    },
    text: {
        color: '#000',
        fontWeight: '700',
        fontFamily: 'FSAlbert',
        fontSize: 10,
        
    }

})
export default styles