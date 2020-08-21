import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import moment from 'moment';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatar: {
    alignSelf: 'center',
    width: 200,
    height: 200,
  },
  infoContainer: {
    width: 300,
    marginTop: 20,
    flexDirection: 'row',
    marginHorizontal: 20,
  },

  text: {
    width: 100,
    height: 30,
  },
});

export default class Driver extends React.PureComponent {
  render() {
    const {givenName, familyName, nationality, dateOfBirth} = this.props.driver;
    return (
      <View style={styles.container}>
        <Image
          style={styles.avatar}
          source={{
            uri:
              'https://icon-library.net/images/driver-icon-png/driver-icon-png-24.jpg',
          }}
        />
        <View style={styles.infoContainer}>
          <View>
            <Text style={styles.text}>Name:</Text>
            <Text style={styles.text}>Family Name:</Text>
            <Text style={styles.text}>Nationality:</Text>
            <Text style={styles.text}>Date of birth:</Text>
          </View>
          <View>
            <Text style={styles.text}>{givenName}</Text>
            <Text style={styles.text}>{familyName}</Text>
            <Text style={styles.text}>{nationality}</Text>
            <Text style={styles.text}>
              {moment(dateOfBirth).format('DD MM YYYY')}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
