import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';

const SupportCenter = () => {
  const [issueDescription, setIssueDescription] = React.useState('');

  const commonIssues = [
    'Payment Problem',
    'Ride Cancellation',
    'Driver Behavior',
    'Safety Concern',
    'App Technical Issue',
    'Other issue'
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Support Center</Text>
        <Text style={styles.headerSubtitle}>We're here to help you</Text>
      </View>

      {/* Common Issues */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Common Issues</Text>
        <View style={styles.issuesContainer}>
          {commonIssues.map((issue, index) => (
            <TouchableOpacity key={index} style={styles.issueButton}>
              <Text style={styles.issueText}>{issue}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Describe Your Issue */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Describe Your Issue</Text>
        <Text style={styles.descriptionPrompt}>Please describe your issue in detail...</Text>
        <TextInput
          style={styles.textInput}
          multiline
          numberOfLines={5}
          placeholder="Type your issue here..."
          value={issueDescription}
          onChangeText={setIssueDescription}
        />
      </View>

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Submit Request</Text>
      </TouchableOpacity>

      {/* Immediate Help Section */}
      <View style={styles.helpSection}>
        <Text style={styles.helpTitle}>Need Immediate Help?</Text>
        <Text style={styles.helpText}>Our support team is available 24/7</Text>
        <TouchableOpacity style={styles.callButton}>
          <Text style={styles.callButtonText}>Call Support</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 20,
  },
  header: {
    marginBottom: 30,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#7f8c8d',
    marginTop: 5,
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 15,
  },
  issuesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  issueButton: {
    backgroundColor: '#ecf0f1',
    padding: 15,
    borderRadius: 10,
    width: '48%',
    marginBottom: 10,
    alignItems: 'center',
  },
  issueText: {
    color: '#34495e',
    fontWeight: '500',
  },
  descriptionPrompt: {
    color: '#7f8c8d',
    marginBottom: 10,
  },
  textInput: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    textAlignVertical: 'top',
    minHeight: 120,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  submitButton: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 20,
  },
  submitButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  helpSection: {
    backgroundColor: '#e8f4fc',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  helpTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2980b9',
    marginBottom: 5,
  },
  helpText: {
    color: '#7f8c8d',
    marginBottom: 15,
    textAlign: 'center',
  },
  callButton: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
  },
  callButtonText: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default SupportCenter;