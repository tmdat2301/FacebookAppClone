import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Image,
  View,
  Text,
  Alert,
  Modal,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import AIcon from 'react-native-vector-icons/AntDesign';
import Avatar from './Avatar';

const styles = StyleSheet.create({
  Container: {
    width: '100%',
    height: 192,
    flexDirection: 'row',
    alignItems: 'center',
  },
  Card: {
    width: 106,
    height: 170,
    position: 'relative',
    marginRight: 8,
  },
  CardStory: {
    width: '100%',
    height: 170,
    borderRadius: 12,
  },
  StoryImageOn: {
    width: '50%',
    height: '50%',
  },
  CardUser: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    width: 39,
    height: 39,
    alignItems: 'center',
    justifyContent: 'center',
  },
  CardFooter: {
    width: '100%',
    position: 'absolute',
    bottom: 12,
    left: 9,
  },
  Text: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#ffffff',
    textShadow: 'rgba(0, 0, 0, 0.4)',
  },
  BottomDivider: {
    width: '100%',
    height: 8,
    backgroundColor: '#D0D0D0',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  StoryDetail: {
    width: '100%',
    height: '100%',
  },
  modalView: {
    width: '100%',
    height: '100%',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  closeStory: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    position: 'absolute',
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
const FakeStoryData = [
  {
    userName: 'Giang Phạm',
    timePosted: '12m',
    imagePostUrl:
      'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png',
    avatarUrl:
      'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_1280.jpg',
  },
  {
    userName: 'Hà Trang',
    timePosted: '1h',
    imagePostUrl:
      'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
    avatarUrl:
      'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg',
  },
  {
    userName: 'Ngọc Huyền',
    timePosted: '6h',
    imagePostUrl:
      'https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg',
    avatarUrl:
      'https://imglarger.com/Images/before-after/ai-image-enlarger-1-after-2.jpg',
  },
  {
    userName: 'Văn Huy',
    timePosted: '3d',
    imagePostUrl: 'https://pixlr.com/images/index/remove-bg.webp',
    avatarUrl:
      'https://letsenhance.io/static/334225cab5be263aad8e3894809594ce/75c5a/MainAfter.jpg',
  },
];

const RenderStory = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState([]);
  return FakeStoryData.map(data => {
    return (
      <>
        
        <TouchableOpacity
          onPress={() => {
            setModalData(data), setModalVisible(true);
          }}
          style={styles.Card}>
          <View>
            <Image style={styles.CardStory} source={{uri: data.imagePostUrl}} />
            <View style={styles.CardUser}>
              <Avatar source={{uri: data.avatarUrl}} />
            </View>
            <View style={styles.CardFooter}>
              <Text style={{color: 'white', fontWeight: 400}}>
                {data.userName}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Image
                style={styles.StoryDetail}
                source={{
                  uri: modalData.imagePostUrl,
                }}
              />
              <TouchableOpacity
                style={styles.closeStory}
                onPress={() => setModalVisible(!modalVisible)}>
                <AIcon name="close" size={25} color="#000" />
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </>
    );
  });
};

const Story = () => {
  return (
    <>
      <View style={styles.Container}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{paddingLeft: 11}}>
          <View style={styles.Card}>
            <Image
              style={styles.CardStory}
              source={{
                uri: 'https://www.photoshopessentials.com/newsite/wp-content/uploads/2018/08/resize-images-print-photoshop-f.jpg',
              }}
            />
            <View style={styles.CardUser}>
              <AIcon name="pluscircle" size={30} color="#1777f2" />
            </View>
            <View style={styles.CardFooter}>
              <Text style={{color: 'white', fontSize: 20, fontWeight: 500}}>
                Create story
              </Text>
            </View>
          </View>
          <RenderStory />
        </ScrollView>
      </View>
      <View style={styles.BottomDivider}></View>
    </>
  );
};
export default Story;
