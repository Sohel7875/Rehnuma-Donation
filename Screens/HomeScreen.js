import { StyleSheet, Text, View, SafeAreaView, ScrollView, Pressable, TextInput, } from 'react-native'
import { useState, useEffect, useCallback, useContext } from "react";

import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { SliderBox } from "react-native-image-slider-box";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { BottomModal, SlideAnimation, ModalContent } from "react-native-modals";
import AsyncStorage from "@react-native-async-storage/async-storage";
import img from '../assets/image.jpg'
import Card from "../Components/Card";

const HomeScreen = () => {

  const list = [
    {
      id: "0",
      image: "https://m.media-amazon.com/images/I/41EcYoIZhIL._AC_SY400_.jpg",
      name: "Home",
    },
    {
      id: "1",
      image:
        "https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/blockbuster.jpg",
      name: "Deals",
    }
  ];
  const images = [
    img, img, img, img, img, img, img, img, img
  ];

  const [students, setStudents] = useState([]);
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/students");
        setStudents(response.data.beneficiaries);
      } catch (error) {
      }
    };

    fetchData();
  }, []);

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const token = await AsyncStorage.getItem("authToken");
  //     const decodedToken = jwt_decode(token);
  //     const userId = decodedToken.userId;
  //     setUserId(userId);
  //   };

  //   fetchUser();
  // }, []);




  return (
    <>
      <SafeAreaView style={{
        flex: 1,
        backgroundColor: "white",
        paddingTop: 50
      }}>
        <ScrollView>

          <ScrollView style={{ flex: 1, flexDirection: "column", gap: 5, paddingVertical: 10, paddingHorizontal: 10 }}>
            <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", alignItems: 'center' }}>
              <View>
                <Text style={{ fontWeight: 600 }}>Hello !</Text>
                <Text style={{ fontWeight: 900, fontSize: 20 }}>Ibrahim</Text>
              </View>
              <AntDesign
                style={{ paddingLeft: 10 }}
                name="search1"
                size={22}
                color="#580ff5"
              />
            </View>
            <Pressable style={{
              flexDirection: "row",
              alignItems: "center",
              marginHorizontal: 7,
              gap: 10,
              backgroundColor: "#f0f0f0",
              marginVertical: 20,
              marginHorizontal: 15,
              borderRadius: 3,
              height: 38,
              flex: 1,
              paddingVertical: 5,
              borderRadius: 15


            }}>
              <AntDesign
                style={{ paddingLeft: 10 }}
                name="search1"
                size={22}
                color="black"
              />
              <TextInput placeholder="Search Students..." style={{ width: "100%" }} />
            </Pressable>

            <View style={styles.shadowProp}>



              <ScrollView>
                <SliderBox images={images}
                  autoplay

                  circleloop
                  paginationBoxVerticalPadding={20}
                  dotColor={"white"}
                  inactiveDotColor={"#9084ae"}
                  ImageComponentStyle={{ width: '100%' }} />


              </ScrollView>
            </View>
            <ScrollView>
            <View  style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", alignItems: 'center' }} >
              <Text style={{fontSize:18,fontWeight:700,color:'black'}}>Donations</Text>
            <Pressable
            onPress={()=>{if(students.length>0){navigation.navigate("Full",{item:students,sorted:false,field:''})}}}
             style={{flexDirection:"row",alignItems:"center", marginVertical:20}}>
              <Text style={{fontSize:16,fontWeight:600,color:'#580ff5'}}>See all</Text>
              <MaterialIcons name="arrow-right" size={30} color="black" />
            </Pressable>

            </View>
            
          </ScrollView>
          <ScrollView horizontal  showsHorizontalScrollIndicator={false}  style={{ flex: 1, flexDirection: "column", gap: 5, paddingVertical: 10, paddingHorizontal: 10 }}>
          {
students.length>0 &&(
  students.map((data,index) =>{
   return <Card key={index} data= {data} />
  })
)
 }
          </ScrollView>

          </ScrollView>

        </ScrollView>

      </SafeAreaView>

    </>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  shadowProp: {
    shadowColor: '#580ff5',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    // margin: '2%', 
    marginTop:10,
    overflow:"hidden",
    borderRadius: 20,
  },
  CardProp: {
    shadowColor: '#580ff5',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    margin: '2%',
    borderRadius: 10,
  },
});