import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableHighlight } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

function LoginScreen(props) {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Login</Text>
      <TextInput style={styles.input} value="Email Address" />
      <TextInput style={styles.input} value="Password" />
      <TouchableHighlight style={styles.button} underlayColor="#0074D1" onPress={() => { navigation.navigate('MemoList'); }}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableHighlight>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Not registered? </Text>
        <TouchableOpacity onPress={() => { navigation.navigate('Signup'); }}>
          <Text style={styles.footerLink}>Sign up here!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    width: '100%',

  },

  titleText: {
    fontSize: 16,
    marginVertical: 16,
    textAlign: 'center',
  },

  input: {
    backgroundColor: '#eee',
    height: 48,
    marginBottom: 16,
    marginLeft: 16,
    marginRight: 16,
    borderWidth: 1,
    borderColor: '#DDD',
    padding: 8,
  },

  button: {
    marginLeft: 16,
    marginRight: 16,
    backgroundColor: '#2196F3',
    textAlign: 'center',
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
  },

  footer: {
    marginTop: 16,
    marginLeft: 16,
    marginRight: 16,
    flexDirection: 'row',
  },

  footerLink: {
    color: 'blue',
  },

});

export default LoginScreen;
