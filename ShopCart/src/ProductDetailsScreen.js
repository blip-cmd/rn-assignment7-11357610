import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet, StatusBar, Pressable, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {CartContext} from './CartContext';

const ProductDetailsScreen = ({ route, navigation }) => {
  const { item } = route.params; // Data Passing Successful
  // const { addToCart } = useContext(CartContext);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.toggleDrawer()}>
            <Image source={require('../assets/Menu.png')} />
          </TouchableOpacity>
          <Image source={require('../assets/Logo.png')} style={styles.logo} />
          <View style={styles.icons}>
            <TouchableOpacity style={styles.button}>
              <Image source={require('../assets/Search.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Shopping Cart')}>
              <Image source={require('../assets/shoppingBag.png')} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.product}>
          <View style={styles.productImage}>
            <Image source={{ uri: item.image }} style={styles.image} resizeMode="contain" />
          </View>
          <View style={styles.productDetails}>
            <View style={styles.productTitle}>
              <Text style={styles.title}>{item.title}</Text>
              <Image source={require("../assets/Export.png")} style={styles.icon} resizeMode="contain" />
            </View>
            <Text style={styles.productPrice}>${item.price}</Text>
            <Text style={styles.productDescription}>{item.category}</Text>
            <Text style={styles.materialTitle}>MATERIALS</Text>
            <Text style={styles.productDescription}>{item.description}</Text>
            <View style={styles.materialIcons}>
              <View style={styles.instruction}>
                <Image source={require("../assets/Do Not Bleach.png")} style={styles.materialIcon} />
                <Text>Do not use bleach</Text>
              </View>
              <View style={styles.instruction}>
                <Image source={require("../assets/Do Not Tumble Dry.png")} style={styles.materialIcon} />
                <Text>Do not tumble dry</Text>
              </View>
              <View style={styles.instruction}>
                <Image source={require("../assets/Do Not Wash.png")} style={styles.materialIcon} />
                <Text>Dry clean with tetrachloroethylene</Text>
              </View>
              <View style={styles.instruction}>
                <Image source={require("../assets/Iron Low Temperature.png")} style={styles.materialIcon} />
                <Text>Iron at a maximum of 110°C/230°F</Text>
              </View>
              <View style={styles.shippingInfo}>
                <Image source={require("../assets/Shipping.png")} style={styles.materialIcon} />
                <Text style={styles.shippingInfoText}>
                  Free Flat Rate Shipping Estimated to be delivered on 09/11/2021 - 12/11/2021.
                </Text>
                <Image source={require("../assets/Up.png")} style={styles.icon} resizeMode="contain" />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.footer}>
          <Pressable style={styles.footerButton} onPress={() => addToCart(item)}>
            <Image source={require("../assets/Plus.png")} style={styles.footerIcon} resizeMode="contain" />
            <Text style={styles.footerText}>ADD TO BASKET</Text>
            <Image source={require("../assets/Heart.png")} style={styles.footerIcon} resizeMode="contain" />
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    paddingTop: 30,
  },
  button: {
    padding: 8,
  },
  logo: {
    width: 120,
    height: 40,
    resizeMode: 'contain',
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  product: {
    flex: 1,
    paddingHorizontal: 20,
  },
  productImage: {
    width: '100%',
  },
  image: {
    width: '100%',
    height: 380,
    marginBottom: 20,
  },
  productDetails: {
    paddingHorizontal: 10,
  },
  productTitle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  icon: {
    marginLeft: 25,
  },
  title: {
    fontSize: 18,
    textTransform: 'uppercase',
  },
  materialTitle: {
    fontSize: 17,
    textTransform: 'uppercase',
    marginTop: 10,
  },
  productPrice: {
    fontSize: 25,
    color: '#dd8661',
    marginBottom: 15,
    marginTop: 5,
  },
  instruction: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
  },
  productDescription: {
    lineHeight: 21,
    color: '#666',
    fontSize: 16,
  },
  materialIcon: {
    height: 25,
    width: 25,
    marginRight: 12,
  },
  shippingInfo: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 30,
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#aaa',
    paddingTop: 30,
    marginBottom: 100,
  },
  shippingInfoText: {
    flex: 1,
  },
  footer: {
    backgroundColor: 'black',
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  footerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    color: 'white',
  },
  footerText: {
    color: '#fff',
    fontSize: 18,
    marginHorizontal: 8,
    textTransform: 'uppercase',
    marginRight: 75,
    marginLeft: 75,
  },
  footerIcon: {
    width: 20,
    height: 20,
    color: 'white',
    flexDirection: 'row',
    tintColor: '#fff'
  },
});

export default ProductDetailsScreen;
