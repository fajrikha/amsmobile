import { Dimensions, StyleSheet } from "react-native";

const {width: WIDTH} = Dimensions.get('window')

const styles = StyleSheet.create({
    wrapper: {
        paddingHorizontal: 47, 
        alignItems: 'center',
        marginTop: 30,
        
    },
    button: {
        width: '100%', 
        justifyContent: 'center', 
        borderRadius: 10, 
        backgroundColor: '#567DF4',
        marginBottom: 5,
        color: '#347AB6',
    },
    textButton: {
        color: '#fff', 
        fontFamily: 'FSAlbert', 
        fontSize: 14, 
        fontWeight: '700'
    },
    wrapperText:{
        flexDirection: 'row',
    },
    textRegist: {
        fontFamily: 'FSAlbert',
        fontSize: 11,
        fontWeight: '700',
        color: '#002F5F',
        
    }
})

export default styles