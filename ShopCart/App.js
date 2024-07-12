import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './src/HomeScreen';
import CartScreen from './src/CartScreen';
import ProductDetailsScreen from './src/ProductDetailsScreen';
import { CartProvider } from './src/CartContext';
import { GalleryProvider } from './src/GalleryContext';
import CustomDrawer from './src/CustomDrawer';
import 'react-native-gesture-handler';
import LocationsScreen from './src/LocationsScreen';
import BlogScreen from './src/BlogScreen';
import JeweleryScreen from './src/JeweleryScreen';
import ElectronicScreen from './src/ElectronicScreen';
import ClothingScreen from './src/ClothingScreen';


const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen name="Store" component={HomeScreen} />
      <Drawer.Screen name="Shopping Cart" component={CartScreen} /> 
      <Drawer.Screen name="Product Details" component={ProductDetailsScreen} /> 
      <Drawer.Screen name="Locations" component={LocationsScreen} />
      <Drawer.Screen name="Blog" component={BlogScreen} />
      <Drawer.Screen name="Jewelery" component={JeweleryScreen} />
      <Drawer.Screen name="Electronic" component={ElectronicScreen} />
      <Drawer.Screen name="Clothing" component={ClothingScreen} />
    </Drawer.Navigator>
  );
};

const App = () => {
  const galleryContextValue = { userName: 'Jabari Banks' };

  return (
    <CartProvider>
      <GalleryProvider value={galleryContextValue}>
        <NavigationContainer>
          <MyDrawer />
        </NavigationContainer>
      </GalleryProvider>
    </CartProvider>
  );
};

export default App;