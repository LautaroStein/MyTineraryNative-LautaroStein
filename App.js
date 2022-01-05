import { StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Index from './Screens/Index'
import Cities from './Screens/Cities'
import Icon, { Icons } from './components/Icons';
import * as Animatable from 'react-native-animatable';
import React, { useEffect, useRef } from 'react'

const TabArr = [
  { route: "Home" , label: "Home" , type: Icons.Ionicons , activeIcon: "home" , inActiveIcon: "home-outline" , component: Index },
  { route: "Cities" , label: "Cities" , type: Icons.Ionicons , activeIcon: 'grid' , inActiveIcon: "grid-outline" , component: Cities },
  { route: "User" , label: "User" , type: Icons.FontAwesome , activeIcon: 'user-circle' , inActiveIcon: 'user-circle-o' , component: Index  },
]

const Tab = createBottomTabNavigator();

const TabButton = (props) => {
  const { item, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);

  useEffect(() => {
  if (focused) {
      viewRef.current.animate({0: {scale: .5, rotate: '0deg'}, 1: {scale: 1.5, rotate: '360deg'}});
      } else {
          viewRef.current.animate({0: {scale: 1.5, rotate: '360deg'}, 1: {scale: 1, rotate: '0deg'}});
      }
  }, [focused])
  return (
  <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={styles.container}>
      <Animatable.View
          ref={viewRef}
          duration={1000}
          style={styles.container}>
          <Icon type={item.type} name={focused ? item.activeIcon : item.inActiveIcon} color={focused ? '#2dd4bf' : '#637aff99'} />
      </Animatable.View>
  </TouchableOpacity>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
        headerShown: false,
    }}
    >
    {TabArr.map((item, index) => {
        return (
        <Tab.Screen key={index} name={item.route} component={item.component}
            options={{
                tabBarShowLabel: false,
                tabBarButton: (props) => <TabButton {...props} item={item} />
            }}
        />
        )
    })}
    </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
