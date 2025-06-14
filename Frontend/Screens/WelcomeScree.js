import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DirDriveWelcomeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedType, setSelectedType] = useState('');
  const navigation = useNavigation();

  const handleTypeSelection = (type) => {
    setSelectedType(type);
    setModalVisible(true);
  };

  const handleRoleSelection = (role) => {
    setModalVisible(false);
    if (selectedType === 'ride') {
      if (role === 'customer') {
        navigation.navigate('CustomerRideScreen');
      } else {
        navigation.navigate('BikerScreen');
      }
    } else if (selectedType === 'delivery') {
      if (role === 'customer') {
        navigation.navigate('CustomerDeliveryScreen');
      } else {
        navigation.navigate('DeliveryBikerScreen');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to DirDrive</Text>
      <Text style={styles.tagline}>- your reliable bike ride service in Timergara.</Text>
      
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>Fast, safe, and affordable travel at your fingertips.</Text>
      </View>
      
      <Text style={styles.selectText}>Select Your Type</Text>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.typeButton}
          onPress={() => handleTypeSelection('ride')}
        >
          <Text style={styles.buttonText}>Ride</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.typeButton}
          onPress={() => handleTypeSelection('delivery')}
        >
          <Text style={styles.buttonText}>Delivery</Text>
        </TouchableOpacity>
      </View>

      {/* Selection Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Are you a:</Text>
            
            <TouchableOpacity
              style={[styles.modalButton, styles.customerButton]}
              onPress={() => handleRoleSelection('customer')}
            >
              <Text style={styles.modalButtonText}>Customer</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={[styles.modalButton, styles.bikerButton]}
              onPress={() => handleRoleSelection('biker')}
            >
              <Text style={styles.modalButtonText}>Biker</Text>
            </TouchableOpacity>
            
            <Pressable
              style={styles.cancelButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  tagline: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
  },
  descriptionContainer: {
    marginBottom: 40,
    paddingHorizontal: 20,
  },
  descriptionText: {
    fontSize: 18,
    color: '#444',
    textAlign: 'center',
    lineHeight: 24,
  },
  selectText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  typeButton: {
    backgroundColor: '#0066cc',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginHorizontal: 10,
    width: '45%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  // Modal styles
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    width: '80%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  modalButton: {
    padding: 15,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  customerButton: {
    backgroundColor: '#4CAF50',
  },
  bikerButton: {
    backgroundColor: '#2196F3',
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cancelButton: {
    marginTop: 10,
    padding: 10,
  },
  cancelButtonText: {
    color: '#666',
    fontSize: 14,
  },
});

export default DirDriveWelcomeScreen;