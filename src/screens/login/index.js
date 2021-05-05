import {Container, Content, Form} from 'native-base';
import React, {Component} from 'react';
import {Image, StatusBar, View} from 'react-native';
import ImageLogin from '../../components/imageLogin';
import Title from '../../components/titleLogin';
import Email from '../../components/textInputEmail';
import Password from '../../components/textInputPassword';
import LupaPassword from '../../components/textLupaPassword';
import ButtonLogin from '../../components/buttonLogin';
import LogoBaf from '../../components/logoBaf';
import styles from './styles';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      icon: '',
      show: true,
    };
  }

  render() {
    return (
      <Container>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="dark-content"
        />
          <View style={styles.wrapperImage}>
            <ImageLogin />
          </View>
          {/* <View style={styles.secondWrapper}> */}
        <Content style={{marginTop: -20}} showsVerticalScrollIndicator={false}>
            <Title />
            <Email />
            <Password />
            <LupaPassword screenName="Lupa Password" />
            <ButtonLogin screenName="Register" />
            <LogoBaf />
        </Content>
          {/* </View> */}
      </Container>
    );
  }
}

export default LoginScreen;
