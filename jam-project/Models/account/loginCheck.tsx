import { Alert } from "react-native";
import { getLoginInfo, saveLogin } from "../../Utils/Storage/loginStorage";
import AsyncStorage from '@react-native-async-storage/async-storage';


// logindata 에 대한 타입 지정
interface logindata{
  id:string
  password:string
}

// 로그인 결과에 대한 함수
export const loginResult = (data:logindata, navigation:any) => {

    // 패치 시 주소는 실행하는 컴터 ip
    fetch('http://192.168.30.76:3080/login', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },

      // 입력받은 데이터를 바디에 담아서 전송
      body: JSON.stringify(data)
    }
    ).then((response) => {

      // 서버로 부터 응답을 회신받는다.
      return response.json()
    })
      .then(json => {
        
        // 데이터 변수에 json화 한 값을 담는다.
        const datas = JSON.stringify(json)

        if (datas.split(`"`)[5] === undefined) {
          // 아이디가 없음
          Alert.alert('아이디 실패', '아이디가 일치하지 않습니다.')
        } else if (datas.split(`"`)[9] !== data.password) {
          // 비밀번호 틀림
          Alert.alert('비밀번호 실패', '비밀번호가 일치하지 않습니다.')
        } else {
          // 아이디 비번 있으니까 입장~
          
          Alert.alert('환영합니다!','잼픽이와 함께 하는 JamStock에 오신 것을 환영합니다!')

          
          navigation.navigate('home')
          saveLogin(datas.split(`"`)[5])
          getLoginInfo()
        }
      }
      ).catch(() => {
        console.log('error')
      })
  };