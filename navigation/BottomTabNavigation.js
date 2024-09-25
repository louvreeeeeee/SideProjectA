import { View, Text, Dimensions, StyleSheet } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS, FONTS } from '../constants';
import { CameraScreen, GuideBookScreen, HomeScreen, GuideBookSection, PestDetailsModal } from '../screens';
import { FontAwesome, Feather, Ionicons } from '@expo/vector-icons';
const { width: windowWidth, height: windowHeight } = Dimensions.get("window");
const Tab = createBottomTabNavigator()

const BottomTabNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarStyle: {
                    position: 'absolute',
                    backgroundColor: COLORS.background,
                    bottom: 0,
                    right: 0,
                    left: 0,
                    elevation: 0,
                    height: windowHeight * 0.092,
                    borderColor: COLORS.gray,
                },
            }}
        >
            <Tab.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View
                                style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                {focused ? (
                                    <>
                                      
                                        <Ionicons name="home" size={20} color={COLORS.primary} />
                                        <Text
                                            style={{
                                                fontSize: windowHeight * 0.017,
                                                fontFamily: "semibold",
                                                color: COLORS.primary,
                                            }}
                                        >
                                            Home
                                        </Text>
                                    </>
                                ) : (
                                    <React.Fragment>
    <Ionicons name="home" size={20} color={COLORS.gray} />
    <Text
      style={{
        fontSize: windowHeight * 0.017,
        fontFamily: "semibold",
        color: COLORS.gray,
      }}
    >
      Home
    </Text>
  </React.Fragment>
                                )}
                            </View>
                        )
                    },
                }}
            />

            <Tab.Screen
                name="CameraScreen"
                component={CameraScreen}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View
                                style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                {focused ? (
                                    <>
                                      
                                        <Ionicons name="analytics" size={20} color={COLORS.primary} />
                                        <Text
                                            style={{
                                                fontSize: windowHeight * 0.017,
                                                fontFamily: "semibold",
                                                color: COLORS.primary,
                                            }}
                                        >
                                            CameraScreen
                                        </Text>
                                    </>
                                ) : (
                                    <React.Fragment>
    <Ionicons name="analytics" size={20} color={COLORS.gray} />
    <Text
      style={{
        fontSize: windowHeight * 0.017,
        fontFamily: "semibold",
        color: COLORS.gray,
      }}
    >
      CameraScreen
    </Text>
  </React.Fragment>
                                )}
                            </View>
                        )
                    },
                }}
            />
            <Tab.Screen
                name="GuideBookScreen"
                component={GuideBookScreen}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View
                                style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                {focused ? (
                                    <>
                                        <Ionicons name="person" size={20} color={COLORS.primary} />
                                        
                                        <Text
                                            style={{
                                                fontSize: windowHeight * 0.017,
                                                fontFamily: "semibold",
                                                color: COLORS.primary,
                                            }}
                                        >
                                           GuideBookScreen
                                        </Text>
                                    </>
                                ) : (
                                    <React.Fragment>
    <Ionicons name="person" size={20} color={COLORS.gray} />
    <Text
      style={{
        fontSize: windowHeight * 0.017,
        fontFamily: "semibold",
        color: COLORS.gray,
      }}
    >
      GuideBookScreen
    </Text>
  </React.Fragment>
                                    
                                    
                                )}
                            </View>
                        )
                    },
                }}
            />
        </Tab.Navigator>
    )
}

export default BottomTabNavigation;