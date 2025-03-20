import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const InsightBox = ({ icon, title, value, onPress }) => (
  <TouchableOpacity style={styles.insightBox} onPress={onPress}>
    <Image source={icon} style={styles.insightIcon} />
    <Text style={styles.insightTitle}>{title}</Text>
    <Text style={styles.insightValue}>{value}</Text>
  </TouchableOpacity>
);

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <View style={styles.greetingContainer}>
          <Text style={styles.greeting}>
            Hello <Text style={styles.emoji}>👋</Text>
          </Text>
          <Text style={styles.name}>Christie Doe</Text>
        </View>
        <Image
          source={require('../assets/icons/avatar.png')}
          style={styles.avatar}
        />
      </View>

      {/* Insights Section */}
      <Text style={styles.sectionTitle}>YOUR INSIGHTS</Text>
      <View style={styles.insightsContainer}>
        <InsightBox
          icon={require('../assets/icons/Scan.png')}
          title="SCAN NEW"
          value="Scanned 483"
          onPress={() => navigation.navigate('Scan')}
        />
        <InsightBox
          icon={require('../assets/icons/Counterfeits.png')}
          title="COUNTERFEITS"
          value="Counterfeited 32"
        />
        <InsightBox
          icon={require('../assets/icons/Success.png')}
          title="SUCCESS"
          value="Checkouts 8"
        />
        <InsightBox
          icon={require('../assets/icons/Directory.png')}
          title="DIRECTORY"
          value="History 26"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 69,
    marginBottom: 27,
  },
  greetingContainer: {
    flexDirection: 'column',
  },
  greeting: {
    fontFamily: 'Helvetica',
    fontWeight: '700',
    fontSize: 22,
    lineHeight: 32,
    letterSpacing: 0.66,
    color: '#666',
  },
  emoji: {
    fontFamily: 'Helvetica',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.48,
  },
  name: {
    fontFamily: 'Helvetica',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 22,
    letterSpacing: 0.42,
    color: '#000',
  },
  avatar: {
    width: 47,
    height: 46,
    borderRadius: 12,
  },
  sectionTitle: {
    fontFamily: 'Helvetica',
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 26,
    letterSpacing: 0.54,
    marginLeft: 3,
    color: '#363636',
    marginTop: 57,
  },
  insightsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignSelf: 'center',
    height: 177,
  },
  insightBox: {
    width: 158,
    height: 176,
    backgroundColor: '#F8F8FB',
    padding: 15,
    borderRadius: 16,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  insightIcon: {
    width: 24,
    height: 24,
    marginBottom: 5,
  },
  insightTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  insightValue: {
    fontSize: 14,
    color: '#666',
  },
  exploreMore: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 20,
  },
});

export default HomeScreen;
