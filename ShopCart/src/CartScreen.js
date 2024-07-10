import React, { useContext } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import CartContext from './CartContext';
import { imagePaths } from './imagePaths';
import { useNavigation } from '@react-navigation/native';

const CartScreen = () => {
  const navigation = useNavigation();
  const { cartItems, totalPrice, removeFromCart } = useContext(CartContext);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.toggleDrawer()}>
            <Image source={require('../assets/Menu.png')} />
          </TouchableOpacity>
          <Image source={require('../assets/Logo.png')} style={styles.addIcon} />
          <Image source={require('../assets/Search.png')} style={styles.searchIcon} />
        </View>
        <View>
          <Image source={require('../assets/checkout.png')} style={styles.checkout} />
        </View>
        {cartItems.map(item => (
          <View key={item.id} style={[styles.item]}>
            <Image source={imagePaths[item.imageKey]} style={styles.image} />
            <View style={[styles.itemDetails]}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.description}>{item.description}</Text>
              <Text style={styles.price}>{item.price}</Text>
            </View>
            <TouchableOpacity onPress={() => removeFromCart(item.id)} style={styles.removeButton}>
              <Image source={require('../assets/remove_circle.png')} style={styles.addIcon} />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <View style={styles.footer}>
        <Text style={styles.totalText}>EST. TOTAL</Text>
        <Text style={styles.totalPrice}>${totalPrice.toFixed(2)}</Text>
      </View>
      <TouchableOpacity style={styles.checkoutButton}>
        <Image source={require('../assets/shoppingBag.png')} style={styles.checkoutIcon} />
        <Text style={styles.checkoutText}>CHECKOUT</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30,
  },
  item: {
    flexDirection: 'row',
    marginBottom: 16,
    marginTop: 20,
    paddingBottom: 8,
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  image: {
    width: 100,
    height: 150,
    marginRight: 16,
  },
  itemDetails: {
    flex: 1,
    },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
  price: {
    fontSize: 16,
    color: '#000',
  },
  removeButton: {
    marginLeft: 16,
    marginTop: 100,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    margin: 10,
    paddingBottom:0,
    
  },
  searchIcon: {
    marginLeft: 70,
  },
  checkout: {
    height: 70,
    width: 170, 
    marginLeft: 100,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 20,
    backgroundColor: '#fff',
  },
  totalText: {
    color: '#A9A9A9',
    fontSize: 16,
  },
  totalPrice: {
    color: 'red',
    fontSize: 24,
  },
  checkoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: '#0a0a0a',
    padding: 10,
  },
  checkoutIcon: {
    width: 24,
    height: 24,
    marginRight: 20,
    tintColor: '#fff',
  },
  checkoutText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default CartScreen;
