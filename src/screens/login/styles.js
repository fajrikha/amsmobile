import { Dimensions, StyleSheet } from "react-native"

const {height, width: WIDTH} = Dimensions.get('window')

const styles = StyleSheet.create({
        wrapperImage: {
            height: height/3.6,
        },
    })

export default styles