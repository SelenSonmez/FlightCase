import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
} from 'react-native';
import FlightCard from '../components/FlightCard';
import EmptyState from '../components/EmptyState';
import {Flight} from '../models/types';
import {hardcodedFlights} from '../utils/flightData';
import colors from '../styles/colors'; // Import colors

const HomeScreen: React.FC = () => {
  const [flights, setFlights] = useState<Flight[]>([]);
  const [selectedFlight, setSelectedFlight] = useState<Flight | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleAddFlight = () => {
    const randomIndex = Math.floor(Math.random() * hardcodedFlights.length);
    const flight = hardcodedFlights[randomIndex];
    setFlights(prevFlights => [...prevFlights, flight]);
  };

  const handleRemoveFlight = (flightToRemove: Flight) => {
    setFlights(prevFlights =>
      prevFlights.filter(flight => flight !== flightToRemove),
    );
  };

  const handleSelectFlight = (flight: Flight) => {
    setSelectedFlight(flight);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setSelectedFlight(null);
  };

  const handleRemoveFromModal = () => {
    if (selectedFlight) {
      handleRemoveFlight(selectedFlight);
      handleCloseModal();
    }
  };

  return (
    <View style={styles.container}>
      <Header onPressPlus={handleAddFlight} />
      <View style={styles.content}>
        {flights.length === 0 ? (
          <EmptyState
            onAddFlight={handleAddFlight}
            onPressPlus={handleAddFlight}
          />
        ) : (
          <ScrollView>
            {flights.map((flight, index) => (
              <FlightCard
                key={index}
                flight={flight}
                isSelected={flight === selectedFlight}
                onSelect={handleSelectFlight}
                onRemove={handleRemoveFlight}
              />
            ))}
          </ScrollView>
        )}
      </View>

      {/* Modal to display selected flight */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCloseModal}>
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            {selectedFlight && (
              <FlightCard
                flight={selectedFlight}
                isSelected={false}
                onSelect={() => {}}
                onRemove={() => {}}
              />
            )}
          </View>
          <TouchableOpacity
            style={styles.modalButton}
            onPress={handleRemoveFromModal}>
            <Text style={styles.closeButtonText}>Remove Flight</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const Header: React.FC<{onPressPlus: () => void}> = ({onPressPlus}) => (
  <View style={styles.header}>
    <Text style={styles.headerText}>Flights</Text>
    <TouchableOpacity style={styles.iconButton} onPress={onPressPlus}>
      <Image source={require('../assets/images/add_button_view.png')} />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  headerText: {
    fontSize: 34,
    fontWeight: 'bold',
    color: colors.text,
  },
  iconButton: {
    padding: 10,
  },
  content: {
    flex: 1,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.modalBackground,
  },
  modalContent: {
    width: 450,
    padding: 15,
  },
  modalButton: {
    width: '80%',
    height: 50,
    backgroundColor: colors.modalButton,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  closeButtonText: {
    color: colors.closeButtonText,
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default HomeScreen;
