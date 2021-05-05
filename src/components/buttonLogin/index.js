import { useNavigation } from '@react-navigation/native'
import { Button } from 'native-base'
import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styles from './styles'

const index = ({screenName}) => {
    const navigation = useNavigation();
    return (
        <View style={styles.wrapper}>
            <Button style={styles.button}>
                <Text style={styles.textButton}>Masuk</Text>
            </Button>
            <View style={styles.wrapperText}>
                <Text style={styles.textRegist}>Belum Ada Akun XTRA ? </Text>
                <TouchableOpacity onPress={() => navigation.navigate(screenName)}>
                    <Text style={styles.textRegist} >Daftar Sekarang</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    )
}

export default index
