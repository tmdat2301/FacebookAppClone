import React, {useState, useMemo, useContext} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
  Modal,
} from 'react-native';
import FIcon from 'react-native-vector-icons/Fontisto';
import FAIcon from 'react-native-vector-icons/FontAwesome5';
import UserIcon from 'react-native-vector-icons/FontAwesome';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import EIcon from 'react-native-vector-icons/Entypo';
import OIcon from 'react-native-vector-icons/Octicons';
import RadioGroup from 'react-native-radio-buttons-group';
import {useTranslation} from 'react-i18next';
import {ThemeContext} from '../ThemeContext';
import {
  AppText,
  AppTextShortcut,
  TextAAA,
  TextDDD,
} from '../components/AppText/AppText';
import {
  ConAndRe,
  HeadView,
  ShortCutItem,
} from '../components/AppButton/AppButton';
import {IconBack, IconSearch} from '../components/AppButton/AppIcon';

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  Header: {
    flexDirection: 'row',
    height: 56,
    width: '100%',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
  },
  HeadView: {
    height: 280,
    marginLeft: 16,
    marginRight: 16,
    backgroundColor: '#fff',
    marginTop: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 2,
  },
  SubHeadView: {
    flexDirection: 'row',
    height: 90,
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 20,
    backgroundColor: '#fff',
    marginTop: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 2,
  },
  Icon: {
    fontSize: 22,
    color: 'black',
  },
  MetaIcon: {
    fontSize: 20,
    color: '#205EE4',
    marginRight: 5,
  },
  SubIcon: {
    fontSize: 26,
    color: '#646466',
    marginRight: 10,
  },
  HeadText: {
    fontSize: 18,
    color: 'black',
    fontWeight: 600,
  },
  SubHeadText1: {
    fontSize: 18,
    color: 'black',
    fontWeight: '400',
  },
  SubHeadTextSmall: {
    color: '#646466',
    fontSize: 14,
    marginRight: 18,
  },
  TextBlue: {
    marginTop: 20,
    color: '#205EE4',
    fontSize: 14,
    fontWeight: 'bold',
  },
  HeadTextContainer: {
    marginTop: 10,
    marginLeft: 16,
    marginRight: 16,
    height: '100%',
  },
  MetaRow: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  Separator: {
    marginLeft: 16,
    marginRight: 16,
    height: 0.7,
    backgroundColor: '#CCC',
  },
  SectionDevider: {
    width: '100%',
    height: 0.7,
    backgroundColor: '#CCC',
  },
  SecondSubHeadView: {
    flex: 3,
    marginLeft: 16,
    marginTop: 16,
  },
  PrivacyIcon: {
    color: '#2373FF',
    fontSize: 50,
    marginRight: 8,
    alignSelf: 'center',
  },
  LargeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  SectionContainer: {
    width: '100%',
    marginTop: 10,
    marginLeft: 16,
    marginBottom: 10,
  },
  SectionText: {
    marginBottom: 20,
  },
  TextPre: {
    flexDirection: 'column',
  },
  Row: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  ResizeIcon: {
    fontSize: 22,
    color: '#646466',
    marginRight: 12,
    marginLeft: 2,
  },
  modalView: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: '#000',
    borderColor: '#D0D0D0',
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowOffset: {
      height: -10,
      width: 0,
    },
    elevation: 100,
  },
  HeaderDM: {
    flexDirection: 'row',
    height: 56,
    width: '100%',
    backgroundColor: '#fff',
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  HeadTextDM: {
    width: '85%',
    height: '100%',
    fontSize: 18,
    color: '#000',
    fontWeight: 600,
    textAlign: 'center',
    position: 'relative',
  },
});

