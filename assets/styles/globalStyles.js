import { StyleSheet } from 'react-native';
import { getFontFamily } from '../../assets/fonts/helper';

 const globalStyles = StyleSheet.create({
  header: {
    marginLeft: 27,
    marginRight: 17,
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  messageIcon: {
    padding: 14,
    backgroundColor: '#F9FAFB',
    borderRadius: 100,
  },
  messageNumberContainer: {
    position: 'absolute',
    top: 12,
    right: 10,
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: '#F35bac',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',

  },
  messageNumber: {
    color: '#fff',
    fontSize: 6,
    fontStyle: 'normal',
    fontFamily: getFontFamily('Inter', '600'),
    letterSpacing: 0.12,
    lineHeight: 8,
  },
  userStoryContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginHorizontal: 28,
  },
  userPostContainer: {
   marginHorizontal: 24,
  },
});

export default globalStyles;


