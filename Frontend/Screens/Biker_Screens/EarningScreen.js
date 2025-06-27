import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const EarningsScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <Text style={styles.title}>Your Earnings</Text>

      {/* Earnings Cards */}
      <View style={styles.cardGrid}>
        <View style={[styles.card, { backgroundColor: '#e6f0fb' }]}>
          <Text style={styles.cardLabel}>Today</Text>
          <Text style={styles.cardValue}>Rs. 1500</Text>
        </View>
        <View style={[styles.card, { backgroundColor: '#e5f5eb' }]}>
          <Text style={styles.cardLabel}>This Week</Text>
          <Text style={styles.cardValue}>Rs. 4500</Text>
        </View>
        <View style={[styles.card, { backgroundColor: '#fff6dc' }]}>
          <Text style={styles.cardLabel}>This Month</Text>
          <Text style={styles.cardValue}>Rs. 30000</Text>
        </View>
      </View>

      {/* Summary Stats */}
      <View style={styles.statsBox}>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>47</Text>
          <Text style={styles.statLabel}>Total Rides</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>4.8</Text>
          <Text style={styles.statLabel}>Your Rating</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>97%</Text>
          <Text style={styles.statLabel}>Acceptance</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  cardGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
    marginBottom: 30,
  },
  card: {
    width: '48%',
    paddingVertical: 20,
    paddingHorizontal: 16,
    borderRadius: 10,
    marginBottom: 12,
  },
  cardLabel: {
    fontSize: 14,
    color: '#555',
    marginBottom: 6,
  },
  cardValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  statsBox: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  statLabel: {
    color: '#666',
    fontSize: 13,
  },
});

export default EarningsScreen;
