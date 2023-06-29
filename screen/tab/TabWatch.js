import React, {useState, useEffect, useContext} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {ThemeContext} from '../../ThemeContext';
let topData = [
  {
    id: '1',
    Name: 'Daily Oprations',
    selected: false,
  },
  {
    id: '2',
    Name: 'Financials',
    selected: false,
  },
  {
    id: '3',
    Name: 'Sharing',
    selected: false,
  },
  {
    id: '4',
    Name: 'Common Questions',
    selected: false,
  },
];

const TabWatch = () => {
  const context = useContext(ThemeContext);
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   setData(topData);
  //   console.log('effect is called');
  // }, []);

  // const setSelectedIndex = id => {
  //   topData.map((item, index) => {
  //     if (index == id) {
  //       topData[index].selected = true;
  //     } else {
  //       topData[index].selected = false;
  //     }
  //   });
  //   setData([...topData]);
  // };

  // const renderItem = ({item, index}) => {
  //   console.log(item);
  //   console.log('------------------------');
  //   return (
  //     <>
  //       <TouchableOpacity
  //         onPress={() => setSelectedIndex(index)}
  //         style={[
  //           item.selected ? styles.greenbg : styles.whitebg,
  //           styles.storeInformationView,
  //         ]}>
  //         <Text style={[item.selected ? styles.whitetext : styles.name]}>
  //           {item.Name}
  //         </Text>
  //       </TouchableOpacity>
  //     </>
  //   );
  // };

  // return <FlatList data={data} renderItem={renderItem} />;
  return (
    <View
      style={[
        styles.Container,
        context.theme === 'light' ? {} : {backgroundColor: '#232527'},
      ]}></View>
  );
};

export default TabWatch;
const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  greenbg: {
    backgroundColor: 'green',
  },
  whitebg: {
    backgroundColor: 'white',
  },
  storeInformationView: {
    //backgroundColor: APP_COLOR.GREEN_COLOR,
    borderRadius: 12,
    padding: 18,
    elevation: 15,
    marginHorizontal: 10,
    marginTop: 15,

    marginBottom: 17,
  },
  whitetext: {
    color: 'white',
    fontWeight: 'bold',
  },
  name: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
  },
});
