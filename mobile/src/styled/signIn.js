import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #111111;
  justify-content: center;
  align-items: center;
`

export const FieldEmail = styled.TextInput`
  width: 250px;
  height: 45px;
  border-bottom-width: 1px;
  border-color: #ffffff;
  margin-bottom: 10px;
  color: #ffffff;
`

export const FieldPass = styled.TextInput`
  width: 250px;
  height: 45px;
  border-bottom-width: 1px;
  border-color: #ffffff
  margin-bottom: 130px;
  color: #ffffff;
`

export const Button = styled.TouchableOpacity`
  width: 180px;
  height: 70px;
  background-color: #1d1d1d;
  margin: 10px;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`

export const Text = styled.Text`
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
`
