import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #111111;
  justify-content: center;
  align-items: center;
`

export const FieldEmail = styled.TextInput`
  width: 280px;
  height: 50px;
  border-bottom-width: 1px;
  border-color: #ffffff;
  color: #ffffff;
  margin-bottom: 10px;
`

export const FieldPass = styled.TextInput`
  width: 280px;
  height: 50px;
  border-bottom-width: 1px;
  border-color: #ffffff;
  color: #ffffff;
`

export const Button = styled.TouchableOpacity`
  margin-top: 80px;
  background-color: #1d1d1d;
  width: 150px;
  height: 80px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
`

export const Text = styled.Text`
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
`
