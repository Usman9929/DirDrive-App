import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  Alert,
  Image
} from 'react-native';

const options = [
  {
    title: 'Edit Profile',
    icon: require('../../assets/icons/profile.png'),
  },
  {
    title: 'Change Password',
    icon: require('../../assets/icons/password.png'),
  },
  {
    title: 'Ride Preferences',
    icon: require('../../assets/icons/setting.png'),
  },
  {
    title: 'My Documents',
    icon: require('../../assets/icons/documents.png'),
  },
  {
    title: 'Deactivate Account',
    icon: require('../../assets/icons/delete.png'),
    destructive: true,
  },
];

const AccountSettingsScreen = () => {
  const handlePress = (option) => {
    switch (option) {
      case 'Edit Profile':
        Alert.alert('Edit Profile', 'Navigate to edit profile screen');
        break;
      case 'Change Password':
        Alert.alert('Change Password', 'Navigate to change password screen');
        break;
      case 'Ride Preferences':
        Alert.alert('Ride Preferences', 'Navigate to ride preferences screen');
        break;
      case 'My Documents':
        Alert.alert('My Documents', 'Navigate to documents screen');
        break;
      case 'Deactivate Account':
        Alert.alert(
          'Confirm Deactivation',
          'Are you sure you want to deactivate your account?',
          [
            { text: 'Cancel', style: 'cancel' },
            { text: 'Deactivate', style: 'destructive' }
          ]
        );
        break;
      default:
        break;
    }
  };

  return (
    <ScrollView style={styles.container}>
      {options.map((opt) => (
        <Pressable
          key={opt.title}
          style={styles.optionBox}
          onPress={() => handlePress(opt.title)}
        >
          <Image source={opt.icon} style={styles.icon} />
          <Text style={[styles.optionText, opt.destructive && { color: '#d00' }]}>
            {opt.title}
          </Text>
        </Pressable>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  optionBox: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 15,
    resizeMode: 'contain',
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
});

export default AccountSettingsScreen;
