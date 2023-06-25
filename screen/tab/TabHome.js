import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  ScrollView,
  StyleSheet,
  Dimensions,
  FlatList,
  RefreshControl,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';
import AppBar from '../../components/TabHomeComponents/AppBar.js';
import ToolBar from '../../components/TabHomeComponents/ToolBar.js';
import Story from '../../components/TabHomeComponents/Story.js';
import Feed from '../../components/TabHomeComponents/Feed.js';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

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
        description:
          'Anh Alex bảo là nhận đc quà quickgame mà không chụp hình cảm ơn tử tế là lần sau nhân phẩm như trệt dưới mương',
        image:
          'https://scontent.fhan5-11.fna.fbcdn.net/v/t1.15752-9/352927193_942817517030225_2914202963855237566_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=ae9488&_nc_ohc=FfPr2_wDlGUAX-rtS5x&_nc_ht=scontent.fhan5-11.fna&oh=03_AdRDsmCg6STi67ypYV_y-eywvWF9gcbZVfBooapzZingXA&oe=64A8F615',
      },
    ],
    interaction: [
      {
        likeCount: 214,
        commentCount: 42,
        shareCount: 2,
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
        description:
          'Đôi lúc suy nghĩ cảm thấy cuộc đời mình thật may mắn khi chọn được một công việc đúng đam mê và yêu thích, vừa mang lại giá trị tích cực cho Xã Hội và kiếm có thể được tiền để nuôi sống Gia Đình. Thank Boxing',
        image:
          'https://scontent.fhan5-2.fna.fbcdn.net/v/t1.15752-9/352622885_654272279369596_3029165282347647394_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_ohc=aXpTy1ocRUEAX9qdplt&_nc_ht=scontent.fhan5-2.fna&oh=03_AdSAkUuqPML8MLdNkv1R-c4KXfTbe9Pb004Xn_3-QaohHw&oe=64A90285',
      },
    ],
    interaction: [
      {
        likeCount: 72,
        commentCount: 2,
        shareCount: 1,
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
        description:
          'Một trong những điểm nhấn ấn tượng trong chuỗi show LoveSongs Love VietNam của Hồ Ngọc Hà là sân khấu độc đáo được dàn dựng đồ họa 3D mapping hoành tráng, kết hợp âm thanh và ánh sáng ngoạn mục. Mỗi một tiết mục là một visual khác biệt được thiết kế riêng sinh động làm nổi bật không gian lâu đài Mặt Trăng. Nhiều khán giả đã xúc động khi xem lại những thước phim ngập tràn tình yêu Hà Hồ - Kim Lý được trình chiếu trên nền tường lâu đài.  ',
        image:
          'https://scontent.fhan5-10.fna.fbcdn.net/v/t1.15752-9/352887678_272133221996543_5168255737889208397_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_ohc=orOa_eJ4U1wAX9iOjJm&_nc_ht=scontent.fhan5-10.fna&oh=03_AdRxfmLdUsUSVd1b7Xdhx-mYPVO7f9QXJjgKZSeLbA7dzQ&oe=64A91A75',
      },
    ],
    interaction: [
      {
        likeCount: 4,
        commentCount: 4,
        shareCount: 6,
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
        description:
          'Hình ảnh Tom Cruise ăn mừng cùng các diễn viên đóng thế các cảnh hành động của anh sau khi hoàn thành ghi hình cho MISSION: IMPOSSIBLE 7.',
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
        description:
          'Hè 2023, đâu đó trên một boong tàu bên bờ biển Miami tuyệt đẹp Chủ tịch Inter Miami, David Beckham đang chơi bóng cùng GOAT',
        image:
          'https://www.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej-1280x720.png',
      },
    ],
    interaction: [
      {
        likeCount: 214,
        commentCount: 42,
        shareCount: 7,
      },
    ],
  },
];

const RenderHomeScreen = ({item}) => {
  // console.log(item);
  return (
    <>
      {/* <Text> {item.user[0].name}</Text> */}
      <Feed feedData={item} />
    </>
  );
};

const TabHome = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [refreshControl, setRefreshControl] = useState(false);

  const newDataLoadMore = {
    user: [
      {
        name: 'Quốc Cường',
        avatar:
          'https://media.istockphoto.com/id/1293292142/photo/portrait-of-a-labrador-retriever-dog-on-an-isolated-black-background.jpg?s=612x612&w=0&k=20&c=4bEHp9U0cbkRWGvWSgRPagY1mDfyz72qX5_y5Z7mFxg=',
        time: 'now',
        pivacy: 'public',
      },
    ],
    post: [
      {
        description: 'A new data loadmore',
        image:
          'https://media.istockphoto.com/id/1293292142/photo/portrait-of-a-labrador-retriever-dog-on-an-isolated-black-background.jpg?s=612x612&w=0&k=20&c=4bEHp9U0cbkRWGvWSgRPagY1mDfyz72qX5_y5Z7mFxg=',
      },
    ],
    interaction: [
      {
        likeCount: 2,
        commentCount: 2,
        shareCount: 2,
      },
    ],
  };
  const onRefresh = () => {
    setRefreshControl(true);
    setTimeout(() => {
      setData(data.slice(0, 5));
      setRefreshControl(false);
    }, 2000);
  };

  const onEndReached = () => {
    setIsLoading(true);
    console.log('Load More');

    setTimeout(() => {
      setData(data.concat(newDataLoadMore));
      setIsLoading(false);
    }, 100);
  };
  const [data, setData] = useState(FakeNewfeedData);
  return (
    <>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        {/* <ScrollView
          
          > */}

        <FlatList
          data={data}
          renderItem={RenderHomeScreen}
          keyExtractor={item => item.id}
          refreshControl={
            <RefreshControl
              refreshing={refreshControl}
              onRefresh={onRefresh}
              colors={['gray']}
            />
          }
          ListHeaderComponent={() => (
            <View>
              <AppBar />
              <ToolBar />
              <Story />
            </View>
          )}
          ListFooterComponent={() =>
            isLoading ? (
              <View
                style={{
                  marginTop: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  padding: 10,
                  flexDirection: 'column',
                }}>
                <ActivityIndicator size="large" color="gray" />
              </View>
            ) : null
          }
          onEndReached={onEndReached}
          initialNumToRender={1}
          onEndReachedThreshold={0}
        />
        {/* </ScrollView> */}
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  Row: {
    flexDirection: 'row',
  },
  Text: {
    color: '#3a86e9',
    fontSize: 25,
    fontWeight: 'bold',
    letterSpacing: -0.3,
  },
  Button: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#eeeeee',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 16,
  },
});
export default TabHome;
