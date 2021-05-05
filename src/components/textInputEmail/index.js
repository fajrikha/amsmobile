import { Input, Item, Content, View } from 'native-base'
import React from 'react'
import styles from './styles'

export default function index() {
    return (  
        <View style={styles.wrapper}>

        <Item regular style={styles.itemWrapper} >
            <Input placeholder="Email" style={styles.textInput} />
        </Item>
        </View>

    )
}

