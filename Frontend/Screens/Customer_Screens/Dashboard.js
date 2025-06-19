import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CustomDashboard = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.profileContainer}>
          <Image
            source={require('../../assets/images/profile.jpg')}
            style={styles.profileImage}
          />
          <View>
            <Text style={styles.welcomeText}>Welcome</Text>
            <Text style={styles.username}>Sajeel Abbas</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.notificationContainer}>
          <Image
            source={require('../../assets/icons/notification.png')}
           style={[styles.bellIcon, {tintColor: null}]}
          />
        </TouchableOpacity>
      </View>

      {/* Banner */}
      <ImageBackground
        source={require('../../assets/images/banner.jpg')}
        style={styles.banner}
        imageStyle={{ borderRadius: 15 }}
      >
        <Text style={styles.bannerTitle}>Fast Reliable Rides </Text>
        <Text style={styles.bannerTitle}>in Timeregara</Text>
        <View style={styles.bannerTextContainer}>
          <Text style={styles.bannerSubtitle}>Book a ride in seconds</Text>
          <Text style={styles.bannerSubtitle}>safe, affordable, and convenient.</Text>
        </View>
        <TouchableOpacity style={styles.bookRideButton}>
          <Text style={styles.bookRideText}>Book a Ride</Text>
        </TouchableOpacity>
      </ImageBackground>

      {/* Select a Ride */}
      <Text style={styles.selectRide}>Select a ride</Text>
      <View style={styles.rideOptions}>
        <TouchableOpacity style={styles.option} 
         onPress={() => navigation.navigate('BookRideScreen')}
        >
          <View style={styles.iconCircle}>
            <Image source={require('../../assets/icons/bike.png')} 
            style={[styles.optionImage, {tintColor: null}]}
             />
          </View>
          <Text style={styles.optionText}>Book a Ride</Text> 
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} >
          <View style={styles.iconCircle}>
            <Image source={require('../../assets/icons/myrides.png')} 
            style={[styles.optionImage, {tintColor: null}]}
             />
          </View>
          <Text style={styles.optionText}>My Ride</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <View style={styles.iconCircle}>
            <Image source={require('../../assets/icons/support.png')} style={[styles.optionImage, {tintColor: null}]} />
          </View>
          <Text style={styles.optionText}>Support</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <View style={styles.iconCircle}>
            <Image source={require('../../assets/icons/rate.png')} style={[styles.optionImage, {tintColor: null}]} />
          </View>
          <Text style={styles.optionText}>Rate Ride</Text>
        </TouchableOpacity>
      </View>

      {/* Recent Rides */}
      <Text style={styles.recentRidesTitle}>Recent Rides</Text>
      <View style={styles.rideCard}>
        <View style={styles.rideCardHeader}>
          <Text style={styles.rideDate}>1 May, 2022</Text>
          <Text style={styles.ridePrice}>Rs.100</Text>
        </View>
        <View style={styles.rideLocation}>
          <Text style={styles.pickDropLabel}>Pickup location</Text>
          <Text style={styles.locationText}>DHQ Hospital</Text>
          <Text style={styles.pickDropLabel}>Drop off</Text>
          <Text style={styles.locationText}>Timergar Main Adda</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
    marginLeft: 15
  },
  welcomeText: {
    fontSize: 14,
    color: '#888',
    marginBottom: 2,
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  notificationContainer: {
    backgroundColor: '#f0f0f0',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15
  },
  bellIcon: {
    width: 20,
    height: 20,
    tintColor: '#333'
  },
  banner: {
    height: 200,
    borderRadius: 15,
    padding: 20,
    marginVertical: 15,
    justifyContent: 'center',
  },
  bannerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  bannerSubtitle: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 3,
  },
  bannerTextContainer: {
    marginVertical: 10,
  },
  bookRideButton: {
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignSelf: 'flex-start',
    marginTop: 10,
  },
  bookRideText: {
    color: '#333',
    fontWeight: 'bold',
    fontSize: 14,
  },
  selectRide: {
    fontSize: 18,
    fontWeight: '500',
    marginVertical: 15,
  },
  rideOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
    paddingHorizontal: 10,
  },
  option: {
    alignItems: 'center',
  },
  iconCircle: {
    backgroundColor: '#f0f0f0',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  optionImage: {
    width: 30,
    height: 30,
    tintColor: '#333'
  },
  optionText: {
    fontSize: 14,
  },
  recentRidesTitle: {
    fontSize: 18,
    fontWeight: '500',
    marginVertical: 15,
  },
  rideCard: {
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  rideCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  rideDate: {
    fontSize: 14,
    color: '#888',
  },
  ridePrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  rideLocation: {
    marginTop: 5,
  },
  pickDropLabel: {
    fontSize: 12,
    color: '#888',
    marginTop: 5,
  },
  locationText: {
    fontSize: 14,
    marginBottom: 3,
  },
});

export default CustomDashboard;