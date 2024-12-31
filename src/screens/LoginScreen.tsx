import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox'; 
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import { Formik } from 'formik';
import * as Yup from 'yup';
import commonStyles from '../styles/commonStyles';

const LoginScreen: React.FC = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const [savedEmail, setSavedEmail] = useState('');

  useEffect(() => {
    const loadSavedEmail = async () => {
      try {
        const email = await AsyncStorage.getItem('rememberedEmail');
        if (email) setSavedEmail(email);
      } catch (error) {
        console.error('Error loading email:', error);
      }
    };
    loadSavedEmail();
  }, []);

  const handleLogin = async (values: { email: string; password: string }) => {
    try {
      if (rememberMe) {
        await AsyncStorage.setItem('rememberedEmail', values.email);
      } else {
        await AsyncStorage.removeItem('rememberedEmail');
      }
      Alert.alert('Login Successful', `Welcome back, ${values.email}!`);
    } catch (error) {
      console.error('Error saving email:', error);
    }
  };

  return (
    <Formik
      initialValues={{ email: savedEmail, password: '' }}
      validationSchema={Yup.object({
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().required('Password is required'),
      })}
      onSubmit={handleLogin}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
        <View style={commonStyles.container}>
          <Text style={commonStyles.title}>Login</Text>
          <TextInput
            style={commonStyles.input}
            placeholder="Email"
            keyboardType="email-address"
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            accessibilityLabel="Email Input"
          />
          {errors.email && <Text style={commonStyles.error}>{errors.email}</Text>}
          <TextInput
            style={commonStyles.input}
            placeholder="Password"
            secureTextEntry
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            accessibilityLabel="Password Input"
          />
          {errors.password && <Text style={commonStyles.error}>{errors.password}</Text>}
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={rememberMe}
              onValueChange={setRememberMe}
              accessibilityLabel="Remember Me Checkbox"
            />
            <Text style={styles.checkboxLabel}>Remember Me</Text>
          </View>
          <Button onPress={() => handleSubmit()} title="Login" accessibilityLabel="Login Button" />
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  checkboxLabel: {
    marginLeft: 10,
    fontSize: 16,
  },
});

export default LoginScreen;