const SettingDetailScreen = ({navigation}) => {
  const context = useContext(ThemeContext);
  const {t, i18n} = useTranslation();
  const [modalVisible, setModalVisible] = useState(false);

  const ModalView = () => {
    const radioButtons = useMemo(
      () => [
        {
          id: '1',
          label: t('on'),
          value: 'option1',
          color: 'blue',
          borderColor: '#ccc',
          labelStyle: {
            color: 'black',
            fontWeight: 500,
            fontSize: 16,
          },
        },
        {
          id: '2',
          label: t('off'),
          value: 'option2',
          color: 'blue',
          borderColor: '#ccc',

          labelStyle: {
            color: 'black',
            fontWeight: 500,
            fontSize: 16,
          },
        },
        {
          id: '3',
          label: t('system'),
          value: 'option3',
          color: 'blue',
          borderColor: '#ccc',

          labelStyle: {
            color: 'black',
            fontWeight: 500,
            fontSize: 16,
          },
        },
      ],
      [],
    );

    const [selectedId, setSelectedId] = useState();

    return (
      <RadioGroup
        radioButtons={radioButtons}
        onPress={setSelectedId}
        selectedId={selectedId}
        containerStyle={{alignItems: 'flex-start'}}
      />
    );
  };

  return (
    <>
      <ConAndRe style={styles.Container}>
        <ConAndRe style={styles.Header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <IconBack style={styles.Icon} />
          </TouchableOpacity>
          <AppText style={styles.HeadText}>{t('settings&Privacy')}</AppText>
          <TouchableOpacity>
            <IconSearch style={styles.Icon} />
          </TouchableOpacity>
        </ConAndRe>
        <ScrollView>
          <HeadView style={styles.HeadView}>
            <View style={styles.HeadTextContainer}>
              <View style={styles.MetaRow}>
                <FAIcon name="infinity" style={styles.MetaIcon} />
                <TextDDD style={styles.SubHeadText1}>{t('meta')}</TextDDD>
              </View>

              <TextDDD style={styles.SubHeadText1}>
                {t('accountsCenter')}
              </TextDDD>
              <TextAAA style={styles.SubHeadTextSmall}>
                {t('myceaasamt')}
              </TextAAA>
              <TouchableOpacity style={styles.MetaRow}>
                <MCIcon name="account-details" style={styles.SubIcon} />
                <TextAAA style={styles.SubHeadTextSmall}>
                  {t('personalDetails')}
                </TextAAA>
              </TouchableOpacity>
              <TouchableOpacity style={styles.MetaRow}>
                <MCIcon name="shield-lock-outline" style={styles.SubIcon} />
                <TextAAA style={styles.SubHeadTextSmall}>
                  {t('passwordAndSecurity')}
                </TextAAA>
              </TouchableOpacity>
              <TouchableOpacity style={styles.MetaRow}>
                <MCIcon
                  name="newspaper-variant-outline"
                  style={styles.SubIcon}
                />
                <TextAAA style={styles.SubHeadTextSmall}>
                  {t('adPreferences')}
                </TextAAA>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.TextBlue}>{t('smiac')}</Text>
              </TouchableOpacity>
            </View>
          </HeadView>
          <ShortCutItem style={styles.SubHeadView}>
            <View style={styles.SecondSubHeadView}>
              <AppTextShortcut style={styles.SubHeadText1}>
                {t('privacyCheckup')}
              </AppTextShortcut>
              <TextAAA style={styles.SubHeadTextSmall}>
                {t('agroyipass')}
              </TextAAA>
            </View>
            <View style={styles.PrivacyIcon}>
              <MCIcon name="archive-lock" style={styles.PrivacyIcon} />
            </View>
          </ShortCutItem>

          <View style={styles.Separator}></View>

          <View style={styles.SectionContainer}>
            <View style={styles.SectionText}>
              <AppTextShortcut style={styles.LargeText}>
                {t('preferences')}
              </AppTextShortcut>
              <TextAAA style={styles.SubHeadTextSmall}>{t('cyeof')}</TextAAA>
            </View>
            <View style={styles.TextPre}>
              <TouchableOpacity style={styles.Row}>
                <Icon name="ios-notifications" style={styles.SubIcon} />
                <AppTextShortcut style={styles.SubHeadText1}>
                  {t('notifications')}
                </AppTextShortcut>
              </TouchableOpacity>
              <TouchableOpacity style={styles.Row}>
                <EIcon name="pin" style={styles.SubIcon} />
                <AppTextShortcut style={styles.SubHeadText1}>
                  {t('navigationBar')}
                </AppTextShortcut>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('LanguageAndRegionScreen')}
                style={styles.Row}>
                <Icon name="globe-sharp" style={styles.SubIcon} />
                <AppTextShortcut style={styles.SubHeadText1}>
                  {t('languageAndRegion')}
                </AppTextShortcut>
              </TouchableOpacity>
              <TouchableOpacity style={styles.Row}>
                <MCIcon name="play-box-multiple" style={styles.SubIcon} />
                <AppTextShortcut style={styles.SubHeadText1}>
                  {t('media')}
                </AppTextShortcut>
              </TouchableOpacity>
              <TouchableOpacity style={styles.Row}>
                <MCIcon name="clock-time-four" style={styles.SubIcon} />
                <AppTextShortcut style={styles.SubHeadText1}>
                  {t('ytof')}
                </AppTextShortcut>
              </TouchableOpacity>
              <TouchableOpacity style={styles.Row}>
                <OIcon name="browser" style={styles.ResizeIcon} />
                <AppTextShortcut style={styles.SubHeadText1}>
                  {t('browser')}
                </AppTextShortcut>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setModalVisible(true)}
                style={styles.Row}>
                <Icon name="moon" style={styles.ResizeIcon} />
                <AppTextShortcut style={styles.SubHeadText1}>
                  {t('darkMode')}
                </AppTextShortcut>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.Separator}></View>

          <View style={styles.SectionContainer}>
            <View style={styles.SectionText}>
              <AppTextShortcut style={styles.LargeText}>
                {t('audienceAndVisibility')}
              </AppTextShortcut>
              <TextAAA style={styles.SubHeadTextSmall}>
                {t('cwcsypsap')}
              </TextAAA>
            </View>
            <View style={styles.TextPre}>
              <TouchableOpacity style={styles.Row}>
                <UserIcon name="user-circle-o" style={styles.SubIcon} />
                <AppTextShortcut style={styles.SubHeadText1}>
                  {t('profileDetails')}
                </AppTextShortcut>
              </TouchableOpacity>
              <TouchableOpacity style={styles.Row}>
                <MCIcon name="contacts" style={styles.SubIcon} />
                <AppTextShortcut style={styles.SubHeadText1}>
                  {t('hpfacy')}
                </AppTextShortcut>
              </TouchableOpacity>
              <TouchableOpacity style={styles.Row}>
                <MCIcon
                  name="newspaper-variant-outline"
                  style={styles.SubIcon}
                />
                <AppTextShortcut style={styles.SubHeadText1}>
                  {t('posts')}
                </AppTextShortcut>
              </TouchableOpacity>
              <TouchableOpacity style={styles.Row}>
                <MIcon name="photo-library" style={styles.SubIcon} />
                <AppTextShortcut style={styles.SubHeadText1}>
                  {t('stories')}
                </AppTextShortcut>
              </TouchableOpacity>
              <TouchableOpacity style={styles.Row}>
                <MCIcon name="movie-open-play" style={styles.SubIcon} />
                <AppTextShortcut style={styles.SubHeadText1}>
                  {t('reels')}
                </AppTextShortcut>
              </TouchableOpacity>
              <TouchableOpacity style={styles.Row}>
                <FAIcon name="tag" style={styles.ResizeIcon} />
                <AppTextShortcut style={styles.SubHeadText1}>
                  {t('profileAndTagging')}
                </AppTextShortcut>
              </TouchableOpacity>
              <TouchableOpacity style={styles.Row}>
                <MIcon name="block" style={styles.SubIcon} />
                <AppTextShortcut style={styles.SubHeadText1}>
                  {t('blocking')}
                </AppTextShortcut>
              </TouchableOpacity>
              <TouchableOpacity style={styles.Row}>
                <FIcon name="radio-btn-active" style={styles.ResizeIcon} />
                <AppTextShortcut style={styles.SubHeadText1}>
                  {t('activeStatus')}
                </AppTextShortcut>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.Separator}></View>

          <View style={styles.SectionContainer}>
            <View style={styles.SectionText}>
              <AppTextShortcut style={styles.LargeText}>
                {t('yourActivity')}
              </AppTextShortcut>
              <TextAAA style={styles.SubHeadTextSmall}>
                {t('aaloyaacsoyvs')}
              </TextAAA>
            </View>
            <View style={styles.TextPre}>
              <TouchableOpacity style={styles.Row}>
                <MIcon name="local-activity" style={styles.SubIcon} />
                <AppTextShortcut style={styles.SubHeadText1}>
                  {t('activityLog')}
                </AppTextShortcut>
              </TouchableOpacity>
              <TouchableOpacity style={styles.Row}>
                <MCIcon name="devices" style={styles.SubIcon} />
                <AppTextShortcut style={styles.SubHeadText1}>
                  {t('devicePermissions')}
                </AppTextShortcut>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.Separator}></View>

          <View style={styles.SectionContainer}>
            <View style={styles.SectionText}>
              <AppTextShortcut style={styles.LargeText}>
                {t('csalp')}
              </AppTextShortcut>
            </View>
            <View style={styles.TextPre}>
              <TouchableOpacity style={styles.Row}>
                <EIcon name="book" style={styles.SubIcon} />
                <AppTextShortcut style={styles.SubHeadText1}>
                  {t('termsOfService')}
                </AppTextShortcut>
              </TouchableOpacity>
              <TouchableOpacity style={styles.Row}>
                <MCIcon name="database-arrow-left" style={styles.SubIcon} />
                <AppTextShortcut style={styles.SubHeadText1}>
                  {t('privacyPolicy')}
                </AppTextShortcut>
              </TouchableOpacity>
              <TouchableOpacity style={styles.Row}>
                <MCIcon name="arrow-collapse-vertical" style={styles.SubIcon} />
                <AppTextShortcut style={styles.SubHeadText1}>
                  {t('cookiesPolicy')}
                </AppTextShortcut>
              </TouchableOpacity>
              <TouchableOpacity style={styles.Row}>
                <MCIcon name="check-decagram" style={styles.SubIcon} />
                <AppTextShortcut style={styles.SubHeadText1}>
                  {t('communityStandards')}
                </AppTextShortcut>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.centeredView}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                setModalVisible(false);
              }}>
              <View style={styles.modalView}>
                <View style={styles.HeaderDM}>
                  <TouchableOpacity onPress={() => setModalVisible(false)}>
                    <FIcon name="angle-left" style={styles.Icon} />
                  </TouchableOpacity>
                  <Text style={styles.HeadTextDM}>{t('DarkMode')}</Text>
                </View>
                <View style={styles.SectionDevider}></View>
                <ModalView />
                <Text style={{fontSize: 16, marginLeft: 16}}>
                  {t('subSystem')}
                </Text>
              </View>
            </Modal>
          </View>
        </ScrollView>
      </ConAndRe>
    </>
  );
};

export default SettingDetailScreen;
