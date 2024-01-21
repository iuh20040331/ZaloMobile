import { View, Text, Image, Platform, Pressable } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';

export const ChatItem = ({ navigation, data }) => {
   const { name, message, time, avatar } = data;
   const [numberMessageUnread, setNumberMessageUnread] = useState(data.numberMessageUnread || 0);
   return (
      <Pressable style={styles.container} onPress={() => navigation.navigate('Chat')}>
         <Image source={{ uri: avatar }} style={styles.image} />
         <View style={styles.contentContainer}>
            <View style={{ flex: 1, marginLeft: 10, rowGap: 4 }}>
               <Text style={styles.name}>{name}</Text>
               <Text style={styles.message}>{message}</Text>
            </View>
            <View style={{ alignItems: 'center', rowGap: 4 }}>
               <Text style={styles.time}>{time}</Text>
               {numberMessageUnread ? (
                  <Text numberOfLines={1} ellipsizeMode="tail" style={styles.qtyNotification}>
                     {numberMessageUnread >= 5 ? '5+' : numberMessageUnread}
                  </Text>
               ) : (
                  ''
               )}
            </View>
         </View>
      </Pressable>
   );
};