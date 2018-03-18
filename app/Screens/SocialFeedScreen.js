import React from 'react';
import { StyleSheet, Text, View, Image,ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

import {SOCIAL_FEED_MOCK_DATA} from '../../assets/SOCIAL_FEED_MOCK_DATA'
import { Ionicons } from '@expo/vector-icons';
import { SimpleLineIcons, MaterialCommunityIcons,  Entypo } from '@expo/vector-icons';


import { Font } from 'expo';



export default class SocialFeedScreen extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'Macygram',
    headerTintColor: '#BC261A',
    headerTitleStyle: {
      fontSize: 20,
    },
  });

  constructor(props) {
    super(props);

    this.state = {
      commented: false,
      liked: false,
      fontLoaded:false,
    };
  }
  async componentDidMount() {
    await Font.loadAsync({
      'OpenSans-SemiBoldItalic': require('../../assets/font/OpenSans-SemiBoldItalic.ttf')
    });
    this.setState({ fontLoaded: true });
  }



  // this will render one post
  renderItem = ({item}) => {

    const { liked, commented } = this.state


    return(  
      <View style = { styles.itemContainer} key={item}  >
        <View style={styles.headerContainer}>
          <Image 
            source={{uri: item.image}}
            style={{
            width: 40,
            height: 40,
            borderRadius: 20,
          }}
        />
          
        <View style={styles.nameLocationContainer}>
          <TouchableOpacity style = {styles.nameContainer}
            // onPress={() => navigate('FriendProfile',{user: item.user} )}
          > 
            <Text style={styles.nameAndLocationContainer}> {item.name} </Text>  
          </TouchableOpacity>  
            <Text style={styles.nameAndLocationContainer}> {item.location}</Text>
        </View>
          
      </View>
        
    {/* <TouchableOpacity  onPress={() => navigate('Post',{ post: item })}> */}
    <View style={styles.postContentContainer}>
      <Image
        source = {{uri: item.post["image"]}} 
         style = {{
          width: '100%',
          height: 430,
        }}
      />

      
        <View style = {styles.captionContainer}>
        <Text  style = {styles.descriptonText}  > {item.post["caption"]}</Text>
      </View>
      
    </View> 
   {/* </TouchableOpacity> */}
  
      <View style = {styles.bottomContainer}>
         {/* <Text> {item.date}</Text> */}
     {/* <TouchableOpacity  onPress={() => navigate('Post',{ post: item })}> */}
      <View style= {styles.iconButtonContainer}>
        <Icon
          name="ios-chatbubbles-outline"
          size={30}
          type="ionicon"
          color='#085947'
          style={{paddingRight: 1}}
        />
        <Text style={styles.postActionText}>{item.comments ? item.comments.length : 0}</Text>

        <View style={[styles.iconButtonContainer]}>
          <Icon
            name={liked ? "ios-heart" : "ios-heart-outline"}
            color={liked ? 'red' : null} type="ionicon" size={30} 
            onPress={() => this.setState({ liked: !liked })}
          />
            <Text style={styles.postButtonText}>{item.likes}</Text>
        </View>
    </View> 

    <View style = {styles.priceContainer }>
        <Text style = {styles.priceText}> {item.post["price"]}</Text>
    </View> 

    <View style = {styles.buyButtonContainer}>
      <Icon
            type = "ionicon"
            name={liked ? "md-cart" : "ios-cart-outline"}
            color={liked ? 'red' : 'black'} size={35} 
        />
        <Text style={styles.postButtonText}>{item.likes}</Text>    
    </View>
    
    
    </View>

    <View style = {styles.datePostedContainer}>
        <Text> {item.post["date"]}</Text>
    </View> 
    
  </View> 
    )
  
  }

  render() {

    const { navigate } = this.props.navigation
    return ( 

      <View style={styles.mainContent}  >
        {this.state.fontLoaded &&  
      <View style={styles.createPostContainer}>
        <TouchableOpacity style={styles.createPostLabelContainer}>
          <Text style={styles.createPostLabel}>Search Product</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addPhotoIcon}>
          <Ionicons
            name='ios-camera'
            size={30}
            color='#085947'
            style={{paddingRight: 1}}
          />
        </TouchableOpacity>

      </View>  
      }
      
    

    <ScrollView style = {styles.scrollContainer}>  
    
      <FlatList 
            style={styles.list}
            data = {SOCIAL_FEED_MOCK_DATA}
            style={styles.container}
            keyExtractor={(item, index) => index}
            renderItem={(item) => this.renderItem(item)}
        
      />
    </ScrollView>  
    </View>
  
    );
  }
}

const styles = StyleSheet.create({
  mainContent: {
    flex: 1,

  },
  createPostContainer: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    backgroundColor: '#f9f9f9',

  },createPostLabelContainer: {
    flex: 10,
    marginLeft: 20
  },
  createPostLabel: {
    fontSize: 18,
    color: '#BC261A',
    fontWeight: 'bold',
    fontFamily: 'OpenSans-SemiBoldItalic'

  },addPhotoIcon: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight: 20,
  },
  scrollContainer : {
    flexGrow: 1,
  },

  list: {
    flexGrow :1
  },
  itemContainer: {
    flex: 1,

    
  },
  headerContainer: {
    flexDirection : 'row',
    paddingTop: 10,
    justifyContent: 'flex-start',
    alignItems: 'center', 
    
  
  },

   nameLocationContainer : {
    paddingLeft: 5,


   } ,
   
  nameAndLocationContainer:{
    flexDirection: 'column',
    justifyContent: 'space-around',
    fontWeight: 'bold',
    fontSize: 14
    

    

  },
  
  captionContainer: {
    backgroundColor: 'white',
    paddingTop: 5,
    justifyContent: 'space-around',
    marginBottom: 10,
    marginLeft: 5,
    marginRight: 5

  },

  bottomContainer: {
    flexDirection: 'row',
    flex: 1,
  
    
  },
  iconButtonContainer : {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
    flex: 7
    
  },


  priceContainer : {
    flexDirection: 'row',
    flex: 2,
    alignItems: 'center',

  },

  buyButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',

    flex: 1
    
  },
  list: {
    flex: 1,
  },
  
  postButtonText: {
    marginLeft: 10,
    color: '#44484B',
    fontSize: 15,
    


  },
  postContentContainer: {
    backgroundColor: 'white',

  },
  postView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  postInteractiveButtonContainer: {
    marginLeft: 0,
    marginRight: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },

  datePostedContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 15

  },
  priceText : {
    fontSize: 18,

  },
  descriptonText : {
    fontSize: 15
  }


});