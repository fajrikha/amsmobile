import React from 'react'
import { Image } from 'react-native'
import styles from './styles'
import ImageLogin from '../../../assets/image/image-login.png'

const index = () => {
    
        return (
                <Image source={ImageLogin}
                resizeMode="stretch"
                style={styles.image}
                />           
        )
}

export default index
