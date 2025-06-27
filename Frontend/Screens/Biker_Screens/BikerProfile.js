import React from 'react';
import { View, Text, StyleSheet, Image, Pressable, ScrollView, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BikerProfile = () => {
  const navigation = useNavigation()
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Avatar and Name */}
      <View style={styles.profileHeader}>
        <Image
          source={require('../../assets/images/profile3.png')} // Replace with your actual avatar image path
          style={styles.avatar}
        />
        <Text style={styles.name}>Waqas Kamal</Text>
        <Text style={styles.rating}>⭐ 4.8 <Text style={{ color: '#777' }}>(245 rides)</Text></Text>
      </View>

      {/* Info Box */}
      <View style={styles.infoBox}>
        <View style={styles.infoRow}>
          <Text style={styles.infoIcon}>📞</Text>
          <Text style={styles.infoText}>+234 812 345 6789</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoIcon}>🏍️</Text>
          <Text style={styles.infoText}>Honda CB125F (XYZ-7890)</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoIcon}>📅</Text>
          <Text style={styles.infoText}>Member since March 2025</Text>
        </View>
      </View>

      {/* Settings Options */}
      <Pressable style={styles.optionRow} onPress={() => navigation.navigate('AccountScreen')}>
        <Text style={styles.optionText}>Account Settings</Text>
        <Text style={styles.arrow}>›</Text>
      </Pressable>

      <Pressable style={styles.optionRow}>
        <Text style={styles.optionText}>Help Center</Text>
        <Text style={styles.arrow}>›</Text>
      </Pressable>

      {/* Logout Button */}
      <Pressable style={styles.logoutButton}>
        <Text style={styles.logoutText}>Log Out</Text>
      </Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20,
    flexGrow: 1,
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 25,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  rating: {
    marginTop: 5,
    color: '#444',
    fontSize: 14,
  },
  infoBox: {
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  infoIcon: {
    marginRight: 10,
    fontSize: 18,
  },
  infoText: {
    fontSize: 15,
    color: '#333',
  },
  optionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
  arrow: {
    fontSize: 18,
    color: '#999',
  },
  logoutButton: {
    borderWidth: 1,
    borderColor: '#f44336',
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 30,
    alignItems: 'center',
  },
  logoutText: {
    color: '#f44336',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default BikerProfile;
