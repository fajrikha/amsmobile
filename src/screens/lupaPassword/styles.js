import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  Header: {
    height: 80,
    backgroundColor: 'white',
  },
  input: {
    alignSelf: 'center',
    width: '80%',
    marginTop: 10,
  },
  ErrorDesc: {
    color: 'red',
    alignSelf: 'stretch',
    textAlign: 'right',
    fontSize: 10,
    right: 10,
  },
  label: {
    marginTop: 30,
    fontFamily: 'FSAlbert',
    fontWeight: '400',
    fontSize: 17,
    color: 'gray',
    marginBottom: 8,
  },
  text: {
    fontSize: 15,
    fontFamily: 'FSAlbert',
    color: '#FFF',
    fontWeight: '400',
  },
  button: {
    backgroundColor: '#347AB6',
    width: '80%',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 5,
    height: 50,
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 40
  },
  title: {
    color: '#002F5F',
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'FSAlbert',
  },
});

export default styles;
