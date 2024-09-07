import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Flight} from '../models/types';
import colors from '../styles/colors';

interface Props {
  flight: Flight;
  onSelect: (flight: Flight) => void;
  onRemove: (flight: Flight) => void;
  isSelected: boolean;
}

const FlightCard: React.FC<Props> = ({flight, onSelect, isSelected}) => (
  <TouchableOpacity
    style={[styles.card, isSelected ? styles.selected : {}]}
    onPress={() => onSelect(flight)}>
    <View style={styles.header}>
      <View style={styles.infoContainer}>
        <Image
          source={require('../assets/images/airlines_logo.png')}
          style={styles.logo}
        />
        <Text style={styles.flightNumber}>
          {flight.number} • {flight.airlines}
        </Text>
      </View>
      <View style={styles.durationContainer}>
        <Text style={styles.duration}>{flight.duration}</Text>
      </View>
    </View>

    <View style={styles.detailsContainer}>
      <View style={styles.detailRow}>
        <Image
          source={require('../assets/images/takeoff_icon.png')}
          style={styles.icon}
        />
        <Text style={styles.dateText}>{flight.departureDate}</Text>
      </View>
      <View style={styles.detailRow}>
        <Image
          source={require('../assets/images/landing_icon.png')}
          style={styles.icon}
        />
        <Text style={styles.dateText}>{flight.arrivalDate}</Text>
      </View>
    </View>

    <View style={styles.locationContainer}>
      <Text style={styles.cityText}>{flight.departure}</Text>
      <Image
        source={require('../assets/images/plane.png')}
        style={styles.planeIcon}
      />
      <Text style={styles.cityText}>{flight.arrival}</Text>
    </View>

    <View style={styles.timeContainer}>
      <Text style={styles.timeText}>{flight.departureTime}</Text>
      <Text style={styles.timeText}>{flight.arrivalTime}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: {
    padding: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: colors.card,
    borderRadius: 5,
    marginHorizontal: 20,
    backgroundColor: '#fff',
  },
  selected: {
    backgroundColor: '#f0f8ff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  logo: {
    width: 28,
    height: 28,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  flightNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.flightNumber,
  },
  duration: {
    fontSize: 15,
    fontWeight: '500',
    color: colors.duration,
  },
  durationContainer: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: colors.backgroundColor,
    borderColor: colors.borderColor,
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  planeIcon: {
    width: 35,
  },
  dateText: {
    fontSize: 16,
    color: '#666',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  cityText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  timeText: {
    fontSize: 15,
    color: colors.timeText,
    fontWeight: '400',
  },
});

export default FlightCard;
