/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import {FontAwesome, FontAwesome5} from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import {ColorSchemeName, Pressable, View} from 'react-native';
import {Octicons, MaterialCommunityIcons, MaterialIcons} from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import ChatsScreen from '../screens/ChatsScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import {Fontisto} from "@expo/vector-icons";
import ChatRoomScreen from '../screens/ChatRoomScreen';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: Colors.light.tint,
        },
        headerTintColor: Colors.light.background,
        headerTitleAlign: 'left',
        headerTitleStyle:{
            fontWeight:"bold",
        }
    }}
    >
      <Stack.Screen
          name="Root"
          component={MainTabNavigator}
          options={{
              title:"WhatsApp" ,
              headerRight:()=>(
                  <View style={{flexDirection:'row', width:60 ,
                      justifyContent:'space-between',
                        marginRight:10
                  }}>
                      <Octicons name={'search'} size={22} color={'white'} />
                      <MaterialCommunityIcons name={'dots-vertical'} size ={22} color={'white'}/>
                  </View>
              )
          }
          } />
      <Stack.Screen name="ChatRoom"
                    component={ChatRoomScreen}
                    options={({route})=>({
                        title: route.params.name,
                        headerRight: ()=>(
                            <View style={{flexDirection:'row', width:100 ,
                                justifyContent:'space-between',
                                marginRight:10 }}>
                                <MaterialIcons name='call' size={22} color={'white'} />
                                <FontAwesome5 name='video' size={22} color={'white'} />
                                <MaterialCommunityIcons name='dots-vertical' size={22} color={'white'} />
                            </View>
                        )

                    })}
      />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const MainTab = createMaterialTopTabNavigator<RootTabParamList>();

function MainTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <MainTab.Navigator
      initialRouteName="Chats"
      screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme].background,
          tabBarContentContainerStyle :{backgroundColor: Colors[colorScheme].tint},
          tabBarIndicatorStyle :{
           backgroundColor: Colors[colorScheme].background,
             height:5,
          },
          tabBarLabelStyle:{
              fontWeight:'bold'
          },
          tabBarShowIcon:true


      }}>
      <MainTab.Screen
        name="Camera"
        component={ChatsScreen}
        options={({ navigation }: RootTabScreenProps<'Camera'>) => ({
          title: 'Camera',
            tabBarLabel:()=>null,
          tabBarIcon: ({ color }) => <Fontisto name="camera" color={color} size ={18} />,

          // headerRight: () => (
          //   <Pressable
          //     onPress={() => navigation.navigate('Modal')}
          //     style={({ pressed }) => ({
          //       opacity: pressed ? 0.5 : 1,
          //     })}>
          //     <FontAwesome
          //       name="info-circle"
          //       size={25}
          //       color={Colors[colorScheme].text}
          //       style={{ marginRight: 15 }}
          //     />
          //   </Pressable>
          // ),
        })}
      />
      <MainTab.Screen
        name="Chats"
        component={ChatsScreen}
        options={{
          title: 'Chats',
          //tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
        <MainTab.Screen
            name="Status"
            component={TabTwoScreen}
            options={{
                title: 'Status',
                //tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
            }}
        />
        <MainTab.Screen
            name="Calls"
            component={TabTwoScreen}
            options={{
                title: 'Calls',
                //tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
            }}
        />
    </MainTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
