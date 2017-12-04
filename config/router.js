import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Feed from './../screens/Feed';
import Me from './../screens/Me';
import UserDetail from './../screens/UserDetail';
import Settings from './../screens/Settings';
import AlphabetNavigation from './../screens/AlphabetNavigation';

const getFullName = params => {
  const firstName = params.name.first.toUpperCase();
  const lastName = params.name.last.toUpperCase();

  return `${firstName} ${lastName}`;
};

const FeedStack = StackNavigator({
  Feed: {
    screen: AlphabetNavigation,
    navigationOptions: {
      title: 'Feed',
    }
  },
  Details: {
    screen: UserDetail,
    navigationOptions: ({ navigation }) => ({
      title: getFullName(navigation.state.params),
    }),
  }
});

const Tabs = TabNavigator({
  Feed: {
    screen: FeedStack,
    navigationOptions: {
      tabBarLabel: 'Feed',
      tabBarIcon: ({ tintColor }) => <Icon name='list' size={35} color={tintColor} />,
    },
  },
  Me: {
    screen: Me,
    navigationOptions: {
      tabBarLabel: 'Me',
      tabBarIcon: ({ tintColor }) => <Icon name='account-circle' size={35} color={tintColor} />,
    },
  },
});

const SettingsStack = StackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: {
      title: 'Settings',
    },
  },
});

export const Root = StackNavigator({
  Tabs: {
    screen: Tabs,
  },
  Settings: {
    screen: SettingsStack,
  },
}, {
  name: 'modal',
  headerMode: 'none',
});
