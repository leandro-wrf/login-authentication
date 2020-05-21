import React, {useState} from 'react';
import {Container, Box, Field, Button, Text} from '../../styled/singup';
import api from '../../service/api';

export default function SingUp() {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit() {
    const data = {
      user,
      email,
      password,
    };

    const token = await api.post('/register', data);
    console.log(token.message);
  }

  return (
    <Container>
      <Box>
        <Field
          placeholder="user"
          value={user}
          onChangeText={text => setUser(text)}
        />
        <Field
          placeholder="example@example.com"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <Field
          placeholder="password"
          value={password}
          onChangeText={text => setPassword(text)}
        />

        <Button onPress={handleSubmit}>
          <Text>Register</Text>
        </Button>
      </Box>
    </Container>
  );
}
