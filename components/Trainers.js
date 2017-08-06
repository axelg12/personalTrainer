import React from 'react';
import { StyleSheet, View, Text, FlatList  } from 'react-native';
import trainers from './trainers.json'

export default class Trainers extends React.Component {
  static navigationOptions = {
    title: 'Trainers',
  };
  renderTrainer(trainer) {
    return (
      <View>
        <Text>{trainer.name}</Text>
      </View>
    )
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <FlatList
          data={trainers}
          renderItem={({item}) => this.renderTrainer(item)}
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
