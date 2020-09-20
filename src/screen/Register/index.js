import React, {useState} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  Header,
  Body,
  Button,
  Heading,
  Text,
  TextInput,
} from 'appi_mobile_app/src/component';

const Register = ({navigation}) => {
  const [name, setName] = useState('');
  const [registeredEmail, setRegisteredEmail] = useState('');
  const [position, setPosition] = useState('');
  const [club, setClub] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [address, setAddress] = useState('');

  const back = () => {
    navigation.navigate('Landing');
  };
  return (
    <ScrollView>
      <Header>
        <Icon name="arrow-back" size={30} color="#000" onPress={back} />
        <Heading style={styles.heading}>Welcome!</Heading>
      </Header>
      <Body>
        <Text style={styles.text}>
          Kindly fill out this form to register as a member of APPI.
        </Text>
        <TextInput
          placeholder="Full Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          placeholder="Registered Email"
          value={registeredEmail}
          onChangeText={setRegisteredEmail}
        />
        <TextInput
          placeholder="Position"
          value={position}
          onChangeText={setPosition}
        />
        <TextInput placeholder="Club" value={club} onChangeText={setClub} />
        <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
        <TextInput
          placeholder="Contact Number"
          value={contactNumber}
          onChangeText={setContactNumber}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Address"
          multiLine={true}
          numberOfLines={4}
          value={address}
          onChangeText={setAddress}
        />
        <Text style={styles.text}>
          By signing up, you agree to APPI’s{' '}
          <Text style={styles.underline}>Terms of Service</Text> and{' '}
          <Text style={styles.underline}>Privacy Policy</Text>
        </Text>
        <Button
          type="primary"
          style={styles.button}
          onPress={() => navigation.navigate('Landing')}>
          REGISTER
        </Button>
      </Body>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  heading: {
    marginRight: 'auto',
    marginLeft: 36,
  },
  text: {
    marginBottom: 24,
  },
  underline: {
    textDecorationLine: 'underline',
  },
  textInput: {
    paddingTop: 12,
    marginBottom: 24,
    minHeight: 100,
  },
  button: {
    marginBottom: 100,
  },
});

export default Register;
