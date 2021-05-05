import React from 'react'
import { Image, Text, View } from 'react-native'
import styles from './styles'
import LogoBaf from '../../../assets/image/logo-baf.png'

const index = () => {
    return (
        
        <View style={styles.wrapper}>
            <Text style={styles.text}>Powered by </Text>
            <Image source={LogoBaf} style={styles.logo}/>
        </View>
        
    )
}

export default index


