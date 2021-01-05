import React, { useState } from 'react';
import {
  StyleSheet, View, Text, TextInput,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

function SignupScreen(props) {
  const { navigation } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>メンバー登録</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={(text) => { setEmail(text); }}
        autoCapitalize="none"
        keyboardType="email-address"
        placeholder="Email Address"
        textContentType="emailAddress"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={(text) => { setPassword(text); }}
        autoCapitalize="none"
        placeholder="Password"
        textContentType="password"
        secureTextEntry
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.reset({
            index: 0,
            routes: [{ name: 'MemoList' }],
          });
        }}
      >
        <Text style={styles.buttonText}>登録する</Text>
      </TouchableOpacity>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Already registered? </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.reset({
              index: 0,
              routes: [{ name: 'Login' }],
            });
          }}
        >
          <Text style={styles.footerLink}>Log In.</Text>
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

export default SignupScreen;
