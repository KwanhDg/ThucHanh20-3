import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SuccessScreen = ({ navigation, route }) => {

  return (
    <View style={styles.container}>
      {/* Nút Back */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="chevron-back" size={24} color="#5A6CF3" />
      </TouchableOpacity>

      <Image
        source={require('../assets/icons/payment_success.png')}
        style={styles.successImage}
      />

      {/* Tiêu đề */}
      <Text style={styles.title}>Payment Success, Yayy!</Text>

      {/* Thông báo */}
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>
          we will send order details and invoice in your contact no. and registered email
        </Text>
      </View>

      {/* Liên kết Check Details */}
      <TouchableOpacity style={styles.checkDetailsContainer}>
        <Text style={styles.checkDetailsText}>Check Details</Text>
        <Ionicons name="chevron-forward" size={16} color="#5A6CF3" style={styles.checkDetailsIcon} />
      </TouchableOpacity>

      {/* Nút Download Invoice */}
      <TouchableOpacity style={styles.downloadButton} onPress={() => navigation.navigate('Tabs', { screen: 'Home' })}>
        <Text style={styles.downloadButtonText}>Download Invoice</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 60,
    left: 20,
    width: 40,
    height: 40,
    backgroundColor: '#FFF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    zIndex: 2,
  },
  successImage: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontFamily: 'Helvetica',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  infoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  infoText: {
    fontFamily: 'Helvetica',
    fontSize: 14,
    color: '#000',
    textAlign: 'center',
    paddingHorizontal: 30,
  },

  checkDetailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  checkDetailsText: {
    fontFamily: 'Helvetica',
    fontSize: 14,
    color: '#5A6CF3',
    marginRight: 5,
    fontWeight: 'bold',
  },
  checkDetailsIcon: {
    marginTop: 2, 
  },
  downloadButton: {
    backgroundColor: '#5A6CF3',
    paddingVertical: 20,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    width: '90%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  downloadButtonText: {
    fontFamily: 'Helvetica',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },
});

export default SuccessScreen;