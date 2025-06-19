import React from 'react';
import { View, Text, Image, StyleSheet, Pressable, ScrollView } from 'react-native';

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Profile Info */}
      <View style={styles.profileSection}>
        <View style={styles.profileImageContainer}>
          <Image
            source={require('../../assets/images/profile.jpg')} // Replace with your image
            style={styles.profileImage}
          />
          <Image
            source={require('../../assets/icons/edit.png')} // Replace with your edit icon
            style={styles.editIcon}
          />
        </View>
        <Text style={styles.name}>Sajeel Abbas</Text>
        <Text style={styles.email}>sajeel@example.com</Text>
        <Text style={styles.location}>Timeraga</Text>
      </View>

      {/* Menu Items */}
      <View style={styles.menuItem}>
        <Image source={require('../../assets/icons/bike1.png')} style={styles.icon} />
        <Text style={styles.menuText}>My Rides</Text>
      </View>

      <View style={styles.menuItem}>
        <Image source={require('../../assets/icons/wallet.png')} style={styles.icon} />
        <Text style={styles.menuText}>Payment Methods</Text>
      </View>

      <View style={styles.menuItem}>
        <Image source={require('../../assets/icons/star.png')} style={styles.icon} />
        <Text style={styles.menuText}>Rate Rides</Text>
      </View>

      <View style={styles.menuItem}>
        <Image source={require('../../assets/icons/setting.png')} style={styles.icon} />
        <Text style={styles.menuText}>Settings</Text>
      </View>

      <View style={styles.menuItem}>
        <Image source={require('../../assets/icons/logout.png')} style={styles.icon} />
        <Text style={styles.menuText}>Logout</Text>
      </View>

      {/* Recent Rides */}
      <View style={styles.recentRides}>
        <Text style={styles.recentRidesText}>Recent Rides</Text>
        <Text style={styles.seeAllText}>See All</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profileSection: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  profileImageContainer: {
    position: 'relative',
  },
  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  editIcon: {
    width: 20,
    height: 20,
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  email: {
    fontSize: 14,
    color: 'gray',
  },
  location: {
    fontSize: 14,
    color: 'green',
  },
  walletCard: {
    backgroundColor: '#f5f5f5',
    padding: 20,
    marginHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
  },
  walletLabel: {
    fontSize: 14,
    color: 'gray',
  },
  walletAmount: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  addMoneyButton: {
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  addMoneyText: {
    color: 'white',
    fontWeight: 'bold',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc',
  },
  icon: {
    width: 22,
    height: 22,
    marginRight: 15,
  },
  menuText: {
    fontSize: 16,
  },
  recentRides: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  recentRidesText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  seeAllText: {
    color: 'green',
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
