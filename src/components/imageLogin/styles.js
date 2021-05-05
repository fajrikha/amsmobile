import { StyleSheet, Dimensions } from "react-native";

const {width: WIDTH, height} = Dimensions.get('window')

const styles= StyleSheet.create({
    image: {
        height: height/1.5,
        width: '100%',
        opacity: 0.8
    }
})

export default styles