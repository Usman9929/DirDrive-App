import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const NotificationsScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.screenTitle}>Notifications</Text>
        
        <ScrollView style={styles.scrollContainer}>
          {/* Notification 1 */}
          <View style={styles.notificationCard}>
            <View style={styles.notificationHeader}>
              <Icon name="check-circle" size={24} color="#4CAF50" style={styles.icon} />
              <Text style={styles.notificationTitle}>Ride Completed</Text>
            </View>
            <Text style={styles.notificationText}>Your ride to Bariga Market has been completed</Text>
            <Text style={styles.notificationTime}>2:30 PM</Text>
          </View>

          {/* Divider */}
          <View style={styles.divider} />

          {/* Notification 2 */}
          <View style={styles.notificationCard}>
            <View style={styles.notificationHeader}>
              <Icon name="local-offer" size={24} color="#FF9800" style={styles.icon} />
              <Text style={styles.notificationTitle}>Special Offer</Text>
            </View>
            <Text style={styles.notificationText}>Get 20% off your next ride - LIMITED TIME</Text>
            <Text style={styles.notificationTime}>10:00 AM</Text>
          </View>

          {/* Divider */}
          <View style={styles.divider} />

          {/* Notification 3 */}
          <View style={styles.notificationCard}>
            <View style={styles.notificationHeader}>
              <Icon name="alarm" size={24} color="#2196F3" style={styles.icon} />
              <Text style={styles.notificationTitle}>Ride Reminder</Text>
            </View>
            <Text style={styles.notificationText}>Your scheduled ride starts in 30 minutes</Text>
            <Text style={styles.notificationTime}>Yesterday</Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
    paddingHorizontal: 8,
  },
  scrollContainer: {
    flex: 1,
  },
  notificationCard: {
    paddingVertical: 16,
    paddingHorizontal: 8,
  },
  notificationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  icon: {
    marginRight: 12,
  },
  notificationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  notificationText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
    marginLeft: 36, // Match icon width + margin
  },
  notificationTime: {
    fontSize: 14,
    color: '#888',
    marginLeft: 36, // Match icon width + margin
  },
  divider: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 4,
    marginLeft: 36, // Match icon width + margin
  },
});

export default NotificationsScreen;