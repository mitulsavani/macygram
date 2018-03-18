import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Camera, Permissions } from 'expo';
import { FontAwesome, SimpleLineIcons, Feather } from '@expo/vector-icons';
import { Button, Icon } from 'react-native-elements';

export default class TakePhoto extends React.Component {

  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
  };

  async press() {
    console.log('Button Pressed');
      if (this.camera) {
        console.log('Taking photo');
        let photo = await this.camera.takePictureAsync();
        console.log(photo);
      }
  }

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View/>;
    } else if (hasCameraPermission === false) {
      return <Text>Please grant MacyGram access to the camera in your privacy settings.</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera style={{ flex: 1 }} type={this.state.type} ref={ (ref) => {this.camera = ref} }>

            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                style={{
                  flex: 0.1,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                }}
                onPress={() => {
                  this.setState({
                    type: this.state.type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back,
                  });
                }}>
                <Icon
                  name='refresh'
                  type='simple-line-icon'
                  size={23}
                  style={{ height: 100, width: 100, backgroundColor: 'transparent', padding: 10, alignItems: 'center' }}>
                </Icon>
              </TouchableOpacity>

              <TouchableOpacity
                style={{ flex: 0.1, alignSelf: 'flex-end', alignItems: 'center' }}
                onPress={this.press.bind(this)}>
                <Icon
                  name='circle'
                  type='feather'
                  size={23}
                  style={{ height: 100, width: 100, backgroundColor: 'transparent', padding: 10, alignItems: 'right' }}>
                </Icon>
              </TouchableOpacity>

            </View>
          </Camera>
        </View>
      );
    }
  }
}
