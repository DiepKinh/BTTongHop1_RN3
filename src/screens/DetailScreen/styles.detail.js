import {StyleSheet} from 'react-native';
import {COLORS} from '../../themes/styles';

export default StyleSheet.create({
  banerContainer: {
    flex: 2,
    width: '100%',
  },
  iconBack: {
    position: 'absolute',
    top: 20,
    left: 10,
    height: 40,
    width: 40,
    backgroundColor: COLORS.opacityBlack,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoContainer: {
    flex: 1,
    paddingHorizontal: 15,
    justifyContent: 'center',
  },
  topInfoContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 10,
  },
  iconGame: {
    height: 80,
    width: 80,
    borderRadius: 8,
    // shadowColor: COLORS.black,
    // shadowOpacity: 0.5,
    // shadowOffset: {
    //   width: 10,
    //   height: 10,
    // },
    // shadowRadius: 10,
    // elevation: 40,
  },
  topInfoTextContent: {
    width: '60%',
  },
  dowloadIcon: {
    height: 40,
    width: 40,
    backgroundColor: COLORS.lightPurple,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  botInfoContenr: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  starContent: {
    flexDirection: 'row',
  },
  previewContainer: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  previewItem: {
    width: 350,
    height: 200,
    borderRadius: 10,
  },
  listPreview: {
    flexGrow: 0,
    marginLeft: 15,
  },
});
