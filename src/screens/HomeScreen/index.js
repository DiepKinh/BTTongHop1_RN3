import axios from 'axios';
import React, {Component} from 'react';
import {FlatList, Image, StyleSheet, View} from 'react-native';
import {getListGame} from '../../api';
import {BackgroundView, Text} from '../../components';
import {COLORS} from '../../themes/styles';
import {mapIP} from '../../utils/common';
import {screenName} from '../../utils/constant';
import GameItem from './components/GameItem';
import styles from './styles';
export default class HomeScreen extends Component {
  state = {
    listGame: [],
    gameDetail: {},
    loading: true,
  };
  componentDidMount() {
    getListGame()
      .then(result => {
        const listGame = mapIP(result.data);

        console.log('gameDetail change IP:', listGame);

        this.setState({listGame, loading: false});
      })
      .catch(error => {
        console.log(error);
        this.setState({loading: false});
      });
  }
  render() {
    const {listGame, loading} = this.state;
    const {navigation} = this.props;
    return (
      <BackgroundView>
        {!loading && (
          <>
            <View style={styles.headerContainer}>
              <View>
                <Text style={styles.headerText}>
                  Hello <Text style={styles.fontBold}>CyberSoft </Text>
                </Text>
                <Text>Best game for today</Text>
              </View>
              <View style={styles.avatar}></View>
            </View>
            <FlatList
              data={listGame}
              showsVerticalScrollIndicator={false}
              renderItem={({item}) => (
                <GameItem
                  gameItem={item}
                  onPress={() =>
                    navigation.navigate(screenName.detail, {id: item.id})
                  }
                />
              )}
              ItemSeparatorComponent={() => <View style={{height: 70}} />}
              contentContainerStyle={{paddingBottom: 100}}
            />
          </>
        )}
      </BackgroundView>
    );
  }
}
