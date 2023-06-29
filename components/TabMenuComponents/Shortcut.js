import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Pressable,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useContext} from 'react';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import FAIcon from 'react-native-vector-icons/FontAwesome5';
import EStyleSheet from 'react-native-extended-stylesheet';
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-community/masked-view';
import AIcon from 'react-native-vector-icons/AntDesign';
import {useTranslation} from 'react-i18next';
import {ThemeContext} from '../../ThemeContext';

const Data = [
  {
    name: 'Design',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png',
    type: 'messenger',
  },
  {
    name: 'Quản lý dự án',
    imageUrl:
      'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
    type: 'messenger',
  },
  {
    name: 'Đặng Linh Nga',
    imageUrl:
      'https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg',
    type: 'friend',
  },
  {
    name: 'React Native',
    imageUrl: 'https://pixlr.com/images/index/remove-bg.webp',
    type: 'flag',
  },
  {
    name: 'Trần Thuỳ',
    imageUrl:
      'https://letsenhance.io/static/334225cab5be263aad8e3894809594ce/75c5a/MainAfter.jpg',
    type: 'friend',
  },
  {
    name: 'Chelsea FC',
    imageUrl:
      'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg',
    type: 'flag',
  },
  {
    name: 'Otofun',
    imageUrl:
      'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_1280.jpg',
    type: 'flag',
  },
];

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    width: '100%',
    height: '100%',
    flexDirection: 'column',
  },
  Card: {
    width: 60,
    height: 60,
    marginTop: 10,
    marginRight: 24,
    position: 'relative',
  },
  CardContainer: {
    flex: 1,
    paddingLeft: 20,
    height: 120,
  },
  Image: {
    width: '100%',
    height: 60,
    borderRadius: 30,
  },
  Text: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 12,
    marginLeft: 16,
  },
  Texts: {
    flex: 2,
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 16,
    marginBottom: 10,
  },
  Subtext: {
    marginTop: 10,
    fontSize: 12,
    color: '#747476',
    textAlign: 'center',
  },
  TypeIcon: {
    position: 'absolute',
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 44,
    marginLeft: 44,
  },
  LinearGradient: {
    height: 18,
    width: 18,
    position: 'absolute',
    borderRadius: 9,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 44,
    marginLeft: 44,
  },
  ShortcutItemContainer: {
    marginLeft: 8,
    flex: 1,
    flexDirection: 'row',
  },
  ShortcutItem: {
    marginLeft: 8,
    marginBottom: 8,
    backgroundColor: '#fff',
    width: 176,
    height: 90,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 3,
  },
  Button: {
    backgroundColor: '#DCDCDC',
    marginLeft: 16,
    marginRight: 16,
    marginTop: 8,
    borderRadius: 4,
  },
  TextButton: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingTop: 8,
    paddingBottom: 8,
    textAlign: 'center',
  },
  Separator: {
    marginTop: 20,
    width: '100%',
    height: 0.7,
    backgroundColor: '#D0D0D0',
  },
  Shadow: {
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },
  Icon: {
    margin: 10,
  },
  TextCardItem: {
    marginLeft: 10,
    fontSize: 16,
    color: 'black',
  },
  'ShortcutItem:first-child': {
    marginRight: 10,
  },
});

