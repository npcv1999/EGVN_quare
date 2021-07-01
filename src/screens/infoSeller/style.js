import {StyleSheet} from 'react-native';
import Colors from '../../assets/colors/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerBg: {
    justifyContent: 'center',
    backgroundColor: Colors.cyan,
    height: 140,
    paddingTop: 10,
  },
  btnShop: {
    width: 84,
    height: 28,
    borderRadius: 8,
    borderColor: 'white',
    borderWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtWhite: {
    color: 'white',
  },
});
export default styles;
