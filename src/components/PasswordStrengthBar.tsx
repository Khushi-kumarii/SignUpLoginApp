import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PasswordStrengthBar: React.FC<{ password: string }> = ({ password }) => {
  const calculateStrength = (password: string) => {
    if (password.length < 6) return 'Weak';
    if (password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/)) return 'Strong';
    return 'Moderate';
  };

  const strength = calculateStrength(password);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Password Strength: {strength}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default PasswordStrengthBar;
