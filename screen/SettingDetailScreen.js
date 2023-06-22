import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import FIcon from 'react-native-vector-icons/Fontisto';
import FAIcon from 'react-native-vector-icons/FontAwesome5';
import UserIcon from 'react-native-vector-icons/FontAwesome';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import EIcon from 'react-native-vector-icons/Entypo';
import OIcon from 'react-native-vector-icons/Octicons';

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
    marginRight: 8,
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
  SectionDevider:{
   width:'100%',
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
});

const SettingDetailScreen = ({navigation}) => {
  return (
    <>
      <View style={styles.Container}>
        <View style={styles.Header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <FIcon name="angle-left" style={styles.Icon} />
          </TouchableOpacity>
          <Text style={styles.HeadText}>Settings & privacy</Text>
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
                <Text style={styles.SubHeadText}>Meta</Text>
              </View>

              <Text style={styles.SubHeadText}>Accounts Center</Text>
              <Text style={styles.SubHeadTextSmall}>
                Manage your connected experiences and account settings across
                Meta technologies
              </Text>
              <TouchableOpacity style={styles.MetaRow}>
                <MCIcon name="account-details" style={styles.SubIcon} />
                <Text style={styles.SubHeadTextSmall}>Personal details</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.MetaRow}>
                <MCIcon name="shield-lock-outline" style={styles.SubIcon} />
                <Text style={styles.SubHeadTextSmall}>
                  Password and security
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.MetaRow}>
                <MCIcon
                  name="newspaper-variant-outline"
                  style={styles.SubIcon}
                />
                <Text style={styles.SubHeadTextSmall}>Ad Preferences</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.TextBlue}>See more in Accounts Center</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity style={styles.SubHeadView}>
            <View style={styles.SecondSubHeadView}>
              <Text style={styles.SubHeadText}>Privacy Checkup</Text>
              <Text style={styles.SubHeadTextSmall}>
                A guided review of your important privacy and security settings.
              </Text>
            </View>
            <View style={styles.PrivacyIcon}>
              <MCIcon name="archive-lock" style={styles.PrivacyIcon} />
            </View>
          </TouchableOpacity>

          <View style={styles.Separator}></View>

          <View style={styles.SectionContainer}>
            <View style={styles.SectionText}>
              <Text style={styles.LargeText}>Preferences</Text>
              <Text style={styles.SubHeadTextSmall}>
                Customize your experience on Facebook.
              </Text>
            </View>
            <View style={styles.TextPre}>
              <TouchableOpacity style={styles.Row}>
                <Icon name="ios-notifications" style={styles.SubIcon} />
                <Text style={styles.SubHeadText}>Notifications</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.Row}>
                <EIcon name="pin" style={styles.SubIcon} />
                <Text style={styles.SubHeadText}>Navigation bar</Text>
              </TouchableOpacity>
              <TouchableOpacity
              onPress={()=>navigation.navigate('LanguageAndRegionScreen')}
              style={styles.Row}>
                <Icon name="globe-sharp" style={styles.SubIcon} />
                <Text style={styles.SubHeadText}>Language and region</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.Row}>
                <MCIcon name="play-box-multiple" style={styles.SubIcon} />
                <Text style={styles.SubHeadText}>Media</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.Row}>
                <MCIcon name="clock-time-four" style={styles.SubIcon} />
                <Text style={styles.SubHeadText}>Your Time on Facebook</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.Row}>
                <OIcon name="browser" style={styles.ResizeIcon} />
                <Text style={styles.SubHeadText}>Browser</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.Row}>
                <Icon name="moon" style={styles.ResizeIcon} />
                <Text style={styles.SubHeadText}>Dark mode</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.Separator}></View>

          <View style={styles.SectionContainer}>
            <View style={styles.SectionText}>
              <Text style={styles.LargeText}>Audience and visibility</Text>
              <Text style={styles.SubHeadTextSmall}>
                Control who can see your posts, stories and profile.
              </Text>
            </View>
            <View style={styles.TextPre}>
              <TouchableOpacity style={styles.Row}>
                <UserIcon name="user-circle-o" style={styles.SubIcon} />
                <Text style={styles.SubHeadText}>Profile details</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.Row}>
                <MCIcon name="contacts" style={styles.SubIcon} />
                <Text style={styles.SubHeadText}>
                  How people find and contact you
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.Row}>
                <MCIcon
                  name="newspaper-variant-outline"
                  style={styles.SubIcon}
                />
                <Text style={styles.SubHeadText}>Posts</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.Row}>
                <MIcon name="photo-library" style={styles.SubIcon} />
                <Text style={styles.SubHeadText}>Stories</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.Row}>
                <MCIcon name="movie-open-play" style={styles.SubIcon} />
                <Text style={styles.SubHeadText}>Reels</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.Row}>
                <FAIcon name="tag" style={styles.ResizeIcon} />
                <Text style={styles.SubHeadText}>Profile and Tagging</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.Row}>
                <MIcon name="block" style={styles.SubIcon} />
                <Text style={styles.SubHeadText}>Blocking</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.Row}>
                <FIcon name="radio-btn-active" style={styles.ResizeIcon} />
                <Text style={styles.SubHeadText}>Active Status</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.Separator}></View>

          <View style={styles.SectionContainer}>
            <View style={styles.SectionText}>
              <Text style={styles.LargeText}>Your activity</Text>
              <Text style={styles.SubHeadTextSmall}>
                Access a log of your activity and control storage of your voice
                searches.
              </Text>
            </View>
            <View style={styles.TextPre}>
              <TouchableOpacity style={styles.Row}>
                <MIcon name="local-activity" style={styles.SubIcon} />
                <Text style={styles.SubHeadText}>Activity log</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.Row}>
                <MCIcon name="devices" style={styles.SubIcon} />
                <Text style={styles.SubHeadText}>Device permissions</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.Separator}></View>

          <View style={styles.SectionContainer}>
            <View style={styles.SectionText}>
              <Text style={styles.LargeText}>
                Community Standards and Legal Policies
              </Text>
            </View>
            <View style={styles.TextPre}>
              <TouchableOpacity style={styles.Row}>
                <EIcon name="book" style={styles.SubIcon} />
                <Text style={styles.SubHeadText}>Terms of service</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.Row}>
                <MCIcon name="database-arrow-left" style={styles.SubIcon} />
                <Text style={styles.SubHeadText}>Privacy Policy</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.Row}>
                <MCIcon name="arrow-collapse-vertical" style={styles.SubIcon} />
                <Text style={styles.SubHeadText}>Cookies Policy</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.Row}>
                <MCIcon name="check-decagram" style={styles.SubIcon} />
                <Text style={styles.SubHeadText}>Community Standards</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default SettingDetailScreen;
