import React, { Component } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
export default class PaymentMethods extends Component {


    static navigationOptions = ({ navigation }) => ({
        title: 'Select Your Payment',
        headerTintColor: '#BC261A',
        headerTitleStyle: {
          fontSize: 20,
        },
      });
    
    render() {
        const { navigate } = this.props.navigation
        return (
            <Container>
                <Header />
                <Content>
                    <Card>
                        <TouchableOpacity    onPress={() => navigate('PaymentScreens')}  >
                        <CardItem>
                            <Left>
                                <Thumbnail source={{ uri: 'https://cdn1.iconfinder.com/data/icons/credit-card-icons/512/visa.png' }} />
                                <Body>
                                    <Text>Credit Card</Text>
                                    <Text note>John Kimble</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem cardBody>
                            <Image source={{ uri: 'https://www.inspiruscu.org/wp-content/uploads/2016/04/signature_card.jpg' }} style={{ height: 200, width: null, flex: 1 }} />
                        </CardItem>
                        </TouchableOpacity>
                        <TouchableOpacity    onPress={() => navigate('PaymentScreens')}   >
                        <CardItem>
                            <Left>
                                <Thumbnail source={{ uri: 'https://satoshiwatch.com/wp-content/uploads/2017/03/DASH-Icon.png' }} />
                                <Body>
                                    <Text>Dash Wallet</Text>
                                    <Text note>Peter Hanks</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem cardBody>
                            <Image source={{ uri: 'https://www.dash.org/assets/img/blog/dash-debit-card_copy.jpg' }} style={{ height: 200, width: null, flex: 1 }} />
                        </CardItem>
                        </TouchableOpacity>
                        
                    </Card>
                </Content>
            </Container>
        );
    }
}