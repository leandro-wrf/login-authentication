import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #111111
  align-items: center;
  justify-content: center;
`;

export const Box = styled.View`
  width: 300px;
  height: 350px;
  border-radius: 10px;
  background-color: #ffffff;
  align-items: center;
  justify-content: center;
`;

export const Field = styled.TextInput`
  width: 260px;
  height: 50px;
  border-radius: 10px;
  border-width: 2px;
  border-color: #000000;
  padding-left: 10px;
  margin: 10px;
`;

export const Button = styled.TouchableOpacity`
  width: 120px;
  height: 60px;
  border-radius: 10px;
  margin-top: 20px;
  background-color: #000000;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  color: #ffffff;
  font-size: 24px;
  font-weight: bold;
`;

export const SingUp = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-top: 20px;
`;
