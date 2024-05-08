import { AntDesign, Entypo, Feather, Ionicons, MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Platform, Text, TextInput, View } from 'react-native';
import { Appbar, IconButton } from 'react-native-paper';
import { useSelector } from 'react-redux';
import styles from './styles';
import { ZegoSendCallInvitationButton } from '@zegocloud/zego-uikit-prebuilt-call-rn';

/**
 * Represents the header component of the app.
 * @param {object} navigation - The navigation object.
 * @param {object} props - Additional props for the header.
 * @param {string} type - The type of the header. Can be 'chat', 'message', 'contact' or 'personal'.
 * @returns {JSX.Element} The header component.
 */
export const HeaderApp = ({ navigation, props, type, id, title }) => {
   Platform.OS === 'ios' ? (height = 44) : (height = 56);
   const [search, setSearch] = useState('0981209501');
   const { info } = useSelector((state) => state.detailChat);

   return (
      <Appbar.Header {...props} mode="small" style={{ height: height, backgroundColor: '#4D9DF7' }}>
         {type === 'chat' ? (
            <>
               <Appbar.Action
                  color="#fff"
                  size={22}
                  icon={(props) => <Entypo {...props} name="chevron-thin-left" />}
                  onPress={() => navigation.navigate('AppTabs')}
                  animated={false}
               />
               <Appbar.Content
                  title={
                     <>
                        <Text style={{ color: '#fff', fontWeight: 500, fontSize: 20 }}>{title}</Text>
                        {info?.members ? (
                           <Text style={{ color: '#BBE5FE', fontWeight: '300' }}>
                              {info?.members.length} thành viên
                           </Text>
                        ) : null}
                     </>
                  }
               />
               {!info?.members ? (
                  <Appbar.Action
                     color="#fff"
                     size={24}
                     icon={(props) => (
                        <ZegoSendCallInvitationButton
                           invitees={[{ userID: String(info.id), userName: info.name }]}
                           key={info.id}
                           isVideoCall={false}
                           resourceID={'zego_call'}
                           width={32}
                           height={32}
                           backgroundColor={'transparent'}
                        />
                     )}
                     animated={false}
                  />
               ) : null}
               <Appbar.Action
                  color="#fff"
                  size={24}
                  icon={(props) => (
                     <ZegoSendCallInvitationButton
                        invitees={[{ userID: String(info.id), userName: info.name, avatar: info.image }]}
                        key={info.id}
                        isVideoCall={true}
                        resourceID={'zego_call'}
                        width={32}
                        height={32}
                        backgroundColor={'transparent'}
                     />
                  )}
                  animated={false}
                  onPress={() => {}}
               />
               {info?.members ? (
                  <Appbar.Action
                     color="#fff"
                     size={24}
                     icon={(props) => <Ionicons {...props} name="search" />}
                     animated={false}
                     onPress={() => {}}
                  />
               ) : null}
               <Appbar.Action
                  color="#fff"
                  size={24}
                  icon={(props) => <AntDesign {...props} name="bars" />}
                  animated={false}
                  onPress={() => navigation.navigate('DetailChatScreen', { id, member: info?.members })}
               />
            </>
         ) : (
            <>
               <Appbar.Content
                  title={
                     <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 12 }}>
                        <IconButton
                           icon={() => <Ionicons name="search-outline" size={22} color="white" />}
                           onPress={() => search.trim() && navigation.navigate('SearchScreen', { search: search })}
                        />
                        <TextInput
                           style={[styles.searchInput]}
                           placeholder="Tìm kiếm"
                           placeholderTextColor="#fff"
                           color="#fff"
                           fontSize={18}
                           value={search}
                           onChangeText={(text) => setSearch(text)}
                        />
                     </View>
                  }
                  onPress={() => {}}
               />
               {type === 'message' ? (
                  <>
                     <Appbar.Action
                        color="#fff"
                        size={20}
                        icon={(props) => <Ionicons {...props} name="qr-code-outline" />}
                        animated={false}
                        onPress={() => navigation.navigate('Camera', { type: 'qr' })}
                     />
                     <Appbar.Action
                        color="#fff"
                        size={26}
                        icon={(props) => <MaterialIcons {...props} name="group-add" />}
                        animated={false}
                        onPress={() => navigation.navigate('ManageGroupAndChatScreen', { type: 'addGroup' })}
                     />
                  </>
               ) : type === 'contact' ? (
                  <Appbar.Action
                     color="#fff"
                     size={22}
                     icon={(props) => <Ionicons {...props} name="person-add-outline" />}
                     animated={false}
                     onPress={() => {}}
                  />
               ) : null}
            </>
         )}
      </Appbar.Header>
   );
};
