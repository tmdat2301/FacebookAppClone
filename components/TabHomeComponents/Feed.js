import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import EIcon from 'react-native-vector-icons/Entypo';
import AIcon from 'react-native-vector-icons/AntDesign';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Avatar from './Avatar';
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
    marginTop:2
  },
  BottomDivider: {
    width: '100%',
    height: 8,
    backgroundColor: '#D0D0D0',
  },
});

const FakeNewfeedData = [
  {
    user: [
      {
        name: 'Ngọc Linh',
        avatar:
          'https://scontent.fhan5-8.fna.fbcdn.net/v/t1.15752-9/352706449_213747877687891_1643856803149091246_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=ae9488&_nc_ohc=xakROwGFW7QAX-GO9LF&_nc_ht=scontent.fhan5-8.fna&oh=03_AdTiqORhFPTcv8uwlTwfY3VYx3tCWYpT2XM4sa_Ji0NOpA&oe=64A8E608',
        time: 'now',
        pivacy: 'public',
      },
    ],
    post: [
      {
        description: 'Anh Alex bảo là nhận đc quà quickgame mà không chụp hình cảm ơn tử tế là lần sau nhân phẩm như trệt dưới mương',
        image:
          'https://scontent.fhan5-11.fna.fbcdn.net/v/t1.15752-9/352927193_942817517030225_2914202963855237566_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=ae9488&_nc_ohc=FfPr2_wDlGUAX-rtS5x&_nc_ht=scontent.fhan5-11.fna&oh=03_AdRDsmCg6STi67ypYV_y-eywvWF9gcbZVfBooapzZingXA&oe=64A8F615',
      },
    ],
    interaction: [
      {
        likeCount: 214,
        commentCount: 42,
        shareCount:2
      },
    ],
  },
  {
    user: [
      {
        name: 'Tùng Lâm',
        avatar:
          'https://scontent.fhan5-9.fna.fbcdn.net/v/t1.15752-9/352826146_1756904464760752_3437980807599651286_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=JSjU1lOfy4IAX9DyoYq&_nc_ht=scontent.fhan5-9.fna&oh=03_AdQRXeO5EPAI4ejAzIxGN2wJJ60zAqIsP1I5wg25TLUS9w&oe=64A90C73',
        time: '1h',
        pivacy: 'friends',
      },
    ],
    post: [
      {
        description: 'Đôi lúc suy nghĩ cảm thấy cuộc đời mình thật may mắn khi chọn được một công việc đúng đam mê và yêu thích, vừa mang lại giá trị tích cực cho Xã Hội và kiếm có thể được tiền để nuôi sống Gia Đình. Thank Boxing',
        image:
          'https://scontent.fhan5-2.fna.fbcdn.net/v/t1.15752-9/352622885_654272279369596_3029165282347647394_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_ohc=aXpTy1ocRUEAX9qdplt&_nc_ht=scontent.fhan5-2.fna&oh=03_AdSAkUuqPML8MLdNkv1R-c4KXfTbe9Pb004Xn_3-QaohHw&oe=64A90285',
      },
    ],
    interaction: [
      {
        likeCount: 72,
        commentCount: 2,
        shareCount:1
      },
    ],
  },
  {
    user: [
      {
        name: 'Đặng Diệu Linh',
        avatar:
          'https://scontent.fhan5-9.fna.fbcdn.net/v/t1.15752-9/352856639_251652547472621_7552559602220864332_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=LBFWD-x0GYIAX_fyOmX&_nc_ht=scontent.fhan5-9.fna&oh=03_AdTnfZLzgOdIBsnxpbq0ENHCOOT7lvbOz1ufR50XgSEkKA&oe=64A8F7CA',
        time: '6d',
        pivacy: 'public',
      },
    ],
    post: [
      {
        description: 'Một trong những điểm nhấn ấn tượng trong chuỗi show LoveSongs Love VietNam của Hồ Ngọc Hà là sân khấu độc đáo được dàn dựng đồ họa 3D mapping hoành tráng, kết hợp âm thanh và ánh sáng ngoạn mục. Mỗi một tiết mục là một visual khác biệt được thiết kế riêng sinh động làm nổi bật không gian lâu đài Mặt Trăng. Nhiều khán giả đã xúc động khi xem lại những thước phim ngập tràn tình yêu Hà Hồ - Kim Lý được trình chiếu trên nền tường lâu đài.  ',
        image:
          'https://scontent.fhan5-10.fna.fbcdn.net/v/t1.15752-9/352887678_272133221996543_5168255737889208397_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_ohc=orOa_eJ4U1wAX9iOjJm&_nc_ht=scontent.fhan5-10.fna&oh=03_AdRxfmLdUsUSVd1b7Xdhx-mYPVO7f9QXJjgKZSeLbA7dzQ&oe=64A91A75',
      },
    ],
    interaction: [
      {
        likeCount: 4,
        commentCount: 4,
        shareCount:6
      },
    ],
  },
  {
    user: [
      {
        name: 'Văn Lâm',
        avatar:
          'https://scontent.fhan5-8.fna.fbcdn.net/v/t1.15752-9/352763698_823386935887980_7353518258832946044_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=ae9488&_nc_ohc=Vo4C1SIyj80AX_HC1lW&_nc_ht=scontent.fhan5-8.fna&oh=03_AdSZwFLfl9mO27vcRfIQghigZVOTgjPMGzwHg8fjv-D3Ng&oe=64A8FC07',
        time: '7h',
        pivacy: 'public',
      },
    ],
    post: [
      {
        description: 'Hình ảnh Tom Cruise ăn mừng cùng các diễn viên đóng thế các cảnh hành động của anh sau khi hoàn thành ghi hình cho MISSION: IMPOSSIBLE 7.',
        image:
          'https://scontent.fhan5-10.fna.fbcdn.net/v/t1.15752-9/351296409_220211727504068_2452659800237762476_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_ohc=C61tRgUZV-wAX_b6S5G&_nc_ht=scontent.fhan5-10.fna&oh=03_AdTgg5guEKg0I2NcVfMAyq2YBLBkTP55i-GgKmc30vdTlA&oe=64A8EA1E',
      },
    ],
    interaction: [
      {
        likeCount: 214,
        commentCount: 42,
      },
    ],
  },
  {
    user: [
      {
        name: 'Taylor Swift',
        avatar:
          'https://scontent.fhan5-8.fna.fbcdn.net/v/t1.15752-9/352618884_214848921394382_2557212276016881161_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=ae9488&_nc_ohc=79ZxYKoQpHkAX9Ms4ue&_nc_ht=scontent.fhan5-8.fna&oh=03_AdTqnM0dh9x8nA6K4ksz1hWaxWXHKUAlONkOC8vWE2wARA&oe=64A8EF0D',
        time: 'now',
        pivacy: 'friends',
      },
    ],
    post: [
      {
        description: 'Hè 2023, đâu đó trên một boong tàu bên bờ biển Miami tuyệt đẹp Chủ tịch Inter Miami, David Beckham đang chơi bóng cùng GOAT',
        image:
          'https://www.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej-1280x720.png',
      },
    ],
    interaction: [
      {
        likeCount: 214,
        commentCount: 42,
        shareCount:7
      },
    ],
  },
];
const RenderNewfeed = () => {
  return FakeNewfeedData.map((data,index) => {
  
    return (
      <>
        <View style={styles.Container}>
          <View style={styles.Header}>
            <View style={styles.Row}>
              <Avatar source={{uri: data.user[0].avatar}} />
              <View style={{paddingLeft: 10}}>
                <Text style={styles.User}>{data.user[0].name}</Text>
                <View style={styles.Row}>
                  <Text style={styles.Time}>{data.user[0].time}</Text>
                  <EIcon name="dot-single" size={12} color="#747476" />
                  <EIcon name="globe" size={12} color="#747476" />
                </View>
              </View>
            </View>
            <TouchableOpacity>
              <EIcon name="dots-three-horizontal" size={15} color="#222121" />
            </TouchableOpacity>
          </View>
          <Text style={styles.Post}>{data.post[0].description}</Text>
          <Image style={styles.Photo} source={{uri: data.post[0].image}} />
          <View style={styles.Footer}>
            <View style={styles.FooterCount}>
              <View style={styles.Row}>
                <View style={styles.IconCount}>
                  <AIcon name="like1" size={12} color="#FFFFFF" />
                </View>
                <Text style={styles.TextCount}>
                  {data.interaction[0].likeCount}
                </Text>
              </View>
              <View style={styles.Row}>
                <Text style={styles.TextCount}>
                {data.interaction[0].commentCount} Comments
              </Text>
              <Text>   </Text>
              <Text style={styles.TextCount}>
                {data.interaction[0].shareCount} Shares
              </Text>
              </View>
              
            </View>

            <View style={styles.Separator}></View>
            <View style={styles.FooterMenu}>
              <TouchableOpacity style={styles.Button}>
                <View style={styles.Icon}>
                  <AIcon name="like2" size={18} color="#424040" />
                </View>
                <Text style={styles.Text}>Like</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.Button}>
                <View style={styles.Icon}>
                  <MIcon name="comment-outline" size={18} color="#424040" />
                </View>
                <Text style={styles.Text}>Comment</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.Button}>
                <View style={styles.Icon}>
                  <MIcon name="share-outline" size={20} color="#424040" />
                </View>
                <Text style={styles.Text}>Share</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.BottomDivider}></View>
        </View>
      </>
    );
  });
};
const Feed = () => {
  return (
    <>
      <RenderNewfeed />
    </>

  );
};
export default Feed;
