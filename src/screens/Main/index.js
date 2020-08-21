import React from 'react';
import {
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
  ActivityIndicator,
} from 'react-native';
import moment from 'moment';
import {styles} from './styles';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import {getDrivers} from '../../actions';

const mapStateToProps = (state) => {
  const {drivers} = state;

  return {
    data: drivers.data,
    isLoading: drivers.loading,
    error: drivers.error,
  };
};

const mapDispatchToProps = {
  getDrivers: getDrivers,
};

class Main extends React.PureComponent {
  state = {
    drivers: [],
  };

  async componentDidMount() {
    this.props.getDrivers();
  }

  renderDrivers = () => {
    const drivers = this.props.data;
    const {isLoading} = this.props;
    if (isLoading) {
      return <ActivityIndicator />;
    }
    if (drivers.length > 0) {
      return drivers.map((driver) => (
        <TouchableOpacity
          onPress={() => Actions.Driver({driver})}
          style={styles.buttonContainer}
          key={driver.driverId}>
          <Image
            style={styles.driverIcon}
            source={{
              uri:
                'https://icon-library.net/images/driver-icon-png/driver-icon-png-24.jpg',
            }}
          />
          <Text style={styles.driverName}>
            {driver.givenName} {driver.familyName}
          </Text>
          <Text style={styles.driverNationality}>{driver.nationality}</Text>
          <Text style={styles.dateOfBirth}>
            {moment(driver.dateOfBirth).format('DD MM YYYY')}
          </Text>
        </TouchableOpacity>
      ));
    }
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>{this.renderDrivers()}</ScrollView>
      </SafeAreaView>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
