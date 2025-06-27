import React from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';

const EarningsScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.headerRow}>
        <Text style={styles.title}>Your Earnings</Text>
        <Pressable style={styles.withdrawBtn}>
          <Text style={styles.withdrawText}>Withdraw</Text>
        </Pressable>
      </View>

      {/* Earnings Boxes */}
      <View style={styles.cardRow}>
        <View style={[styles.card, { backgroundColor: '#e6f0fb' }]}>
          <Text style={styles.cardLabel}>Today</Text>
          <Text style={styles.cardValue}>Rs.1500</Text>
        </View>
        <View style={[styles.card, { backgroundColor: '#e5f5eb' }]}>
          <Text style={styles.cardLabel}>This Week</Text>
          <Text style={styles.cardValue}>Rs.4500</Text>
        </View>
      </View>
      <View style={[styles.card, { backgroundColor: '#fff6dc' }]}>
        <Text style={styles.cardLabel}>This Month</Text>
        <Text style={styles.cardValue}>Rs.30000</Text>
      </View>

      {/* Stats */}
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
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  withdrawBtn: {
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  withdrawText: {
    color: '#007bff',
    fontWeight: 'bold',
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  card: {
    flex: 1,
    padding: 16,
    borderRadius: 10,
    marginRight: 10,
  },
  cardLabel: {
    color: '#333',
    marginBottom: 5,
  },
  cardValue: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statsBox: {
    marginTop: 20,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
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
