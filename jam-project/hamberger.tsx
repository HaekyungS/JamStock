import React from 'react';
import { View, Text, Button, Image, TouchableOpacity } from 'react-native';
import { Styles, StylesText } from './styles';
import { useNavigation } from '@react-navigation/native';

// const Drawer = createDrawerNavigator();

// const Hamberger = () => {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="Login" component={Login} options={{ drawerLabel: 'Login' }} />
//       <Drawer.Screen name="SignUp" component={SignUp} options={{ drawerLabel: 'SignUp' }} />
//     </Drawer.Navigator>
//   );
// }

// export default Hamberger;

type HambergerProps = {
  navigation: any;
}

const Hamberger: React.FC<HambergerProps> = ({ navigation }) => {
  return (
    <View style={Styles.hamBox}>
      <View style={Styles.hamTop}>
        {/* <Text style={Styles.hamName}>쨈픽 님</Text> */}
        <TouchableOpacity style={Styles.hamButton} onPress={() => navigation.navigate('signUp')}>
          <Text style={Styles.hamButtonText}>회원가입</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.hamButton} onPress={() => navigation.navigate('login')}>
          <Text style={Styles.hamButtonText}>로그인</Text>
        </TouchableOpacity> 
      </View>

      <View style={Styles.hamCategory}>
        <View style={Styles.hamCategoryList}>
          <TouchableOpacity style={Styles.hamListWrap}>
            <Text style={Styles.hamListText}>마이페이지</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.hamListWrap}>
            <Text style={Styles.hamListText}>나의 잔고</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.hamListWrap}>
            <Text style={Styles.hamListText}>실시간 정보</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.hamListWrap}>
            <Text style={Styles.hamListText}>주식 추천</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.hamListWrap}>
            <Text style={Styles.hamListText}>종목 검색</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.hamListWrap}>
            <Text style={Styles.hamListText}>용어 가이드</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Hamberger;