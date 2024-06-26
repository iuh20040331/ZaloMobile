import { Dimensions, StyleSheet } from 'react-native';
const win = Dimensions.get('window');

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'space-between',
   },
   chatContainer: {
      flexDirection: 'row',
      alignItems: 'center',
   },
   input: {
      fontSize: 16,
      flex: 1,
   },
   modalContainer: {
      padding: 4,
      backgroundColor: '#E2E8F1',
      width: '80%',
      alignSelf: 'center',
      borderRadius: 10,
   },
   modalActionContainer: {
      alignItems: 'flex-end',
      rowGap: 6,
      backgroundColor: '#E2E8F1',
      borderRadius: 10,
   },
   messageContainer: {
      alignSelf: 'flex-start',
      borderRadius: 10,
      overflow: 'hidden',
      marginVertical: 2,
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderColor: '#c8c8c8',
      backgroundColor: '#fff',
   },
   imageMessage: {
      width: win.width * 0.7,
      height: win.height * 0.3,
      objectFit: 'fill',
      borderRadius: 10,
      alignSelf: 'center',
   },
   emojiContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 10,
      gap: 6,
   },
   emoji: {
      fontSize: 28,
   },
   replyModalContainer: {
      paddingLeft: 6,
      backgroundColor: '#fff',
      width: '100%',
      elevation: 1,
      justifyContent: 'space-between',
      borderTopLeftRadius: 12,
      borderTopRightRadius: 12,
      flexDirection: 'row',
      alignItems: 'center',
   },
});

export default styles;
