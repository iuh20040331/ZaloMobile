import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { Icon } from 'react-native-paper';
import styles from './styles';

/**
 * A custom pressable item component.
 *
 * @param {object} props - The component props.
 * @param {object} props.navigation - The navigation object.
 * @param {object} props.navParams - The params to pass to the next screen. Include the screen name and the params.
 * @param {object} props.navParams.screen - The name of the screen to navigate to.
 * @param {object} props.navParams.params - The params to pass to the next screen.
 * @param {string} props.icon - The source of the icon.
 * @param {object} props.iconStyle - The custom style for the icon.
 * @param {string} props.title - The title of the item.
 * @param {object} props.titleStyle - The custom style for the title.
 * @param {string} props.subtitle - The subtitle of the item.
 * @param {ReactNode} props.action - The action component to render.
 * @param {ReactNode} props.actionRight - The action component to render on the right side.
 * @param {object} props.style - The custom style for the component.
 * @returns {ReactNode} The rendered pressable item component.
 */

export const PressableItem = ({
   navigation,
   navParams,
   icon,
   iconStyle,
   title,
   titleStyle,
   subtitle,
   action,
   actionRight,
   ...props
}) => {
   return (
      <Pressable
         style={[props.style, styles.container, props.disabled ? { opacity: 0.6 } : {}]}
         onPress={action ? action : () => (navParams ? navigation.navigate(navParams.screen, navParams.params) : null)}
         disabled={props.disabled}
      >
         <Icon source={icon} size={22} color="#375FD1" {...iconStyle} />
         <View style={styles.textContainer}>
            <Text style={[styles.title, { ...titleStyle }]}>{title}</Text>
            {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
         </View>
         <View style={{ marginLeft: 'auto' }}>
            {actionRight === null ? null : actionRight ? (
               actionRight
            ) : (
               <Icon source="chevron-right" size={22} color="#999" />
            )}
         </View>
      </Pressable>
   );
};
