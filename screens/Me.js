import React from 'react';
import { ScrollView } from 'react-native';
import { Tile, List, ListItem, Button } from 'react-native-elements';
import { me } from './../config/data-me';

const Me = props => {
  const handleSettingsPress = () => {
    props.navigation.navigate('Settings');
  };

  return (
    <ScrollView>
      <Tile
        imageSrc={{uri: props.picture.large}}
        featured
        title={`${props.name.first.toUpperCase()} ${props.name.last.toUpperCase()}`}
        caption={props.email}
      />

      <Button
        title='Settings'
        buttonStyle={{ marginTop: 20 }}
        onPress={handleSettingsPress}
      />

      <List>
        <ListItem
          title='Email'
          rightTitle={props.email}
          hideChevron
        />
        <ListItem
          title='Phone'
          rightTitle={props.phone}
          hideChevron
        />
      </List>

      <List>
        <ListItem
          title='Username'
          rightTitle={props.login.username}
          hideChevron
        />
      </List>

      <List>
        <ListItem
          title='Birthday'
          rightTitle={props.dob}
          hideChevron
        />
        <ListItem
          title='City'
          rightTitle={props.location.city}
          hideChevron
        />
      </List>
    </ScrollView>
  );
};

Me.defaultProps = { ...me };

export default Me;
