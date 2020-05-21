import React from 'react';
import {Container, Box, Field, Button, Text, SingUp} from '../../styled/singin';
import {useNavigation} from '@react-navigation/native';

export default function SingIn() {
  const navigation = useNavigation();

  return (
    <Container>
      <Box>
        <Field placeholder="example@example.com" />
        <Field placeholder="password" />

        <Button onPress={() => navigation.navigate('Home')}>
          <Text>Login</Text>
        </Button>

        <Button onPress={() => navigation.navigate('SingUp')}>
          <SingUp>Sing Up</SingUp>
        </Button>
      </Box>
    </Container>
  );
}
