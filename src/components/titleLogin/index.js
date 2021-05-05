import React from 'react'
import { Text, View } from 'react-native'
import { APP_NAME, APP_VERSION } from '../../utils/utils'
import styles from './styles'

const Title = () => {
    return (
        <View style={styles.container}>  
            <Text style={styles.text}>Welcome to</Text>
            <Text style={styles.text1}>{APP_NAME}</Text>
            <Text style={styles.text2}>V{APP_VERSION}</Text>
        </View>
    )
}
export default Title