const RenderShortcutItem = () => {
  const {t, i18n} = useTranslation();
  const context = useContext(ThemeContext);

  return (
    <>
      <View style={styles.ShortcutItemContainer}>
        <TouchableOpacity
          style={[
            styles.ShortcutItem,
            context.theme === 'light' ? {} : {backgroundColor: '#323436'},
          ]}>
          <View style={styles.Icon}>
            <MCIcon name="heart" size={25} color="#ef473a" />
          </View>
          <Text style={[styles.TextCardItem,context.theme==='light'?{}:{color:'#eee'}]}>
            {t('dating')}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.ShortcutItem,
            context.theme === 'light' ? {} : {backgroundColor: '#323436'},
          ]}>
          <View style={styles.Icon}>
            <MIcon name="ondemand-video" size={25} color="#11998e" />
          </View>
          <Text style={[styles.TextCardItem,context.theme==='light'?{}:{color:'#eee'}]}>
            {t('videosOnWatch')}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.ShortcutItemContainer}>
        <TouchableOpacity
          style={[
            styles.ShortcutItem,
            context.theme === 'light' ? {} : {backgroundColor: '#323436'},
          ]}>
          <View style={styles.Icon}>
            <MCIcon name="post-outline" size={25} color="#4286f4" />
          </View>
          <Text style={[styles.TextCardItem,context.theme==='light'?{}:{color:'#eee'}]}>
            {t('feeds')}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.ShortcutItem,
            context.theme === 'light' ? {} : {backgroundColor: '#323436'},
          ]}>
          <View style={styles.Icon}>
            <MIcon name="save" size={25} color="#f80759" />
          </View>
          <Text style={[styles.TextCardItem,context.theme==='light'?{}:{color:'#eee'}]}>
            {t('saved')}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.ShortcutItemContainer}>
        <TouchableOpacity
          style={[
            styles.ShortcutItem,
            context.theme === 'light' ? {} : {backgroundColor: '#323436'},
          ]}>
          <View style={styles.Icon}>
            <AIcon name="flag" size={25} color="#f12711" />
          </View>
          <Text style={[styles.TextCardItem,context.theme==='light'?{}:{color:'#eee'}]}>
            {t('pages')}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.ShortcutItem,
            context.theme === 'light' ? {} : {backgroundColor: '#323436'},
          ]}>
          <View style={styles.Icon}>
            <FAIcon name="user-friends" size={22} color="#11998e" />
          </View>
          <Text style={[styles.TextCardItem,context.theme==='light'?{}:{color:'#eee'}]}>
            {t('friends')}
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <View style={styles.ShortcutItemContainer}>
          <TouchableOpacity
            style={[
              styles.ShortcutItem,
              context.theme === 'light' ? {} : {backgroundColor: '#323436'},
            ]}>
            <View style={styles.Icon}>
              <MCIcon name="account-group" size={26} color="#4286f4" />
            </View>
            <Text style={[styles.TextCardItem,context.theme==='light'?{}:{color:'#eee'}]}>
              {t('groups')}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.ShortcutItem,
              context.theme === 'light' ? {} : {backgroundColor: '#323436'},
            ]}>
            <View style={styles.Icon}>
              <MCIcon name="fireplace-off" size={25} color="#11998e" />
            </View>
            <Text style={[styles.TextCardItem,context.theme==='light'?{}:{color:'#eee'}]}>
              {t('marketplace')}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.ShortcutItemContainer}>
        <TouchableOpacity
          style={[
            styles.ShortcutItem,
            context.theme === 'light' ? {} : {backgroundColor: '#323436'},
          ]}>
          <View style={styles.Icon}>
            <MCIcon name="clock-check-outline" size={25} color="#4286f4" />
          </View>
          <Text style={[styles.TextCardItem,context.theme==='light'?{}:{color:'#eee'}]}>
            {t('memories')}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.ShortcutItem,
            context.theme === 'light' ? {} : {backgroundColor: '#323436'},
          ]}>
          <View style={styles.Icon}>
            <MIcon name="video-library" size={25} color="#f12711" />
          </View>
          <Text style={[styles.TextCardItem,context.theme==='light'?{}:{color:'#eee'}]}>
            {t('reels')}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.ShortcutItemContainer}>
        <TouchableOpacity
          style={[
            styles.ShortcutItem,
            context.theme === 'light' ? {} : {backgroundColor: '#323436'},
          ]}>
          <View style={styles.Icon}>
            <MIcon name="event" size={25} color="#ef473a" />
          </View>
          <Text style={[styles.TextCardItem,context.theme==='light'?{}:{color:'#eee'}]}>
            {t('events')}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.ShortcutItem,
            context.theme === 'light' ? {} : {backgroundColor: '#323436'},
          ]}>
          <View style={styles.Icon}>
            <MIcon name="videogame-asset" size={25} color="#4286f4" />
          </View>
          <Text style={[styles.TextCardItem,context.theme==='light'?{}:{color:'#eee'}]}>
            {t('gaming')}
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const RenderShortcutCard = () => {
  const context = useContext(ThemeContext);

  return Data.map(data => {
    return (
      <TouchableOpacity style={styles.Card}>
        <View>
          <Image style={styles.Image} source={{uri: data.imageUrl}} />
        </View>

        {data.type === 'messenger' ? (
          <View
            style={[
              styles.LinearGradient,
              context.theme === 'light' ? {} : {backgroundColor: '#999'},
            ]}>
            <MaskedView
              style={{flex: 1, flexDirection: 'row'}}
              maskElement={
                <View
                  style={{
                    paddingTop: 1,
                    backgroundColor: 'transparent',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <MCIcon
                    name="facebook-messenger"
                    size={14}
                    color="white"
                    style={styles.Shadow}
                  />
                </View>
              }>
              <LinearGradient
                colors={['#f80759', '#2948ff']}
                style={{flex: 1}}
              />
            </MaskedView>
          </View>
        ) : data.type === 'flag' ? (
          <View
            style={[
              styles.TypeIcon,
              context.theme === 'light' ? {} : {backgroundColor: '#999'},
            ]}>
            <AIcon size={14} name="flag" color="#ef473a" />
          </View>
        ) : (
          <View
            style={[
              styles.TypeIcon,
              context.theme === 'light' ? {} : {backgroundColor: '#999'},
            ]}>
            <FAIcon size={10} name="user-friends" color="#3a86e9" />
          </View>
        )}

        <Text style={[styles.Subtext,context.theme==='light'?{}:{color:'#ccc'}]}>{data.name}</Text>
      </TouchableOpacity>
    );
  });
};

const Shortcut = () => {
  const {t, i18n} = useTranslation();
  const context = useContext(ThemeContext);

  return (
    <View style={styles.Container}>
      <Text
        style={[
          styles.Text,
          context.theme === 'light' ? {} : {color: 'white'},
        ]}>
        {t('yourShortcuts')}
      </Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.CardContainer}>
        <RenderShortcutCard />
      </ScrollView>
      <Text
        style={[
          styles.Texts,
          context.theme === 'light' ? {} : {color: 'white'},
        ]}>
        {t('allShortcuts')}
      </Text>
      <RenderShortcutItem />
      <TouchableOpacity
        style={[
          styles.Button,
          context.theme === 'light' ? {} : {backgroundColor: '#484848'},
        ]}>
        <Text
          style={[
            styles.TextButton,
            context.theme === 'light' ? {} : {color: 'white'},
          ]}>
          {t('seeMore')}
        </Text>
      </TouchableOpacity>
      <View
        style={[
          styles.Separator,
          context.theme === 'light' ? {} : {color: 'white'},
        ]}></View>
    </View>
  );
};
export default Shortcut;
