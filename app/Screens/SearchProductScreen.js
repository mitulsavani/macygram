import React from 'react';
import { ImageEditor, StyleSheet, View, TextInput, Text, TouchableOpacity, Image, SafeAreaView, KeyboardAvoidingView, Keyboard, Alert } from 'react-native';
import { Button, Icon, Header } from 'react-native-elements';
import { Entypo,Ionicons } from '@expo/vector-icons';
import { ImagePicker } from 'expo';


export default class SearchProductScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      image: null,
    };
  }
  handleSubmit = () => {
    //Display alert
    const { text } = this.state
    if (text != '') {
      Keyboard.dismiss
      console.log("Search done")
      Alert.alert(
        'Processing!',
        'We will find what you want',
        [
          { text: 'OK', onPress: () => this.props.navigation.goBack() },
        ],
        { cancelable: false }
      );
    }
    else {
      Keyboard.dismiss
      console.log("Share canceled")
      Alert.alert(
        'Invalid!',
        'You do not have anything to search' + '\nPlease input your search item below ', 
        [
          { text: 'Try Again', onPress: () => console.log("Tried again") },
        ],
        { cancelable: false }
      );
    }
  }
  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });
    
    if (result.cancelled) {
      console.log('got here');
      return;
    }

    let resizedUri = await new Promise((resolve, reject) => {
      ImageEditor.cropImage(result.uri,
        {
          offset: { x: 0, y: 0 },
          size: { width: result.width, height: result.height },
          displaySize: { width: 50, height: 50 },
          resizeMode: 'contain',
        },
        (uri) => resolve(uri),
        () => reject(),
      );
    });

    this.setState({ image: resizedUri });
  };
  render() {
    const {text, image} = this.state
    return (
      <View style={styles.createPostContainer}>
        <SafeAreaView style={{ backgroundColor: '#FAFAFA', }}>
          <Header
            leftComponent={
              <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                <Text style={styles.navBar}>Cancel</Text>
              </TouchableOpacity>
            }
            centerComponent={{
              text: 'Create Post',
              style: {
                color: '#2F80ED', fontSize: 20,
                fontWeight: 'bold',
              }
            }}
            rightComponent={
              <TouchableOpacity onPress={this.handleSubmit}>
                <Text style={styles.navBar}>Done</Text>
              </TouchableOpacity>
            }
            outerContainerStyles={{ backgroundColor: '#FAFAFA' }}
          />
        </SafeAreaView>
        <View style={styles.mainContainer}> 
          <View style={styles.postInfoContainer}>
            <View style={styles.uploadImageContainer}>
                <TouchableOpacity onPress={this._pickImage}>
                <Ionicons
                  name='md-image'
                  size={30}
                  color='#085947'
                  style={styles.photoPostIcon}
                />
                <Text style={styles.photoLabel}>Upload from library</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.uploadImageContainer}> 
            <TouchableOpacity onPress={() => this.props.navigation.navigate('TakePhoto')}>
                <Ionicons
                  name='ios-camera'
                  size={30}
                  color='#085947'
                  style={styles.photoPostIcon}
                />
                <Text style={styles.photoLabel}>Take a photo</Text>
                </TouchableOpacity>
            </View>
          </View>
          <KeyboardAvoidingView behavior="height">
          <View style={styles.textInputContainer}>
            <TextInput
              editable={true}
              placeholder={"What are you looking for?"}
              placeholderTextColor={'gray'}
              maxLength = {40}
              multiline = {true}
              onChangeText={(text) => this.setState({text})}
              value={text}
              style={styles.postTextInput}
            />
          </View>
          </KeyboardAvoidingView >
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  createPostContainer: {
    flex: 1,
    backgroundColor: 'white'  
  },
  mainContainer: {
    flex: 1,
  },
  postInfoContainer:{
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderColor: '#aaaaaa',
    justifyContent: 'space-around'
  },
  avatar: {
    height: 45,
    width: 45,
    borderRadius: 22,
    marginLeft: 5
  },
  nameContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  nameLabel: {
    fontSize: 18,
    color: '#003366',
    marginLeft: 10,
    fontWeight: 'bold'
  },
  postAuthorInfoContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  locationContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  locationLabel: {
    fontSize: 15,
    color: 'black',
    marginLeft: 10,
  },
  textInputContainer: {
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  postTextInput:{
    height: 200,
    fontSize: 22,
    color: 'black',
  },
  uploadImageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  photoLabel: {
    color: '#737373'
  }, 
  photoPostIcon: {
    alignSelf: 'center',
  }

});
