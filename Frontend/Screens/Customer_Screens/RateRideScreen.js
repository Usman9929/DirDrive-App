import React, { useState } from 'react';
import {
  View, Text, TextInput, StyleSheet,
  Pressable, ScrollView, Image, Alert
} from 'react-native';
import axios from 'axios';

const RateRideScreen = () => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);

  const tags = ['Safe Driving', 'Punctual', 'Friendly'];
  const API_URL = 'http://192.168.43.98:3000/bikers/1'; // example

  const toggleTag = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const submitRating = async () => {
    if (rating === 0) {
      Alert.alert('Required', 'Please select a star rating.');
      return;
    }

    if (selectedTags.length === 0) {
      Alert.alert('Required', 'Please select at least one tag under "What was great?"');
      return;
    }

    if (!feedback.trim()) {
      Alert.alert('Required', 'Please provide additional feedback.');
      return;
    }

    const newRating = {
      stars: rating,
      tags: selectedTags,
      comment: feedback,
      date: new Date().toISOString()
    };

    try {
      // Get current biker info
      const res = await axios.get(API_URL);
      const updatedRatings = [...(res.data.ratings || []), newRating];

      // Update biker with new rating
      await axios.put(API_URL, {
        ...res.data,
        ratings: updatedRatings
      });

      Alert.alert('Thank you!', 'Your rating has been submitted.');
      setRating(0);
      setSelectedTags([]);
      setFeedback('');
    } catch (err) {
      console.error(err);
      Alert.alert('Error', 'Failed to submit rating.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Rate Your Ride</Text>
      <Text style={styles.subtitle}>How was your experience?</Text>

      <View style={styles.card}>
        <Text style={styles.date}>May 15, 2025 • 10:30 AM</Text>
        <Text style={styles.point}>📍 Main Bazaar, Timergara</Text>
        <Text style={styles.point}>📍 DHQ Hospital</Text>
        <View style={styles.divider} />
        <Text>Driver: Kashif Khan</Text>
        <Text>Vehicle: LEE-1234 (Bike)</Text>
      </View>

      <Text style={styles.sectionTitle}>Overall Rating</Text>
      <View style={styles.starsRow}>
        {[1, 2, 3, 4, 5].map((i) => (
          <Pressable key={i} onPress={() => setRating(i)}>
            <Image
              source={
                i <= rating
                  ? require('../../assets/icons/star_filled.png')
                  : require('../../assets/icons/star_outline.png')
              }
              style={styles.starImage}
            />
          </Pressable>
        ))}
      </View>
      <View style={styles.starLabels}>
        <Text style={{ color: '#666' }}>Poor</Text>
        <Text style={{ color: '#666' }}>Excellent</Text>
      </View>

      <Text style={styles.sectionTitle}>What was great?</Text>
      <View style={styles.tagContainer}>
        {tags.map((tag) => (
          <Pressable
            key={tag}
            style={[
              styles.tag,
              selectedTags.includes(tag) && styles.tagSelected
            ]}
            onPress={() => toggleTag(tag)}
          >
            <Text
              style={[
                styles.tagText,
                selectedTags.includes(tag) && styles.tagTextSelected
              ]}
            >
              {tag}
            </Text>
          </Pressable>
        ))}
      </View>

      <Text style={styles.sectionTitle}>Additional Feedback</Text>
      <TextInput
        style={styles.textArea}
        placeholder="Share details about your experience..."
        value={feedback}
        onChangeText={setFeedback}
        multiline
        numberOfLines={4}
      />

      <Pressable style={styles.submitButton} onPress={submitRating}>
        <Text style={styles.submitText}>Submit Rating</Text>
      </Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#fff', flexGrow: 1 },
  title: { fontSize: 22, fontWeight: 'bold', textAlign: 'center' },
  subtitle: { textAlign: 'center', color: '#777', marginBottom: 20 },

  card: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    elevation: 2,
  },
  date: { color: '#555', marginBottom: 8 },
  point: { fontSize: 14, marginBottom: 5 },
  divider: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginVertical: 10,
  },

  sectionTitle: { fontSize: 16, fontWeight: '600', marginBottom: 10 },

  starsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 5,
  },
  starImage: {
    width: 32,
    height: 32,
    marginHorizontal: 3,
  },
  starLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    marginBottom: 20,
  },

  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 20,
  },
  tag: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 14,
    marginRight: 10,
    marginBottom: 10,
  },
  tagSelected: {
    backgroundColor: '#e0e8ff',
    borderColor: '#3c5fd6',
  },
  tagText: {
    color: '#333',
    fontWeight: '500',
  },
  tagTextSelected: {
    color: '#3c5fd6',
    fontWeight: 'bold',
  },

  textArea: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    textAlignVertical: 'top',
    marginBottom: 20,
    height: 100,
  },

  submitButton: {
    backgroundColor: '#3c5fd6',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  submitText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default RateRideScreen;
