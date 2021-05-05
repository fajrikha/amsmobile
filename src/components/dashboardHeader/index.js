import React, { Component } from 'react'
import { Image, Text, View } from 'react-native'
import { APP_NAME } from '../../utils/utils'
import Logo from '../../../assets/image/logo-baf.png'
import styles from './styles'

export default class DashboardHeader extends Component {
    render() {
        return (
            <View style={styles.BaseView}>
                <Image source={Logo} style={styles.Logo} />
                <View>
                    <Text style={styles.Description}>Selamat datang</Text>
                    <Text style={styles.Description}>di {APP_NAME}</Text>
                </View>
            </View>
        )
    }
}
