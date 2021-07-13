import {StyleSheet} from 'react-native';
import Colors from '../../assets/colors/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    justifyContent: 'center',
    height: 50,
    backgroundColor: Colors.cyan,
  },
  txtHeader: {
    fontSize: 20,
    color: Colors.white,
    marginLeft: 50,
  },
  vwItem: {
    shadowOffset: {
      width: 0,
      height: 0,
    },
    marginVertical: 10,
    elevation: 5,
    backgroundColor: 'white',
    padding: 10,
    marginHorizontal: 15,
    borderRadius: 6,
  },
  vwLabel: {
    flexDirection: 'row',
  },
  txtLabel: {
    fontSize: 15,
    color: Colors.labelNotify,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  txtMess: {
    fontSize: 14,
    color: Colors.labelNotify,
    textAlign: 'justify',
  },
});
export default styles;
