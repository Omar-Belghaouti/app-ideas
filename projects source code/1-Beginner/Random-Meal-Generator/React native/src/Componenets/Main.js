/*
 * author : ilies Ould menouer
 *
 * 21/08/2020
 */
import React, {useState, useRef, useEffect} from 'react';
//native components
import {StyleSheet, View, Text, TouchableOpacity, Alert} from 'react-native';
//gride (for better ui structure) :
import {Col, Row, Grid} from 'react-native-easy-grid';
// used components to display data
import {MealImage} from './Image';
import {Instruction} from './Instruction';
import {Ingrediants} from './Ingrediants';
import {Loading} from './Loading';
//for dispaying youtube video
import {YoutubeDisplayer} from './YoutubeDisplayer';
// icon pack
import Icon from 'react-native-vector-icons/AntDesign';
export const Main = () => {
  const playerRef = useRef(null);

  function getDataFromApi() {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((responseJson) => {
        setModalVisible(true);
        //Update Data & UI :

        setTitle(responseJson.meals[0].strMeal);
        setcategorie(responseJson.meals[0].strCategory);
        setInstructions(responseJson.meals[0].strInstructions);
        setImg(responseJson.meals[0].strMealThumb);
        setYoutubeVideoID(responseJson.meals[0].strYoutube.substring(32, 43));
        setingredients([]);
        getIntegredients(responseJson.meals[0]);
        setbtn1Style('#FF8A00');
        settxt1Style('white');
        setbtn2Style('#F0F6F5');
        settxt2Style('#9DB4A0');
        setbtn3Style('#F0F6F5');
        settxt3Style('#9DB4A0');
        setcurrentScreen(
          <Instruction instructions={responseJson.meals[0].strInstructions} />,
        );
        setModalVisible(false);
        setHeartState('hearto');
      })
      .catch((error) => {
        Alert.alert(error);
      });
  }
  useEffect(getDataFromApi, []);

  /*----------------------------------------------------- 
            |  Integredients containe 2 information
            so we put the result in array of object [{x1,x2},{...}]
   /*----------------------------------------------------- */

  function getIntegredients(allData) {
    for (let index = 0; index < 20; index++) {
      if (allData[`strIngredient${index}`]) {
        setingredients((prevList) => {
          return [
            {
              strIngredient: allData[`strIngredient${index}`],
              strMeasure: allData[`strMeasure${index}`],
            },
            ...prevList,
          ];
        });
      }
    }
  }
  /*----------------------------------------------------- 
            |  All constants used in the app
   /*----------------------------------------------------- */
  const [modalVisible, setModalVisible] = useState(true);
  const [HeartState, setHeartState] = useState('hearto');

  const [title, setTitle] = useState('Title Goes here !  !');
  const [categorie, setcategorie] = useState('category Goes here ! ');
  const [instructions, setInstructions] = useState(
    'instruction Goes here (click on Get new meal)! ',
  );
  const [VideoGrid, setVideoGrid] = useState(3);
  const [btn1Style, setbtn1Style] = useState('#FF8A00');
  const [txt1Style, settxt1Style] = useState('white');
  const [btn2Style, setbtn2Style] = useState('#F0F6F5');
  const [txt2Style, settxt2Style] = useState('#9DB4A0');
  const [btn3Style, setbtn3Style] = useState('#F0F6F5');
  const [txt3Style, settxt3Style] = useState('#9DB4A0');
  const [img, setImg] = useState(
    'https://www.themealdb.com/images/media/meals/wrpwuu1511786491.jpg',
  );
  const [ingredients, setingredients] = useState([
    {strIngredient: 'ingredients Goes here ! '},
  ]);
  const [YoutubeVideoID, setYoutubeVideoID] = useState(
    'youtube video Goes here ! ',
  );
  const [currentScreen, setcurrentScreen] = useState(
    <Instruction instructions={instructions} />,
  );

  /*----------------------------------------------------- 
            | Handle Bttons on click style for 
            (Instructions / ingredients/video)
   /*----------------------------------------------------- */
  function UpdatebtnStyle(selectedBtn) {
    switch (selectedBtn) {
      case 1:
        setbtn1Style('#FF8A00');
        settxt1Style('white');
        //
        setbtn2Style('#F0F6F5');
        settxt2Style('#9DB4A0');
        //
        setbtn3Style('#F0F6F5');
        settxt3Style('#9DB4A0');
        break;

      case 2:
        setbtn2Style('#FF8A00');
        settxt2Style('white');
        //
        setbtn1Style('#F0F6F5');
        settxt1Style('#9DB4A0');
        //
        setbtn3Style('#F0F6F5');
        settxt3Style('#9DB4A0');
        break;

      case 3:
        setbtn3Style('#FF8A00');
        settxt3Style('white');
        //
        setbtn2Style('#F0F6F5');
        settxt2Style('#9DB4A0');
        //
        setbtn1Style('#F0F6F5');
        settxt1Style('#9DB4A0');
        break;

      default:
        break;
    }
  }
  /*----------------------------------------------------- 
            | HAndle Displaying information
            (cmponents used from src/Componenets/)
   /*----------------------------------------------------- */
  const LoadVideo = () => {
    setcurrentScreen(
      <YoutubeDisplayer
        playerRef={playerRef}
        YoutubeVideoID={YoutubeVideoID}
        playing={true}
      />,
    );
    setVideoGrid(4), UpdatebtnStyle(3);
  };
  const LoadIngredients = () => {
    setcurrentScreen(<Ingrediants ingredients={ingredients} />);
    UpdatebtnStyle(2);
    setVideoGrid(3);
  };
  const LoadInstructions = () => {
    setcurrentScreen(<Instruction instructions={instructions} />);
    UpdatebtnStyle(1);
    setVideoGrid(3);
  };

  /*----------------------------------------------------- 
            | Main View (containe everthing)
   /*----------------------------------------------------- */
  return (
    <View style={styles.container}>
      <Loading modalVisible={modalVisible} />
      <Grid>
        <Row size={2}>
          <View style={{width: '100%'}}>
            <MealImage img={img} />
          </View>
        </Row>
        <Row size={0.8}>
          <View
            style={{
              backgroundColor: '#F0F6F5',
              borderBottomLeftRadius: 40,
              borderBottomRightRadius: 40,
              width: '100%',
              justifyContent: 'center',
            }}>
            <View style={{flexDirection: 'row', marginHorizontal: 20}}>
              <View style={{width: '90%'}}>
                <Text style={{fontWeight: 'bold', fontSize: 20, marginTop: 18}}>
                  {title}
                </Text>
                <Text
                  style={{fontSize: 12, color: '#FF8A00', fontWeight: 'bold'}}>
                  {categorie}
                </Text>
              </View>

              <View
                style={{
                  width: '10%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  justifyContent: 'center',
                }}>
                <TouchableOpacity onPress={() => setHeartState('heart')}>
                  <Icon name={HeartState} size={24} color="#F26161" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Row>

        <Row size={VideoGrid}>
          <View
            style={{
              backgroundColor: 'white',
              width: '100%',
              height: '100%',
            }}>
            <View style={{height: '10%', marginVertical: 30}}>
              <Grid>
                <Col>
                  <TouchableOpacity
                    onPress={() => LoadInstructions()}
                    style={{
                      alignItems: 'center',
                      backgroundColor: btn1Style,
                      borderRadius: 20,
                      padding: 10,
                      marginHorizontal: 10,
                    }}>
                    <Text
                      style={{
                        color: txt1Style,
                        fontSize: 15,
                      }}>
                      instructions
                    </Text>
                  </TouchableOpacity>
                </Col>
                <Col>
                  <TouchableOpacity
                    onPress={() => LoadIngredients()}
                    style={{
                      alignItems: 'center',
                      backgroundColor: btn2Style,
                      borderRadius: 20,
                      padding: 10,
                      marginHorizontal: 10,
                    }}>
                    <Text
                      style={{
                        color: txt2Style,
                        fontSize: 15,
                      }}>
                      ingredients
                    </Text>
                  </TouchableOpacity>
                </Col>
                <Col>
                  <TouchableOpacity
                    onPress={() => LoadVideo()}
                    style={{
                      alignItems: 'center',
                      backgroundColor: btn3Style,
                      borderRadius: 20,
                      padding: 10,
                      marginHorizontal: 10,
                    }}>
                    <Text
                      style={{
                        color: txt3Style,
                        fontSize: 15,
                      }}>
                      Video
                    </Text>
                  </TouchableOpacity>
                </Col>
              </Grid>
            </View>
            {currentScreen}
          </View>
        </Row>
        <Row size={0.4}>
          <View
            style={{
              backgroundColor: '#FF8A00',
              padding: 10,
              alignContent: 'center',
              justifyContent: 'center',
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              flex: 1,
            }}>
            <TouchableOpacity
              style={{alignContent: 'center', alignItems: 'center'}}
              onPress={() => getDataFromApi()}>
              <Text
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: 17,
                  paddingHorizontal: 80,
                }}>
                Get new meal
              </Text>
            </TouchableOpacity>
          </View>
        </Row>
      </Grid>
    </View>
  );
};

/*----------------------------------------------------- 
            | Views styling
   /*----------------------------------------------------- */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F0F6F5',
  },
});
