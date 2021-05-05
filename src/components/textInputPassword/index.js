import { Input, Item, View } from 'native-base'
import React, { useState } from 'react'
import {TouchableOpacity,} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import styles from './styles';


export default function index() {
    const [isSecureEntry, setIsSecureEntry] = useState(true);

    const showPassword = () => {
        setIsSecureEntry(!isSecureEntry)
    }
    return (

        <View style={{paddingHorizontal: 47, marginTop: 20}}>
            <Item regular style={styles.itemWrapper}>
                <Input placeholder="Password" style={styles.textInput} secureTextEntry={isSecureEntry}/>
                <TouchableOpacity onPress={showPassword}>
                    {
                        isSecureEntry?
                        <Icon name='eye-off' size={24} color="grey" style={{marginRight: 13}}/>
                        :
                        <Icon name='eye' size={24} color="black" style={{marginRight: 13}}/>
                    }
                    
                </TouchableOpacity>
            </Item>
        </View>
       
    )
}

