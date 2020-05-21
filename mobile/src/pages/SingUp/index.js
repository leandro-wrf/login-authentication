import React, {useState} from 'react';
import {Container, Box, Field, Button, Text} from '../../styled/singup';

export default function SingUp() {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit() {}

  return (
    <Container>
      <Box>
        <Field placeholder="user" />
        <Field placeholder="example@example.com" />
        <Field placeholder="password" />

        <Button>
          <Text>Register</Text>
        </Button>
      </Box>
    </Container>
  );
}
