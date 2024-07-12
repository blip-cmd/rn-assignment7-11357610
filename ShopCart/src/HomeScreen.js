import React, { useContext, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, ScrollView } from "react-native";
import CartContext from './CartContext';

const HomeScreen = ({ navigation }) => {
  const { addToCart, data, fetchData } = useContext(CartContext);

  useEffect(() => {
    fetchData();
  }, []);

  const renderItem = (item) => {
    return (
      <TouchableOpacity 
  key={item.id} 
  style={styles.card} 
  onPress={() => navigation.navigate('Product Details', {item} )}
>       
 <View style={styles.imageContainer}> 
          <Image source={{ uri: item.image }} style={styles.image} />
          <TouchableOpacity style={styles.addbutton} onPress={() => addToCart(item)}>
            <Image source={require('../assets/add_circle.png')} />
          </TouchableOpacity>
        </View>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.description}>{item.category}</Text>
        <Text style={styles.price}>${item.price}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView>
      <ScrollView style={styles.scrollViewContainer}>
        <View style={styles.container}>
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
          <View style={styles.section}>
            <Text style={styles.subtitle}>OUR STORY</Text>
            <View style={styles.icons}>
              <TouchableOpacity style={[styles.button, 
                {
                  backgroundColor: '#F9F3F3',
                  width: 34,
                  height: 34,
                  borderRadius: 25,
                  marginRight: 8,
                }]} onPress={() => navigation.navigate('ListView')}>
                <Image source={require('../assets/Listview.png')} />
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, 
                {
                  backgroundColor: '#F9F3F3',
                  width: 34,
                  height: 34,
                  borderRadius: 100,
                }]} onPress={() => navigation.navigate('FilterView')}>
                <Image source={require('../assets/Filter.png')} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.grid}>
            {data.map((item) => renderItem(item))}
          </View>
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
  scrollViewContainer: {
    flexGrow: 1,
    padding: 3,
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
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 16,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    marginBottom: 16,
  },
  imageContainer: {
    position: 'relative',
  },
  addbutton: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    padding: 8,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'slim',
    marginTop: 8,
  },
  description: {
    fontSize: 14,
    color: '#888',
  },
  price: {
    fontSize: 20,
    fontWeight: 'slim',
    color: '#DD8560',
    marginTop: 4,
  },
});

export default HomeScreen;
