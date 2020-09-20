import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  Container,
  Header,
  Body,
  Button,
  Heading,
  TextInput,
} from 'appi_mobile_app/src/component';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const back = () => {
    navigation.navigate('Landing');
  };
  return (
    <Container>
      <Header style={styles.header}>
        <Icon name="arrow-back" size={30} color="#000" onPress={back} />
      </Header>
      <Body style={styles.body}>
        <Heading style={styles.heading}>Hello!</Heading>
        <TextInput
          placeholder="Registered Email / ID"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <Button type="primary" onPress={() => navigation.navigate('Landing')}>
          LOGIN
        </Button>
      </Body>
    </Container>
  );
};

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    zIndex: 1,
  },
  heading: {
    marginBottom: 26,
  },
  body: {
    justifyContent: 'center',
  },
});

export default Login;
