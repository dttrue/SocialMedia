import {StyleSheet} from 'react-native';
import { getFontFamily } from '../../assets/fonts/helper';
import { scaleFontSize } from '../../assets/styles/scaling';

const style = StyleSheet.create({
  title: {
    color: '#022150',
    fontSize: scaleFontSize(3),
    fontWeight: '600',
    fontFamily: getFontFamily('Inter', '600'),
    fontStyle: 'normal',
    letterSpacing: 0.48,
  },
});

export default style;
