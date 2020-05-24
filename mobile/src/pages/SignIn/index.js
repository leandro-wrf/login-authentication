import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  FieldEmail,
  FieldPass,
  Button,
  Text
} from '../../styled/signIn.js';
import api from '../../service/api';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const navigation = useNavigation();

  async function handleSubmit() {
    const data = { email, pass };

    if (!/^([a-zA-Z0-9])+@([a-zA-Z0-9])+\.com$/.test(email)) {
      return console.log('Email bad formatted');
    }

    try {
      await api.post('/authenticate', data);
    } catch (err) {
      return console.log(err);
    }

    setEmail('');
    setPass('');
    navigation.navigate('Home');
  }

  return (
    <Container>

      <FieldEmail
        placeholder="Email"
        autoCapitalize="none"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <FieldPass
        placeholder="Password"
        secureTextEntry={true}
        autoCapitalize="none"
        value={pass}
        onChangeText={text => setPass(text)}
      />

      <Button onPress={handleSubmit}>
        <Text>SIGN IN</Text>
      </Button>

      <Button onPress={() => navigation.navigate('SignUp')}>
        <Text>SIGN UP</Text>
      </Button>

    </Container>
  );
}
