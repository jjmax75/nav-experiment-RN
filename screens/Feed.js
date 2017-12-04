import React from 'react';
import { ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { users } from './../config/data';

const Feed = props => {
  const onLearnMore = user => {
    props.navigation.navigate('Details', { ...user });
  };

  return (
    <ScrollView>
      <List>
        {users.map(user => (
          <ListItem
            key={user.login.username}
            roundAvatar
            avatar={{ uri: user.picture.thumbnail }}
            title={`${user.name.first.toUpperCase()} ${user.name.last.toUpperCase()}`}
            subtitle={user.email}
            onPress={() => onLearnMore(user)}
          />
        ))}
      </List>
    </ScrollView>
  );
};

export default Feed;
