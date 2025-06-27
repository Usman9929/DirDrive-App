import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const rides = [
  {
    id: 1,
    name: 'Malik Ahmad',
    time: 'Today, 10:30 AM',
    pickup: 'Sado Grade',
    dropoff: 'Timergara',
    fare: 'Rs.250',
    status: 'Completed',
  },
  {
    id: 2,
    name: 'Shahzada',
    time: 'Yesterday, 4:15 PM',
    pickup: 'Shaheed Chowk',
    dropoff: 'Gur Gury Chowk Block C',
    fare: 'Rs.100',
    status: 'Completed',
  },
];

export default function HistoryScreen() {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Ride History</Text>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        {rides.map((ride) => (
          <View key={ride.id} style={styles.card}>
            <Text style={styles.time}>{ride.time}</Text>
            <View style={styles.rowSpaceBetween}>
              <Text style={styles.name}>{ride.name}</Text>
              <Text style={styles.fare}>{ride.fare}</Text>
            </View>

            <View style={styles.locationRow}>
              <Image source={require('../../assets/icons/orange_dot.png')} style={styles.dotIcon} />
              <Text style={styles.location}>{ride.pickup}</Text>
            </View>
            <View style={styles.locationRow}>
              <Image source={require('../../assets/icons/green_dot.png')} style={styles.dotIcon} />
              <Text style={styles.location}>{ride.dropoff}</Text>
            </View>

            <View style={styles.rowSpaceBetween}>
              <Text style={styles.completed}>Completed</Text>
              <TouchableOpacity onPress={() => navigation.navigate('ViewDetailScreen')}>
                <Text style={styles.detailsLink}>View Details</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16 },
  header: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  card: {
    backgroundColor: '#fff',
    elevation: 2,
    padding: 16,
    borderRadius: 10,
    marginBottom: 15,
  },
  time: { fontSize: 12, color: '#888', marginBottom: 5 },
  rowSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  name: { fontSize: 16, fontWeight: 'bold' },
  fare: { fontSize: 16, fontWeight: 'bold', color: '#4CAF50' },
  locationRow: { flexDirection: 'row', alignItems: 'center', marginTop: 2 },
  dotIcon: { width: 10, height: 10, marginRight: 6 },
  location: { fontSize: 14, color: '#444' },
  completed: { color: '#4CAF50', fontWeight: 'bold', marginTop: 10 },
  detailsLink: { color: '#007bff', fontWeight: 'bold', marginTop: 10 },
  navbar: {
    height: 50,
    borderTopWidth: 1,
    borderColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#fff',
  },
  navIcon: { width: 24, height: 24, tintColor: '#4CAF50' },
  navIconInactive: { width: 24, height: 24, tintColor: '#888' },
});
