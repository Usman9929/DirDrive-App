import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, ImageBackground, ScrollView, Modal } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SignupScreen = ({ navigation }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    createAt: new Date()
  });
  const [errors, setErrors] = useState({
    username: false,
    email: false,
    password: false,
    confirmPassword: false,
    phone: false
  });
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value
    });
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: false
      });
    }
  };

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      handleChange('createAt', selectedDate);
    }
  };

  const validateForm = () => {
    const newErrors = {
      username: !formData.username.trim(),
      email: !/^\S+@\S+\.\S+$/.test(formData.email),
      password: formData.password.length < 6,
      confirmPassword: formData.password !== formData.confirmPassword,
      phone: !/^\d{10,15}$/.test(formData.phone)
    };

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error);
  };

  const handleSignup = async () => {
    if (!validateForm()) {
      return;
    }

    try {
      const response = await fetch('http://192.168.43.98:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setShowSuccessDialog(true);
      } else {
        const errorData = await response.json();
        Alert.alert('Error', errorData.message || 'Failed to create account');
      }
    } catch (error) {
      Alert.alert('Error', 'Network error. Please try again.');
    }
  };

  return (
    <ImageBackground
      source={require('../../assets/images/customer-background-image.jpg')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <Text style={styles.header}>Signup</Text>
          <Text style={styles.subtitle}>Enter the Following Detail To{"\n"}Create The Account.</Text>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Username</Text>
            <TextInput
              style={[styles.input, errors.username && { borderColor: 'red' }]}
              placeholder="Enter username"
              value={formData.username}
              onChangeText={(text) => handleChange('username', text)}
            />
            {errors.username && <Text style={{ color: 'red', fontSize: 12 }}>Username is required</Text>}
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={[styles.input, errors.email && { borderColor: 'red' }]}
              placeholder="Enter email"
              value={formData.email}
              onChangeText={(text) => handleChange('email', text)}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            {errors.email && <Text style={{ color: 'red', fontSize: 12 }}>Enter a valid email</Text>}
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Password</Text>
            <View style={[styles.input, errors.password && { borderColor: 'red' }, { flexDirection: 'row', alignItems: 'center' }]}>
              <TextInput
                style={{ flex: 1 }}
                placeholder="Enter password"
                value={formData.password}
                onChangeText={(text) => handleChange('password', text)}
                secureTextEntry={!showPassword}
              />
              <Icon 
                name={showPassword ? 'visibility-off' : 'visibility'} 
                size={20} 
                color="#777" 
                onPress={() => setShowPassword(!showPassword)} 
              />
            </View>
            {errors.password && <Text style={{ color: 'red', fontSize: 12 }}>Password must be at least 6 characters</Text>}
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Confirm Password</Text>
            <View style={[styles.input, errors.confirmPassword && { borderColor: 'red' }, { flexDirection: 'row', alignItems: 'center' }]}>
              <TextInput
                style={{ flex: 1 }}
                placeholder="Confirm password"
                value={formData.confirmPassword}
                onChangeText={(text) => handleChange('confirmPassword', text)}
                secureTextEntry={!showConfirmPassword}
              />
              <Icon 
                name={showConfirmPassword ? 'visibility-off' : 'visibility'} 
                size={20} 
                color="#777" 
                onPress={() => setShowConfirmPassword(!showConfirmPassword)} 
              />
            </View>
            {errors.confirmPassword && <Text style={{ color: 'red', fontSize: 12 }}>Passwords don't match</Text>}
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Phone Number</Text>
            <TextInput
              style={[styles.input, errors.phone && { borderColor: 'red' }]}
              placeholder="Enter phone number"
              value={formData.phone}
              onChangeText={(text) => handleChange('phone', text)}
              keyboardType="phone-pad"
            />
            {errors.phone && <Text style={{ color: 'red', fontSize: 12 }}>Enter a valid phone number</Text>}
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Create at</Text>
            <Pressable
              style={styles.dateInput}
              onPress={() => setShowDatePicker(true)}
            >
              <Text style={styles.dateText}>
                {formData.createAt.toLocaleDateString()}
              </Text>
            </Pressable>
            {showDatePicker && (
              <DateTimePicker
                value={formData.createAt}
                mode="date"
                display="default"
                onChange={handleDateChange}
              />
            )}
          </View>

          <Pressable
            style={({ pressed }) => [
              styles.signupButton,
              pressed && styles.buttonPressed
            ]}
            onPress={handleSignup}
          >
            <Text style={styles.signupButtonText}>Signup</Text>
          </Pressable>
        </View>
      </ScrollView>

      {/* Success Dialog */}
      <Modal
        visible={showSuccessDialog}
        transparent={true}
        animationType="fade"
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Success!</Text>
            <Text style={styles.modalText}>Your account has been created successfully.</Text>
            <Pressable
              style={styles.modalButton}
              onPress={() => {
                setShowSuccessDialog(false);
                navigation.navigate('Login');
              }}
            >
              <Text style={styles.modalButtonText}>Go to Login</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2e665e',
    marginBottom: 15,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 30,
    textAlign: 'center',
    lineHeight: 24,
  },
  formGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 15,
    fontSize: 16,
  },
  dateInput: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 15,
    justifyContent: 'center',
  },
  dateText: {
    fontSize: 16,
    color: '#333',
  },
  signupButton: {
    backgroundColor: '#2e665e',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  buttonPressed: {
    opacity: 0.8,
    transform: [{ scale: 0.98 }],
  },
  signupButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  // Modal styles
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2e665e',
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: '#2e665e',
    padding: 12,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SignupScreen;