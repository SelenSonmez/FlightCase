import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Flight} from '../models/types';
import {hardcodedFlights} from '../utils/flightData';
import colors from '../styles/colors';

interface Props {
  onAddFlight: (flight: Flight) => void;
  onPressPlus: () => void;
}

const EmptyState: React.FC<Props> = ({onAddFlight}) => {
  // Function to handle adding a flight
  const handleAddFlight = () => {
    const randomIndex = Math.floor(Math.random() * hardcodedFlights.length);
    const selectedFlight = hardcodedFlights[randomIndex];
    onAddFlight(selectedFlight);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          style={styles.image}
          source={require('../assets/images/plane_icon.png')}
        />
        <Text style={styles.headerText}>No Flights Added Yet</Text>
        <Text style={styles.message}>
          Let's get started on your jet lag plan! Add your upcoming flights to
          begin your journey..
        </Text>
        <TouchableOpacity style={styles.button} onPress={handleAddFlight}>
          <Text style={styles.buttonText}>Add Flight</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    alignItems: 'flex-start',
  },
  headerText: {
    fontSize: 25,
    bottom: 10,
    fontWeight: 'bold',
    color: 'black',
  },
  iconButton: {
    padding: 10,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  image: {
    bottom: 35,
  },
  message: {
    fontSize: 19,
    marginBottom: 20,
    color: colors.message,
    textAlign: 'center',
  },
  button: {
    backgroundColor: colors.buttonBackgroundColor,
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 15,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 19,
    textAlign: 'center',
  },
});

export default EmptyState;
