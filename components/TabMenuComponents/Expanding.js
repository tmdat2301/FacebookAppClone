import React, {useState, useContext} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import FIcon from 'react-native-vector-icons/Fontisto';
import AIcon from 'react-native-vector-icons/AntDesign';
import Collapsible from 'react-native-collapsible';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import {useTranslation} from 'react-i18next';
import {ThemeContext} from '../../ThemeContext';
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    flexDirection: 'column',
  },
  BlockElement: {
    flexDirection: 'row',
    width: '100%',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
  },
  Text: {
    color: 'black',
    fontSize: 18,
    marginLeft: 20,
  },
  TextHighlight: {
    color: 'black',
    fontSize: 18,
    marginLeft: 20,
    fontWeight: 500,
  },
  Icon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginRight: 20,
  },
  Separator: {
    width: '100%',
    height: 0.7,
    backgroundColor: '#D0D0D0',
  },
  CollapsedText: {
    fontSize: 16,
    color: 'black',
  },
  collapsedButton: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginLeft: 16,
    marginRight: 16,
    marginTop: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 1,
  },
  SubIcon: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 15,
    marginBottom: 15,
    color: '#B1C9CF',
    fontSize: 22,
  },
});
import {useNavigation} from '@react-navigation/native';
import {AppText, AppTextBold, AppTextShortcut} from '../AppText/AppText';
import {IconExpandDown, IconExpandUp} from '../AppButton/AppIcon';
import {SettingItem, ShortCutItem} from '../AppButton/AppButton';

const Expanding = ({}) => {
  const {t, i18n} = useTranslation();
  const context = useContext(ThemeContext);
  const navigation = useNavigation();

  const Onpress = () => {
    navigation.navigate('SettingDetailScreen');
  };

  const [collapsed, setCollapsed] = useState(true);
  const handleExpand = () => {
    setCollapsed(!collapsed);
  };
  return (
    <View style={styles.Container}>
      <TouchableOpacity>
        <View style={styles.BlockElement}>
          <AIcon name="questioncircle" size={26} color="#B1C9CF" />
          <AppText style={styles.Text}>{t('help&Support')}</AppText>
          <View style={styles.Icon}>
            <IconExpandDown />
          </View>
        </View>
      </TouchableOpacity>

      <View style={styles.Separator}></View>
      <TouchableOpacity onPress={handleExpand}>
        <View style={styles.BlockElement}>
          <FIcon name="player-settings" color="#B1C9CF" size={26} />
          {collapsed ? (
            <AppText style={styles.Text}>{t('settings&Privacy')}</AppText>
          ) : (
            <AppTextBold style={styles.TextHighlight}>
              {t('settings&Privacy')}
            </AppTextBold>
          )}

          <View style={styles.Icon}>
            {collapsed ? <IconExpandDown /> : <IconExpandUp />}
          </View>
        </View>
      </TouchableOpacity>
      <Collapsible collapsed={collapsed}>
        <View>
          <SettingItem style={styles.collapsedButton}>
            <FAIcon style={styles.SubIcon} name="user-circle" />
            <AppTextShortcut style={styles.CollapsedText}>
              {t('settings')}
            </AppTextShortcut>
          </SettingItem>
          <ShortCutItem style={styles.collapsedButton}>
            <MIcon style={styles.SubIcon} name="perm-device-info" />
            <AppTextShortcut style={styles.CollapsedText}>
              {t('deviceRequests')}
            </AppTextShortcut>
          </ShortCutItem>
          <ShortCutItem style={styles.collapsedButton}>
            <MIcon name="photo-camera-back" style={styles.SubIcon} />
            <AppTextShortcut style={styles.CollapsedText}>
              {t('recentAdActivity')}
            </AppTextShortcut>
          </ShortCutItem>
          <ShortCutItem style={styles.collapsedButton}>
            <AIcon name="wifi" style={styles.SubIcon} />
            <AppTextShortcut style={styles.CollapsedText}>
              {t('findWifi')}
            </AppTextShortcut>
          </ShortCutItem>
          <ShortCutItem style={styles.collapsedButton}>
            <MIcon name="payment" style={styles.SubIcon} />
            <AppTextShortcut style={styles.CollapsedText}>
              {t('ordersAndPayments')}
            </AppTextShortcut>
          </ShortCutItem>
        </View>
      </Collapsible>
    </View>
  );
};
export default Expanding;
