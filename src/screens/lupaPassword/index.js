import {
  Body,
  Container,
  Content,
  Form,
  Header,
  Icon,
  Input,
  Item,
  Label,
  Left,
} from 'native-base';
import React, {Component} from 'react';
import {StatusBar, Text, TouchableOpacity, View} from 'react-native';
import Field from 'redux-form';

import DashboardHeader from '../../components/dashboardHeader';
import HomeHeader from '../../components/homeHeader';
import styles from './styles';

// const renderFieldEmail = ({ input, type, label, meta: { touched, error, warning } }) => {
//     var hasError = false;
//     if (touched && error !== undefined) {
//         hasError = true;
//     }
//     return(
//         <View style={styles.input}>
//             <Label style={{fontSize:15, color:hasError ? "red" : "#666"}}>{label}</Label>
//             <Item regular style={{borderRadius:5, height:40, borderColor: hasError ? "red" : "#ccc"}}>
//                 <Input {...input}
//                 type={type} />
//             </Item>
//             {hasError ? <Text style={styles.ErrorDesc}>{error}</Text> : null}
//         </View>
//     )
// }

class LupaPasswordScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: 'itdpq1@baf.id',
      screenTitle: 'Lupa Password',
      Email: '',
      disableButton: false,
    };
  }
  render() {
    const {placeholder, screenTitle} = this.state;
    const {navigation} = this.props;
    return (
        <Container>
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
        <DashboardHeader />
        <Content showsVerticalScrollIndicator={false}>
        <View style={styles.input}>
          <Label style={styles.label}>Email</Label>
          <Item regular style={{borderRadius: 5, height: 50}}>
            <Input placeholder={placeholder} />
          </Item>
          {/* <Text style={styles.ErrorDesc}>{error}</Text> */}
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>{screenTitle}</Text>
        </TouchableOpacity>
        </Content>
      </Container>
    );
  }
}

export default LupaPasswordScreen;

{
  /* <View style={{flexDirection: 'row', backgroundColor: 'white'}}>

    <View style={{ height: 47, flexDirection: 'row'}}>
        <Button iconLeft dark transparent>
            <Icon name='arrow-back' style={{color: '#002F5F'}}/>  
        </Button>
    </View>
    <View style={{justifyContent: 'center', width: '100%'}}>
        <Text style={{textAlign: 'center', color: '#002F5F', fontSize: 18}}>Lupa Password</Text>
    </View>
    </View> */
}
