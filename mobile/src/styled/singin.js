import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Box = styled.View`
  border-radius: 10px;
  background-color: #ffffff;
`;

export const Field = styled.TextInput`
  width: 260px;
  height: 50px;
  border-radius: 10px;
  border-width: 0.8px;
  border-color: #000000;
  padding-left: 10px;
  margin: 15px;
`;

export const Button = styled.TouchableOpacity`
  width: 120px;
  border-radius: 10px;
  margin-top: 10px;
  margin-left: 80px;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  font-size: 28px;
`;

export const SingUp = styled.Text`
  font-size: 17px;
  font-weight: bold;
  margin: 8px;
`;
