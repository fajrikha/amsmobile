import { Button, Header, Icon, Left } from 'native-base'
import React, { Component } from 'react'
import { StatusBar, View } from 'react-native'
import styles from './styles'

export default class HomeHeader extends Component {
    render() {
        return (
            <View>
                <StatusBar translucent={false} />
        <Header
          androidStatusBarColor={'white'}
          iosBarStyle={'dark-content'}
          style={{backgroundColor: 'white'}}>
          <Left>
            <TouchableOpacity
              hasText
              transparent
              onPress={() => navigation.navigate('Login')}>
              <Icon
                type="FontAwesome5"
                name="arrow-left"
                style={{fontSize: 18, color: '#002F5F'}}
                />
            </TouchableOpacity>
          </Left>
          <Body>
            <Text style={styles.title}>{this.state.screenTitle}</Text>
          </Body>
        </Header>
            </View>
        )
    }
}
