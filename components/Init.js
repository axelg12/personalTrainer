import React from 'react';
import { StyleSheet, View, Text, Button  } from 'react-native';

export default class Init extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>Welcome to the personal trainer finder</Text>
        <Button
          onPress={() =>  navigate('Trainers')}
          title="Next"
          color="#000080"
          accessibilityLabel="Continue to findy your next personal trainer"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
