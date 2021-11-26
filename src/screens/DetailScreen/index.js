import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import {getGameId} from '../../api';
import {BackgroundView, Text} from '../../components';
import {mapIP} from '../../utils/common';
import AntIcon from 'react-native-vector-icons/AntDesign';
import styles from './styles.detail';
import {COLORS} from '../../themes/styles';
export default class DetailScreen extends Component {
  state = {
    game: {},
    loading: true,
  };

  renderStar = () => {
    let listStar = [];
    for (let i = 1; i <= 5; i++) {
      const color =
        Math.round(this.state.game.rating) >= i
          ? COLORS.lightPurple
          : COLORS.gray;
      listStar.push(<AntIcon name="star" color={color} size={16} />);
    }
    listStar.push(<Text>{this.state.game.rating}</Text>);
    return listStar;
  };
  componentDidMount() {
    getGameId(this.props.route.params.id)
      .then(res => {
        const game = mapIP(res.data);
        this.setState({game, loading: false});
      })
      .catch(err => {
        console.error(err);
        this.setState({loading: false});
      });
  }
  render() {
    console.log(this.props.route.params.id);
    const {navigation} = this.props;
    const {game, loading} = this.state;
    return (
      <BackgroundView edges={['bottom']}>
        {!loading && (
          <>
            <Image
              source={{uri: game.preview[0]}}
              style={styles.banerContainer}
            />
            <TouchableOpacity
              style={styles.iconBack}
              onPress={() => navigation.goBack()}>
              <AntIcon name="close" color={COLORS.white} size={30} />
            </TouchableOpacity>
            <View style={styles.infoContainer}>
              <View style={styles.topInfoContent}>
                <Image source={{uri: game.icon}} style={styles.iconGame} />
                <View style={styles.topInfoTextContent}>
                  <Text title>{game.title}</Text>
                  <Text subTitle>{game.subTitle}</Text>
                </View>
                <View style={styles.dowloadIcon}>
                  <AntIcon
                    name="clouddownloado"
                    color={COLORS.white}
                    size={30}
                  />
                </View>
              </View>
              <View style={styles.botInfoContenr}>
                <View style={styles.starContent}>{this.renderStar()}</View>
                <Text>{game.age}</Text>
                <Text>Game for the day</Text>
              </View>
            </View>
            <View style={styles.previewContainer}>
              <FlatList
                snapToInterval={350}
                decelerationRate="fast"
                style={styles.listPreview}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{paddingRight: 15}}
                horizontal
                data={game.preview}
                renderItem={({item}) => (
                  <Image source={{uri: item}} style={styles.previewItem} />
                )}
                ItemSeparatorComponent={() => <View style={{width: 20}} />}
              />
              <View style={{paddingHorizontal: 15}}>
                <Text subTitle>{game.description}</Text>
              </View>
            </View>
          </>
        )}
      </BackgroundView>
    );
  }
}
