import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Colors from '../../assets/colors/Colors';
import {Avatar} from 'react-native-elements';
import UserWishList from '../../components/UserWishList';
import AntDesign from 'react-native-vector-icons/AntDesign';
import InfoShip from '../../components/InfoShip';
import SocialIcon from '../../components/SocialIcon';
import BtnCyan from '../../components/BtnCyan';
import GreyArea from '../../components/GreyArea';

export default function Profile() {
  return (
    <View style={styles.container}>
      <View style={styles.header}></View>

      {/* STACK PROFILE */}
      <View style={styles.choseStack}>
        {/* VIEW USER INFO */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Avatar
            size={67}
            rounded
            source={require('../../assets/img/cate/1.png')}></Avatar>
          <Text style={styles.nameUser}>Nguyen Pham Chi Vinh</Text>

          {/* SETTING PROFILE */}
          <TouchableOpacity style={{top: 0, right: 0, position: 'absolute'}}>
            <AntDesign name="setting" size={30} color="white"></AntDesign>
          </TouchableOpacity>
        </View>

        {/* COUNT WISHTLIST */}
        <View
          style={{
            paddingVertical: 20,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <UserWishList count={0} label="Yêu thích của tôi"></UserWishList>
          <UserWishList count={0} label="Gian hàng đã theo dõi"></UserWishList>
          <UserWishList count={0} label="Đã xem gần đây"></UserWishList>
        </View>

        {/* INFOR SHIP */}
        <View style={styles.viewShip}>
          <View
            style={{
              paddingHorizontal: 10,
            }}>
            <InfoShip label="Đơn hàng tiếp nhận"></InfoShip>
            <InfoShip label="Đơn hàng thanh toán"></InfoShip>
            <InfoShip label="Đơn hàng đang vận chuyển"></InfoShip>
            <InfoShip label="Đơn hàng thành công"></InfoShip>
            <InfoShip label="Đơn hàng đã hủy"></InfoShip>
          </View>

          {/* Grey area */}
          <View
            style={{
              backgroundColor: Colors.bgLightGray,
              paddingHorizontal: 10,
            }}>
            <GreyArea
              name="shoppingcart"
              isBorder
              label="Sản phẩm đã mua"></GreyArea>
            <GreyArea name="eyeo" isBorder label="Sản phẩm đã mua"></GreyArea>
            <GreyArea name="hearto" label="Sản phẩm đã mua"></GreyArea>
          </View>

          {/* Social Icon */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
              width: '80%',
              paddingHorizontal: 10,
              marginVertical: 10,
            }}>
            <Text
              style={{fontFamily: 'Helvetica', fontSize: 16, color: '#777676'}}>
              Kết nối qua :
            </Text>
            <SocialIcon name="facebook" color="#395196"></SocialIcon>
            <SocialIcon name="instagram" color="#ffc153"></SocialIcon>
            <SocialIcon name="twitter" color="#00a9ff"></SocialIcon>
            <SocialIcon name="youtube-play" color="#d40c18"></SocialIcon>
          </View>

          {/* BUTTON LOGOUT */}
          <BtnCyan
            name="Đăng xuất"
            color={Colors.cyan}
            style={{
              marginTop: 50,
              backgroundColor: 'white',
              borderColor: Colors.cyan,
              borderWidth: 1,
            }}></BtnCyan>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    width: '100%',
    height: 200,
    backgroundColor: Colors.cyan,
  },
  nameUser: {
    fontFamily: 'Helvetica',
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
    marginLeft: 20,
  },
  choseStack: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  viewShip: {
    elevation: 10,
    borderColor: '#707070',
    shadowColor: '#707070',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    backgroundColor: 'white',
    borderRadius: 8,
    paddingBottom: 30,
  },
});
