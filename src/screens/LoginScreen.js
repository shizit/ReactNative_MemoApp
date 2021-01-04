import React from 'react';
import { StyleSheet, View, Text, TextInput, Button, TouchableHighlight } from 'react-native';

  function LoginScreen(props) {
    return (
      <View style={styles.container}>
            <Text style={styles.titleText}>ログイン</Text>
            <TextInput style={styles.input} value="Email Address" />
            <TextInput style={styles.input} value="Password" />
            <TouchableHighlight  style={styles.button} underlayColor='#0074D1' onPress={()=>{}}>
                <Text style={styles.buttonText}>ログイン</Text>
            </TouchableHighlight>

      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    top: 78,
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
  }

});

export default LoginScreen;