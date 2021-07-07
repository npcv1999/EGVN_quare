import {StyleSheet} from 'react-native';
import Colors from '../../assets/colors/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  infoProd: {
    paddingHorizontal: 30,
  },
  nameProd: {
    fontSize: 18,
    fontWeight: 'bold',
    fontStyle: 'normal',
    color: '#807e7e',
  },
  viewInfo: {
    backgroundColor: '#f7f5f6',
    paddingHorizontal: 30,
    paddingVertical: 20,
    marginVertical: 5,
  },
  txt_label: {
    fontFamily: 'Helvetica',
    fontSize: 16,
    fontWeight: 'normal',
    fontStyle: 'normal',
    textAlign: 'left',
    color: '#777676',
  },
  viewAddCart: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderColor: '#707070',
    shadowColor: '#707070',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 2,

    paddingVertical: 5,
  },
  txtCate: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,

    color: '#969699',
  },
  hotItem: {
    width: 130,
    alignItems: 'center',
    marginBottom: 1,
    borderWidth: 1,
    borderColor: Colors.bgLightGray,
  },
  info: {height: 40, justifyContent: 'center'},
  rate: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 'auto',
    backgroundColor: Colors.bgLightGray,
    width: '100%',
  },
  txtRate: {
    fontSize: 8,
    fontStyle: 'italic',
  },
  price: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 'auto',
    width: '100%',
    paddingHorizontal: 5,
    alignItems: 'center',
  },
  txtPrice: {
    fontSize: 9,
    textDecorationLine: 'line-through',
  },
  txtSale: {
    fontSize: 10,
    color: Colors.orange,
  },
});
export default styles;
