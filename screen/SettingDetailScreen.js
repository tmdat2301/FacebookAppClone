import React, {useState,useMemo} from 'react';
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
import RadioGroup from 'react-native-radio-buttons-group'
import {useTranslation} from 'react-i18next';

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
  SubHeadText: {
    fontSize: 18,
    color: 'black',
    fontWeight: '500',
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
  const {t, i18n} = useTranslation();
  const [modalVisible, setModalVisible] = useState(false);

  const ModalView=()=>{
    const radioButtons = useMemo(() => ([
      {
          id: '1',
          label: t('on'),
          value: 'option1',
          color:'blue',
          borderColor:'#ccc',
          labelStyle:{
            color:'black',
            fontWeight:500,
            fontSize:16
          }
      },
      {
          id: '2',
          label: t('off'),
          value: 'option2',
          color:'blue',
          borderColor:'#ccc',

          labelStyle:{
            color:'black',
            fontWeight:500,
            fontSize:16
          }
      },
      {
          id: '3',
          label: t('system'),
          value: 'option3',
          color:'blue',
          borderColor:'#ccc',

          labelStyle:{
            color:'black',
            fontWeight:500,
            fontSize:16
          }
      }
  ]), []);

  const [selectedId, setSelectedId] = useState();

  return (
      <RadioGroup 
          radioButtons={radioButtons} 
          onPress={setSelectedId}
          selectedId={selectedId}
          containerStyle={{alignItems:'flex-start'}}
      />
  );
  }

  return (
    <>
      <View style={styles.Container}>
        <View style={styles.Header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <FIcon name="angle-left" style={styles.Icon} />
          </TouchableOpacity>
          <Text style={styles.HeadText}>{t('settings&Privacy')}</Text>
          <TouchableOpacity>
            <FIcon name="search" style={styles.Icon} />
          </TouchableOpacity>
        </View>
        <View style={styles.SectionDevider}></View>
        <ScrollView>
          <View style={styles.HeadView}>
            <View style={styles.HeadTextContainer}>
              <View style={styles.MetaRow}>
                <FAIcon name="infinity" style={styles.MetaIcon} />
                <Text style={styles.SubHeadText}>{t('meta')}</Text>
              </View>

              <Text style={styles.SubHeadText}>{t('accountsCenter')}</Text>
              <Text style={styles.SubHeadTextSmall}>{t('myceaasamt')}</Text>
              <TouchableOpacity style={styles.MetaRow}>
                <MCIcon name="account-details" style={styles.SubIcon} />
                <Text style={styles.SubHeadTextSmall}>
                  {t('personalDetails')}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.MetaRow}>
                <MCIcon name="shield-lock-outline" style={styles.SubIcon} />
                <Text style={styles.SubHeadTextSmall}>
                  {t('passwordAndSecurity')}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.MetaRow}>
                <MCIcon
                  name="newspaper-variant-outline"
                  style={styles.SubIcon}
                />
                <Text style={styles.SubHeadTextSmall}>
                  {t('adPreferences')}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.TextBlue}>{t('smiac')}</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity style={styles.SubHeadView}>
            <View style={styles.SecondSubHeadView}>
              <Text style={styles.SubHeadText}>{t('privacyCheckup')}</Text>
              <Text style={styles.SubHeadTextSmall}>{t('agroyipass')}</Text>
            </View>
            <View style={styles.PrivacyIcon}>
              <MCIcon name="archive-lock" style={styles.PrivacyIcon} />
            </View>
          </TouchableOpacity>

          <View style={styles.Separator}></View>

          <View style={styles.SectionContainer}>
            <View style={styles.SectionText}>
              <Text style={styles.LargeText}>{t('preferences')}</Text>
              <Text style={styles.SubHeadTextSmall}>{t('cyeof')}</Text>
            </View>
            <View style={styles.TextPre}>
              <TouchableOpacity style={styles.Row}>
                <Icon name="ios-notifications" style={styles.SubIcon} />
                <Text style={styles.SubHeadText}>{t('notifications')}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.Row}>
                <EIcon name="pin" style={styles.SubIcon} />
                <Text style={styles.SubHeadText}>{t('navigationBar')}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('LanguageAndRegionScreen')}
                style={styles.Row}>
                <Icon name="globe-sharp" style={styles.SubIcon} />
                <Text style={styles.SubHeadText}>{t('languageAndRegion')}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.Row}>
                <MCIcon name="play-box-multiple" style={styles.SubIcon} />
                <Text style={styles.SubHeadText}>{t('media')}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.Row}>
                <MCIcon name="clock-time-four" style={styles.SubIcon} />
                <Text style={styles.SubHeadText}>{t('ytof')}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.Row}>
                <OIcon name="browser" style={styles.ResizeIcon} />
                <Text style={styles.SubHeadText}>{t('browser')}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setModalVisible(true)}
                style={styles.Row}>
                <Icon name="moon" style={styles.ResizeIcon} />
                <Text style={styles.SubHeadText}>{t('darkMode')}</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.Separator}></View>

          <View style={styles.SectionContainer}>
            <View style={styles.SectionText}>
              <Text style={styles.LargeText}>{t('audienceAndVisibility')}</Text>
              <Text style={styles.SubHeadTextSmall}>{t('cwcsypsap')}</Text>
            </View>
            <View style={styles.TextPre}>
              <TouchableOpacity style={styles.Row}>
                <UserIcon name="user-circle-o" style={styles.SubIcon} />
                <Text style={styles.SubHeadText}>{t('profileDetails')}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.Row}>
                <MCIcon name="contacts" style={styles.SubIcon} />
                <Text style={styles.SubHeadText}>{t('hpfacy')}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.Row}>
                <MCIcon
                  name="newspaper-variant-outline"
                  style={styles.SubIcon}
                />
                <Text style={styles.SubHeadText}>{t('posts')}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.Row}>
                <MIcon name="photo-library" style={styles.SubIcon} />
                <Text style={styles.SubHeadText}>{t('stories')}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.Row}>
                <MCIcon name="movie-open-play" style={styles.SubIcon} />
                <Text style={styles.SubHeadText}>{t('reels')}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.Row}>
                <FAIcon name="tag" style={styles.ResizeIcon} />
                <Text style={styles.SubHeadText}>{t('profileAndTagging')}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.Row}>
                <MIcon name="block" style={styles.SubIcon} />
                <Text style={styles.SubHeadText}>{t('blocking')}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.Row}>
                <FIcon name="radio-btn-active" style={styles.ResizeIcon} />
                <Text style={styles.SubHeadText}>{t('activeStatus')}</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.Separator}></View>

          <View style={styles.SectionContainer}>
            <View style={styles.SectionText}>
              <Text style={styles.LargeText}>{t('yourActivity')}</Text>
              <Text style={styles.SubHeadTextSmall}>{t('aaloyaacsoyvs')}</Text>
            </View>
            <View style={styles.TextPre}>
              <TouchableOpacity style={styles.Row}>
                <MIcon name="local-activity" style={styles.SubIcon} />
                <Text style={styles.SubHeadText}>{t('activityLog')}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.Row}>
                <MCIcon name="devices" style={styles.SubIcon} />
                <Text style={styles.SubHeadText}>{t('devicePermissions')}</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.Separator}></View>

          <View style={styles.SectionContainer}>
            <View style={styles.SectionText}>
              <Text style={styles.LargeText}>{t('csalp')}</Text>
            </View>
            <View style={styles.TextPre}>
              <TouchableOpacity style={styles.Row}>
                <EIcon name="book" style={styles.SubIcon} />
                <Text style={styles.SubHeadText}>{t('termsOfService')}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.Row}>
                <MCIcon name="database-arrow-left" style={styles.SubIcon} />
                <Text style={styles.SubHeadText}>{t('privacyPolicy')}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.Row}>
                <MCIcon name="arrow-collapse-vertical" style={styles.SubIcon} />
                <Text style={styles.SubHeadText}>{t('cookiesPolicy')}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.Row}>
                <MCIcon name="check-decagram" style={styles.SubIcon} />
                <Text style={styles.SubHeadText}>
                  {t('communityStandards')}
                </Text>
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
                <ModalView/>
                <Text style={{fontSize:16,marginLeft:16}}>{t('subSystem')}</Text>
              </View>
            </Modal>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default SettingDetailScreen;
