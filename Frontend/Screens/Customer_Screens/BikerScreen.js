import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image
} from 'react-native';


const BikerScreen = () => {
  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search bikers..."
          placeholderTextColor="#888"
        />
        <Text style={styles.nearbyText}>Nearby</Text>
      </View>

      <ScrollView style={styles.scrollContainer}>
        {/* Biker 1 */}
        <View style={styles.bikerCard}>
          <Image 
            source={require('../../assets/images/profile1.png')} 
            style={styles.profileImage}
          />
          <View style={styles.bikerInfo}>
            <View style={styles.nameContainer}>
              <Text style={styles.bikerName}>Ahmad Khan</Text>
              <TouchableOpacity style={styles.phoneButton}>
              </TouchableOpacity>
            </View>
            <View style={styles.ratingContainer}>
              <Text style={styles.rating}>4.8</Text>
              <Text style={styles.ridesCount}>• 1245 rides</Text>
            </View>
            <Text style={styles.bikeInfo}>Honda CB125F (XYZ-7890)</Text>
            <View style={styles.distanceContainer}>
              <Text style={styles.distance}>0.8 km away</Text>
              <Text style={styles.eta}>• ETA: 3 min</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.bookButton}>
            <Text style={styles.bookButtonText}>Book Now</Text>
          </TouchableOpacity>
        </View>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Biker 2 */}
        <View style={styles.bikerCard}>
          <Image 
            source={require('../../assets/images/profile2.png')} 
            style={styles.profileImage}
          />
          <View style={styles.bikerInfo}>
            <View style={styles.nameContainer}>
              <Text style={styles.bikerName}>Asad Khan</Text>
              <TouchableOpacity style={styles.phoneButton}>
              </TouchableOpacity>
            </View>
            <View style={styles.ratingContainer}>
              <Text style={styles.rating}>4.7</Text>
              <Text style={styles.ridesCount}>• 987 rides</Text>
            </View>
            <Text style={styles.bikeInfo}>Yamaha YBR125 (ABC-1234)</Text>
            <View style={styles.distanceContainer}>
              <Text style={styles.distance}>1.2 km away</Text>
              <Text style={styles.eta}>• ETA: 5 min</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.bookButton}>
            <Text style={styles.bookButtonText}>Book Now</Text>
          </TouchableOpacity>
        </View>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Biker 3 */}
        <View style={styles.bikerCard}>
          <Image 
            source={require('../../assets/images/profile3.png')} 
            style={styles.profileImage}
          />
          <View style={styles.bikerInfo}>
            <View style={styles.nameContainer}>
              <Text style={styles.bikerName}>Junaid Khan</Text>
            </View>
            <View style={styles.ratingContainer}>
              <Text style={styles.rating}>4.9</Text>
              <Text style={styles.ridesCount}>• 1567 rides</Text>
            </View>
            <Text style={styles.bikeInfo}>Bajaj Boxer 150 (DEF-5678)</Text>
            <View style={styles.distanceContainer}>
              <Text style={styles.distance}>0.5 km away</Text>
              <Text style={styles.eta}>• ETA: 2 min</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.bookButton}>
            <Text style={styles.bookButtonText}>Book Now</Text>
          </TouchableOpacity>
        </View>
        {/* Divider */}
        <View style={styles.divider} />

        {/* Biker 2 */}
        <View style={styles.bikerCard}>
          <Image 
            source={require('../../assets/images/profile2.png')} 
            style={styles.profileImage}
          />
          <View style={styles.bikerInfo}>
            <View style={styles.nameContainer}>
              <Text style={styles.bikerName}>Waqas Khan</Text>
              <TouchableOpacity style={styles.phoneButton}>
              </TouchableOpacity>
            </View>
            <View style={styles.ratingContainer}>
              <Text style={styles.rating}>4.7</Text>
              <Text style={styles.ridesCount}>• 456 rides</Text>
            </View>
            <Text style={styles.bikeInfo}>Honda 125 (ABC-1234)</Text>
            <View style={styles.distanceContainer}>
              <Text style={styles.distance}>1.2 km away</Text>
              <Text style={styles.eta}>• ETA: 5 min</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.bookButton}>
            <Text style={styles.bookButtonText}>Book Now</Text>
          </TouchableOpacity>
        </View>
        {/* Divider */}
        <View style={styles.divider} />

        {/* Biker 2 */}
        <View style={styles.bikerCard}>
          <Image 
            source={require('../../assets/images/profile.jpg')} 
            style={styles.profileImage}
          />
          <View style={styles.bikerInfo}>
            <View style={styles.nameContainer}>
              <Text style={styles.bikerName}>Anees Khan</Text>
              <TouchableOpacity style={styles.phoneButton}>
              </TouchableOpacity>
            </View>
            <View style={styles.ratingContainer}>
              <Text style={styles.rating}>4.7</Text>
              <Text style={styles.ridesCount}>• 187 rides</Text>
            </View>
            <Text style={styles.bikeInfo}>Honda 125 (2017-Model)</Text>
            <View style={styles.distanceContainer}>
              <Text style={styles.distance}>1.2 km away</Text>
              <Text style={styles.eta}>• ETA: 5 min</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.bookButton}>
            <Text style={styles.bookButtonText}>Book Now</Text>
          </TouchableOpacity>
        </View>
        {/* Divider */}
        <View style={styles.divider} />

        {/* Biker 2 */}
        <View style={styles.bikerCard}>
          <Image 
            source={require('../../assets/images/profile2.png')} 
            style={styles.profileImage}
          />
          <View style={styles.bikerInfo}>
            <View style={styles.nameContainer}>
              <Text style={styles.bikerName}>David Smith</Text>
              <TouchableOpacity style={styles.phoneButton}>
              </TouchableOpacity>
            </View>
            <View style={styles.ratingContainer}>
              <Text style={styles.rating}>4.7</Text>
              <Text style={styles.ridesCount}>• 987 rides</Text>
            </View>
            <Text style={styles.bikeInfo}>Yamaha YBR125 (ABC-1234)</Text>
            <View style={styles.distanceContainer}>
              <Text style={styles.distance}>1.2 km away</Text>
              <Text style={styles.eta}>• ETA: 5 min</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.bookButton}>
            <Text style={styles.bookButtonText}>Book Now</Text>
          </TouchableOpacity>
        </View>
         <View style={styles.bottomPadding} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchContainer: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  searchInput: {
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    marginBottom: 10,
  },
  nearbyText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  scrollContainer: {
    flex: 1,
    paddingHorizontal: 15,
    paddingBottom: 30
  },
  bikerCard: {
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  bikerInfo: {
    flex: 1,
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  bikerName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  phoneButton: {
    padding: 5,
  },
  bottomPadding: {
    height: 80, 
  },
  phoneIcon: {
    width: 20,
    height: 20,
    tintColor: '#6200EE',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  rating: {
    color: '#FFA500',
    fontWeight: 'bold',
    marginRight: 5,
  },
  ridesCount: {
    color: '#888',
    fontSize: 14,
  },
  bikeInfo: {
    color: '#555',
    fontSize: 14,
    marginBottom: 5,
  },
  distanceContainer: {
    flexDirection: 'row',
  },
  distance: {
    color: '#555',
    fontSize: 14,
  },
  eta: {
    color: '#555',
    fontSize: 14,
    marginLeft: 5,
  },
  bookButton: {
    backgroundColor: '#6200EE',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginLeft: 10,
  },
  bookButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  divider: {
    height: 1,
    backgroundColor: '#eee',
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 14,
    color: '#555',
  },
});

export default BikerScreen;