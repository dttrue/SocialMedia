import { StyleSheet } from 'react-native';
import { getFontFamily } from '../../assets/fonts/helper';

const style = StyleSheet.create({
    storyContainer: {
    marginRight: 20,
    },
    firstName: {
      color: '#022150',
      fontSize: 14,
      textAlign: 'center',
      fontFamily: getFontFamily('Inter', '500'),
      fontStyle: 'normal',
      marginTop: 8,
      letterSpacing: 0.14,
      lineHeight: 'normal',
    },
});

export default style;
