import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Container, Box, Field, Button, Text, SingUp} from '../../styled/home';

export default function SingIn() {
  return (
    <Container>
      <Box>
        <Field placeholder="example@example.com" />

        <Field placeholder="password" />

        <Button>
          <Text>Login</Text>
        </Button>

        <TouchableOpacity>
          <SingUp>SingUp</SingUp>
        </TouchableOpacity>
      </Box>
    </Container>
  );
}
