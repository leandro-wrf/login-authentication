import React from 'react';
import {Container, Box, Field, Button, Text} from '../../styled/singup';

export default function SingUp() {
  return (
    <Container>
      <Box>
        <Field placeholder="user" />
        <Field placeholder="example@example.com" />
        <Field placeholder="password" />

        <Button>
          <Text>Sing Up</Text>
        </Button>
      </Box>
    </Container>
  );
}
