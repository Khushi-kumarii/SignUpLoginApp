import React from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import PasswordStrengthBar from '../components/PasswordStrengthBar';
import commonStyles from '../styles/commonStyles';

const SignUpScreen: React.FC = () => {
  const handleSignUp = (values: { email: string; password: string }) => {
    Alert.alert('Sign Up Successful', `Welcome, ${values.email}!`);
  };

  return (
    <Formik
      initialValues={{ email: '', password: '', confirmPassword: '' }}
      validationSchema={Yup.object({
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string()
          .min(8, 'Password must be at least 8 characters')
          .required('Password is required'),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref('password')], 'Passwords must match')
          .required('Confirm Password is required'),
      })}
      onSubmit={handleSignUp}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
        <View style={commonStyles.container}>
          <Text style={commonStyles.title}>Sign Up</Text>
          <TextInput
            style={commonStyles.input}
            placeholder="Email"
            keyboardType="email-address"
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
          />
          {errors.email && <Text style={commonStyles.error}>{errors.email}</Text>}
          <TextInput
            style={commonStyles.input}
            placeholder="Password"
            secureTextEntry
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
          />
          {errors.password && <Text style={commonStyles.error}>{errors.password}</Text>}
          <PasswordStrengthBar password={values.password} />
          <TextInput
            style={commonStyles.input}
            placeholder="Confirm Password"
            secureTextEntry
            onChangeText={handleChange('confirmPassword')}
            onBlur={handleBlur('confirmPassword')}
            value={values.confirmPassword}
          />
          {errors.confirmPassword && (
            <Text style={commonStyles.error}>{errors.confirmPassword}</Text>
          )}
      <Button onPress={() => handleSubmit()} title="Sign Up" />

        </View>
      )}
    </Formik>
  );
};

export default SignUpScreen;
