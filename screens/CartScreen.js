import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CartScreen = ({ navigation }) => {
  // Danh sách sản phẩm mẫu
  const [cartItems, setCartItems] = useState([
    { id: '1', name: "Lauren's Orange Juice", price: 149, quantity: 2, image: require('../assets/icons/orange_juice.png') },
    { id: '2', name: "Baskin's Skimmed Milk", price: 129, quantity: 2, image: require('../assets/icons/skimmed_milk.png') },
    { id: '3', name: "Marley's Aloe Vera Lotion", price: 1249, quantity: 2, image: require('../assets/icons/aloe_vera_lotion.png') },
  ]);

  // Tính tổng tiền
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  // Hàm tăng/giảm số lượng sản phẩm
  const updateQuantity = (id, change) => {
    setCartItems(
      cartItems.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(0, item.quantity + change) }
          : item
      )
    );
  };

  // Render từng sản phẩm
  const renderCartItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Image source={item.image} style={styles.itemImage} />
      <View style={styles.itemInfo}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>₹{item.price}</Text>
      </View>
      <View style={styles.quantityContainer}>
        <TouchableOpacity onPress={() => updateQuantity(item.id, -1)}>
          <Text style={styles.quantityButton}>−</Text>
        </TouchableOpacity>
        <Text style={styles.quantity}>{item.quantity}</Text>
        <TouchableOpacity onPress={() => updateQuantity(item.id, 1)}>
          <Text style={styles.quantityButton}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Nút Back */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="chevron-back" size={24} color="#F08F5F" />
      </TouchableOpacity>

      {/* Tiêu đề */}
      <Text style={styles.title}>Your Cart 👍</Text>

      {/* Danh sách sản phẩm */}
      <FlatList
        data={cartItems}
        renderItem={renderCartItem}
        keyExtractor={item => item.id}
        style={styles.cartList}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.cartListContent}
      />

      {/* Tổng tiền */}
      <View style={styles.totalContainer}>
        <Text style={styles.totalLabel}>Total</Text>
        <Text style={styles.totalPrice}>₹{totalPrice.toLocaleString()}</Text>
      </View>

      {/* Nút Proceed to Checkout */}
      <TouchableOpacity
        style={styles.checkoutButton}
        onPress={() => navigation.navigate('Payment', { totalPrice })}
      >
        <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingBottom: 20,
    backgroundColor: '#f5f5f5',
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
  },
  title: {
    fontFamily: 'Helvetica',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#363636',
    marginBottom: 30,
    marginTop: 70,
    paddingHorizontal: 20,
  },
  cartList: {
    flex: 1,
  },
  cartListContent: {
    paddingBottom: 20,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    width: 'auto',
  },
  itemImage: {
    width: 50,
    height: 50,
    marginRight: 15,
  },
  itemInfo: {
    flex: 1,
  },
  itemName: {
    fontFamily: 'Helvetica',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  itemPrice: {
    fontFamily: 'Helvetica',
    fontSize: 14,
    color: '#F08F5F',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    fontSize: 20,
    color: '#F08F5F',
    paddingHorizontal: 10,
  },
  quantity: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    paddingHorizontal: 10,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  totalLabel: {
    fontFamily: 'Helvetica',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#363636',
  },
  totalPrice: {
    fontFamily: 'Helvetica',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#F08F5F',
  },
  checkoutButton: {
    backgroundColor: '#F08F5F',
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 20,
    marginHorizontal: 20,
  },
  checkoutButtonText: {
    fontFamily: 'Helvetica',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },
});

export default CartScreen;