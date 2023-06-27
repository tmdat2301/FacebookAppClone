import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import EIcon from 'react-native-vector-icons/Entypo';
import AIcon from 'react-native-vector-icons/AntDesign';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Avatar from './Avatar';
import { useTranslation } from 'react-i18next';

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  Header: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 6,
    paddingLeft: 11,
    paddingRight: 11,
  },
  Row: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  User: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222121',
  },
  Time: {
    fontSize: 12,
    color: '#747476',
  },
  Post: {
    fontSize: 14,
    color: '#222121',
    lineHeight: 16,
    paddingLeft: 11,
    paddingRight: 11,
  },
  Photo: {
    marginTop: 9,
    width: '100%',
    height: 300,
  },
  Footer: {
    paddingLeft: 11,
    paddingRight: 11,
  },
  FooterCount: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 9,
    paddingBottom: 9,
  },
  IconCount: {
    backgroundColor: '#1878f3',
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 6,
  },
  TextCount: {
    fontSize: 11,
    color: '#424040',
  },
  Separator: {
    width: '100%',
    height: 0.7,
    backgroundColor: '#D0D0D0',
  },
  FooterMenu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 9,
    paddingBottom: 9,
  },
  Button: {
    flexDirection: 'row',
  },
  Icon: {
    marginRight: 6,
  },
  Text: {
    fontSize: 12,
    color: '#424040',
    marginTop: 2,
  },
  BottomDivider: {
    width: '100%',
    height: 8,
    backgroundColor: '#D0D0D0',
  },
});

const Feed = ({feedData}) => {
  const {t}=useTranslation();
    return (
      <>
          <View style={styles.Container}>
            <View style={styles.Header}>
              <View style={styles.Row}>
                <Avatar source={{uri: feedData.user[0].avatar}} />
                <View style={{paddingLeft: 10}}>
                  <Text style={styles.User}>{feedData.user[0].name}</Text>
                  <View style={styles.Row}>
                    <Text style={styles.Time}>{feedData.user[0].time}</Text>
                    <EIcon name="dot-single" size={12} color="#747476" />
                    <EIcon name="globe" size={12} color="#747476" />
                  </View>
                </View>
              </View>
              <TouchableOpacity>
                <EIcon name="dots-three-horizontal" size={15} color="#222121" />
              </TouchableOpacity>
            </View>
            <Text style={styles.Post}>{feedData.post[0].description}</Text>
            <Image style={styles.Photo} source={{uri: feedData.post[0].image}} />
            <View style={styles.Footer}>
              <View style={styles.FooterCount}>
                <View style={styles.Row}>
                  <View style={styles.IconCount}>
                    <AIcon name="like1" size={12} color="#FFFFFF" />
                  </View>
                  <Text style={styles.TextCount}>
                    {feedData.interaction[0].likeCount}
                  </Text>
                </View>
                <View style={styles.Row}>
                  <Text style={[styles.TextCount,{marginRight:20}]}>
                    {feedData.interaction[0].commentCount} {t('comments')}
                  </Text>
                  <Text> </Text>
                  <Text style={styles.TextCount}>
                    {feedData.interaction[0].shareCount} {t('shares')}
                  </Text>
                </View>
              </View>

              <View style={styles.Separator}></View>
              <View style={styles.FooterMenu}>
                <TouchableOpacity style={styles.Button}>
                  <View style={styles.Icon}>
                    <AIcon name="like2" size={18} color="#424040" />
                  </View>
                  <Text style={styles.Text}>{t('like')}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Button}>
                  <View style={styles.Icon}>
                    <MIcon name="comment-outline" size={18} color="#424040" />
                  </View>
                  <Text style={styles.Text}>{t('comment')}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Button}>
                  <View style={styles.Icon}>
                    <MIcon name="share-outline" size={20} color="#424040" />
                  </View>
                  <Text style={styles.Text}>{t('share')}</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.BottomDivider}></View>
          </View>
      </>
    );
  // });
};
export default Feed;
