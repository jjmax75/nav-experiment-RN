import { TabNavigator } from 'react-navigation';
import Feed from './Feed';

const buildAlphabetMenu = () => {
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  return alphabet.map(letter => {
    return {
      [letter]: {
        screen: Feed,
      }
    };
  });
};

const AlphabetNavigation = TabNavigator(
  Object.assign({}, ...buildAlphabetMenu()),
  {
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition: 'top',
    lazy: true,
    tabBarOptions: {
      activeTintColor: 'purple',
      inactiveTintColor: 'red',
      showLabel: true,
      showIcon: true,
      upperCaseLabel: true,
      pressColor: 'white',
      pressOpacity: 1,
      scrollEnabled: true,
      iconStyle: {
        flexDirection: 'row',
        width: 30,
        height: 30,
        opacity: 1,
      },
      tabStyle: {
        padding: 0,
      },
      indicatorStyle: {
        backgroundColor: 'purple',
      },
      labelStyle: {
        padding: 0,
        marginLeft: 0,
        marginRight: 0,
        marginTop: 2,
        fontSize: 20,
      },
      style: {
        backgroundColor: 'grey',
        paddingTop: 4,
      },
    },
  });

export default AlphabetNavigation;
