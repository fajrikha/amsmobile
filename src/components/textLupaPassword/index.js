import { useNavigation } from '@react-navigation/native';
import { Container } from 'native-base';
import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styles from '../../components/textLupaPassword/styles'

const index = ({screenName}) => {
    const navigation = useNavigation();

    return (
       

        <TouchableOpacity onPress={() => navigation.navigate(screenName)} style={styles.touch}>
            <Text style={styles.text}>Lupa Password ?</Text> 
        </TouchableOpacity>
       
        
    )
}

export default index 
