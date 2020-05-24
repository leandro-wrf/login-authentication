import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  FieldEmail,
  FieldPass,
  Button,
  Text
} from '../../styled/signup';
import api from '../../service/api';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const history = useNavigation();

  async function handleSubmit() {
    const data = { email, pass };

    if (!/^([a-zA-Z0-9])+@([a-zA-Z0-9])+\.com$/.test(email)) {
      return console.log('Email bad formatted');
    }

    if (pass.length <= 4) {
      return console.log('Password must contain more than 4 digits');
    }

    try{
     await api.post('/register', data);
    } catch (err){
      return console.log(err);
    }

    setEmail('');
    setPass('');
    history.push('SignIn');
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
        <Text>SIGN UP</Text>
      </Button>
    </Container>
  );
}
