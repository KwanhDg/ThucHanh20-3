import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const PaymentScreen = ({ navigation, route }) => {
  // Lấy tổng tiền từ CartScreen
  const { totalPrice } = route.params;

  // State để lưu giá trị của các TextInput
  const [cardNumber, setCardNumber] = useState('5261 4141 0151 8472');
  const [cardholderName, setCardholderName] = useState('Christie Doe');
  const [expiryDate, setExpiryDate] = useState('06 / 2024');
  const [cvv, setCvv] = useState('915');

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoidingContainer}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {/* Nút Back */}
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Ionicons name="chevron-back" size={24} color="#F08F5F" />
          </TouchableOpacity>

          {/* Ô chứa tiêu đề và tổng tiền */}
          <View style={styles.headerContainer}>
            <View style={styles.header}>
              <View style={styles.titleContainer}>
                <Text style={styles.title}>Checkout </Text>
                <Ionicons name="card-outline" size={24} color="#363636" style={styles.cardIcon} />
              </View>
              <View style={styles.priceContainer}>
                <Text style={styles.totalPrice}>₹{totalPrice.toLocaleString()}</Text>
                <Text style={styles.gstText}>Including GST (18%)</Text>
              </View>
            </View>
          </View>

          {/* Phương thức thanh toán */}
          <View style={styles.paymentMethods}>
            <TouchableOpacity style={[styles.paymentButton, styles.selectedPayment]}>
              <Ionicons name="card-outline" size={20} color="#FFF" style={styles.paymentIcon} />
              <Text style={[styles.paymentText, styles.selectedText]}>Credit card</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.paymentButton}>
              <Ionicons name="logo-apple" size={20} color="#000" style={styles.paymentIcon} />
              <Text style={styles.paymentText}>Apple Pay</Text>
            </TouchableOpacity>
          </View>

          {/* Thông tin thẻ */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Card number</Text>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                value={cardNumber}
                onChangeText={setCardNumber}
                editable={true}
                keyboardType="numeric"
              />
              <View style={styles.cardIcons}>
                <View style={styles.logoContainer}>
                  <Image
                    source={require('../assets/icons/master_card_logo.png')}
                    style={styles.cardImage}
                    resizeMode="contain"
                  />
                </View>
                <Image
                  source={require('../assets/icons/card_icon.png')}
                  style={[styles.cardImage, styles.scanImage]}
                  resizeMode="contain"
                />
              </View>
            </View>

            <Text style={styles.inputLabel}>Cardholder name</Text>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                value={cardholderName}
                onChangeText={setCardholderName}
                editable={true}
              />
            </View>

            <View style={styles.row}>
              <View style={styles.halfInput}>
                <Text style={styles.inputLabel}>Expiry date</Text>
                <View style={styles.inputWrapper}>
                  <TextInput
                    style={styles.input}
                    value={expiryDate}
                    onChangeText={setExpiryDate}
                    editable={true}
                    keyboardType="numeric"
                  />
                </View>
              </View>
              <View style={styles.halfInput}>
                <Text style={styles.inputLabel}>CVV / CVC</Text>
                <View style={styles.inputWrapper}>
                  <TextInput
                    style={styles.input}
                    value={cvv}
                    onChangeText={setCvv}
                    editable={true}
                    keyboardType="numeric"
                  />
                  <Ionicons name="help-circle-outline" size={20} color="#F08F5F" />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      {/* Container cho infoText và payButton */}
      <View style={styles.footerContainer}>
        <Text style={styles.infoText}>
          We will send you an order details to your email after the successful payment
        </Text>
        <TouchableOpacity
          style={styles.payButton}
          onPress={() => navigation.navigate('Success', { totalPrice })}
        >
          <Ionicons name="lock-closed" size={20} color="#FFF" style={styles.lockIcon} />
          <Text style={styles.payButtonText}>Pay for the order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  keyboardAvoidingContainer: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 120,
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
  headerContainer: {
    backgroundColor: '#FFF',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginTop: 120,
    marginBottom: 60,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardIcon: {
    marginRight: 10,
  },
  title: {
    fontFamily: 'Helvetica',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#363636',
  },
  priceContainer: {
    alignItems: 'flex-end',
  },
  totalPrice: {
    fontFamily: 'Helvetica',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#25D482',
  },
  gstText: {
    fontFamily: 'Helvetica',
    fontSize: 12,
    color: '#666',
  },
  paymentMethods: {
    position: 'absolute',
    top: 216,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f5f5f5',
    borderRadius: 16,
    zIndex: 1,
  },
  paymentButton: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    paddingVertical: 20,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  selectedPayment: {
    backgroundColor: '#25D482',
  },
  paymentIcon: {
    marginRight: 5,
  },
  paymentText: {
    fontFamily: 'Helvetica',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  selectedText: {
    color: '#FFF',
  },
  inputContainer: {
    paddingHorizontal: 20,
    marginTop: 50,
  },
  inputLabel: {
    fontFamily: 'Helvetica',
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 15,
    minHeight: 50,
  },
  input: {
    flex: 1,
    fontFamily: 'Helvetica',
    fontSize: 16,
    color: '#000',
    padding: 15,
    height: 50,
  },
  cardIcons: {
    flexDirection: 'row',
    paddingRight: 15,
    alignItems: 'center',
  },
  logoContainer: {
    backgroundColor: '#FFF',
    borderRadius: 15,
    padding: 3,
  },
  cardImage: {
    width: 30,
    height: 30,
  },
  scanImage: {
    marginLeft: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfInput: {
    flex: 1,
    marginHorizontal: 5,
  },
  footerContainer: {
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 10,
  },
  infoText: {
    fontFamily: 'Helvetica',
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    marginBottom: 10,
  },
  payButton: {
    flexDirection: 'row',
    backgroundColor: '#25D482',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  lockIcon: {
    marginRight: 10,
  },
  payButtonText: {
    fontFamily: 'Helvetica',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },
});

export default PaymentScreen;