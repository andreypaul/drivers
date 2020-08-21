import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    marginHorizontal: 20,
    height: 60,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  driverIcon: {
    width: 20,
    height: 20,
  },
  driverName: {
    paddingLeft: 15,
    width: 150,
  },
  driverNationality: {
    width: 80,
  },
  dateOfBirth: {
    width: 80,
  },
});
