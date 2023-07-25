

import React,{useEffect, useMemo, useRef, useState} from 'react'
import { StyleSheet, Text,View,TextInput,TouchableOpacity } from 'react-native'
import RadioGroup from 'react-native-radio-buttons-group';
import {
  MultipleSelectList,
} from 'react-native-dropdown-select-list';
import Icon from 'react-native-vector-icons/AntDesign';

const Filter =()=>{
  const dataPriority = [
    {key: '1', value: 'High'},
    {key: '2', value: 'Medium'},
    {key: '3', value: 'Low'},
    {key: '4', value: 'Other', disabled: true},
  ];
  const [selected, setSelected] = React.useState('');
  const data = [
    {
      id: 1,
      label: 'All',
      value: 'Completed',
      color: '#40A9FF',
      borderColor: '#aaa',
    },
    {
      id: 2,
      label: 'Completed',
      value: 'option2',
      color: '#40A9FF',
      borderColor: '#aaa',
    },
    {
      id: 3,
      label: 'To do',
      value: 'option3',
      color: '#40A9FF',
      borderColor: '#aaa',
    },
  ];
  const handleOnPress = id => {
    setSelectedOption(id);
  };
  const [selectedOption, setSelectedOption] = useState(1);

  return(
    <View style={styles.Container}>
      <View style={styles.SearchContainer}>
          <Text style={styles.Title}>Search</Text>
          <View style={styles.InputContainer}>
            <TextInput
              style={styles.Input}
              placeholder="Input search text"
              placeholderTextColor="#aaa"></TextInput>
            <TouchableOpacity>
              <View style={styles.SearchButton}>
                <Icon name="search1" color="#aaa" style={styles.Icon} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.StatusContainer}>
          <Text style={styles.Title}>Filter By Status</Text>

          <RadioGroup
            radioButtons={data}
            onPress={handleOnPress}
            selectedId={selectedOption}
            layout="row"
            containerStyle={{justifyContent: 'space-between'}}
          />
        </View>
        <View style={styles.PriorityContainer}>
          <Text style={styles.Title}>Filter By Priority</Text>
          <View
            style={[
              styles.InputContainer,
              {flexDirection: 'column', marginTop: 6},
            ]}>
            <MultipleSelectList
              boxStyles={{borderColor: 'black'}}
              checkBoxStyles={{borderColor: 'blue'}}
              setSelected={val => setSelected(val)}
              data={dataPriority}
              save="value"
              // onSelect={() => alert(selected)}
              label="Categories"
            />
          </View>
        </View>
    </View>
  )
}
export default Filter;
const styles=StyleSheet.create({
  Container: {
    flex: 1,
    marginTop: 20,
    marginLeft: '5%',
    marginRight: '5%',
    justifyContent: 'space-between',
  },
  SearchContainer: {
    marginBottom: 5,
  },
  PriorityContainer: {},
  StatusContainer: {
    marginBottom: 6,
  },
  Title: {
    color: 'black',
  },
  Input: {
    height: 40,
    marginTop: 6,
    marginBottom: 6,
    borderWidth: 1,
    flex: 1,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  InputContainer: {
    flexDirection: 'row',
  },
  SearchButton: {
    height: 40,
    marginTop: 6,
    marginBottom: 6,
    borderWidth: 1,
    flex: 1,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  Icon: {
    height: 40,
    fontSize: 16,
    textAlignVertical: 'center',
    marginLeft: 12,
    marginRight: 12,
  },
})