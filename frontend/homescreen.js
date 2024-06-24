import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

'''enter other frontend development ideas'''

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to AstroNotify</Text>
      <Text style={styles.subtitle}>Your personal astronomy assistant</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    marginTop: 10,
  },
});

export default HomeScreen;
