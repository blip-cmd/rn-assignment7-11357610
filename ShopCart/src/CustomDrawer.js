import React, { useContext } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import CloseDrawerBtn from './CloseDrawerBtn';
import { GalleryContext } from './GalleryContext';

const CustomDrawer = (props) => {
  const { userName } = useContext(GalleryContext);

  return (
    <DrawerContentScrollView {...props}>
      <CloseDrawerBtn />
      <View style={{ paddingBottom: 30 }}>
        <Text style={styles.drawerUserNm}>{userName}</Text>
        <View style={styles.drawerLine}></View>
      </View>
      <View>
        <DrawerItemList {...props} />
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerUserNm: {
    fontSize: 26,
    textTransform: 'uppercase',
    paddingLeft: 25,
    paddingBottom: 10,
    fontWeight: '200',
    letterSpacing: 6,
  },
  drawerLine: {
    borderColor: '#DD8560',
    borderWidth: 1,
    width: '45%',
    marginLeft: 50,
  },
});

export default CustomDrawer;
