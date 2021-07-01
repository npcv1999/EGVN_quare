import {StyleSheet} from 'react-native';
import Colors from '../../assets/colors/Colors';

const styles = StyleSheet.create({
  container: {flex: 1},

  searchBar: {
    marginHorizontal: 25,
    marginVertical: 10,
    padding: 5,
  },
  viewHome: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  bodyHome: {
    flex: 1,
  },
  viewPadding: {
    paddingHorizontal: 25,
  },
  category: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 10,
  },
  itemCate: {
    width: 65,
    height: 85,
    marginVertical: 9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgCate: {
    width: 55,
    height: 55,
    marginBottom: 5,
  },
  txtCate: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,

    color: '#969699',
  },
  viewHot: {
    width: 'auto',
    height: 350,
    flexWrap: 'wrap',
    marginVertical: 10,
    justifyContent: 'flex-start',
    backgroundColor: Colors.infoGray,
  },
  hotItem: {
    borderWidth: 1,
    borderColor: Colors.textGray,
    width: 115,
    alignItems: 'center',
    marginBottom: 1,
    marginRight: 0.5,
  },
  info: {height: 40},
  rate: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 'auto',
    backgroundColor: Colors.textGray,
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
