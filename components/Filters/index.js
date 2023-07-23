import React, {useEffect, useMemo, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Checkbox} from 'react-native-paper';
import RadioGroup from 'react-native-radio-buttons-group';
import {
  SelectList,
  MultipleSelectList,
} from 'react-native-dropdown-select-list';
import Icon from 'react-native-vector-icons/AntDesign';

const Filters = () => {
  const [checkedItems, setCheckedItems] = useState([]);
  const [priOptionOn, setPriOptionOn] = useState(false);
  const handleCheckboxChange = itemValue => {
    if (checkedItems.includes(itemValue)) {
      setCheckedItems(checkedItems.filter(item => item !== itemValue));
    } else {
      setCheckedItems([...checkedItems, itemValue]);
    }
  };

  const checkboxItems = [
    {
      label: 'Learn Firebase',
      value: 'item1',
      priority: 'High',
      colorBox: '#D48BCF',
    },
    {
      label: 'Learn Redux',
      value: 'item2',
      priority: 'Medium',
      colorBox: '#1790E5',
    },
    {
      label: 'Learn Networking',
      value: 'item3',
      priority: 'Low',
      colorBox: '#808080',
    },
  ];

  const [selectedOption, setSelectedOption] = useState(1);

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

  const [workStatus, setWorkStatus] = useState('Medium');

  const [selected, setSelected] = React.useState('');

  const dataPriority = [
    {key: '1', value: 'High'},
    {key: '2', value: 'Medium'},
    {key: '3', value: 'Low'},
    {key: '4', value: 'Other', disabled: true},
  ];
  const handleOnPress = id => {
    // console.log('lllllllllllllll',id);
    setSelectedOption(id);
  };
  return (
    <View style={styles.Container}>
      <View>
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
        <View style={styles.Divider}></View>
        <View>
          {checkboxItems.map(item => (
            <View style={styles.TodoList}>
              <View key={item.value} style={styles.ContainerTodoList}>
                <Checkbox
                  status={
                    checkedItems.includes(item.value) ? 'checked' : 'unchecked'
                  }
                  onPress={() => handleCheckboxChange(item.value)}
                />
                <Text
                  style={
                    checkedItems.includes(item.value)
                      ? {textDecorationLine: 'line-through'}
                      : {}
                  }>
                  {item.label}
                </Text>
              </View>
              <View>
                <Text
                  style={[
                    {backgroundColor: item.colorBox, padding: 5},
                    checkedItems.includes(item.value)
                      ? {textDecorationLine: 'line-through'}
                      : {},
                  ]}>
                  {item.priority}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </View>

      <View
        style={[styles.InputContainer, {height: 150, alignItems: 'flex-end'}]}>
        <TextInput
          style={styles.Input}
          placeholder="Add a work"
          placeholderTextColor="#aaa"></TextInput>
        {priOptionOn == true ? (
          <View
            style={{
              height: 100,
              width: 100,
              position: 'absolute',
              bottom: 34,
              left: '50%',
            }}>
            <TouchableOpacity
              onPress={() => {
                setWorkStatus('High');
                setPriOptionOn(false);
              }}
              style={styles.priOption}>
              <Text style={{backgroundColor: '#D48BCF', padding: 5}}>High</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setWorkStatus('Medium');
                setPriOptionOn(false);
              }}
              style={styles.priOption}>
              <Text style={{backgroundColor: '#1790E5', padding: 5}}>
                Medium
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setWorkStatus('Low');
                setPriOptionOn(false);
              }}
              style={styles.priOption}>
              <Text style={{backgroundColor: '#808080', padding: 5}}>Low</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <></>
        )}

        <TouchableOpacity
          onPress={() => {
            setPriOptionOn(!priOptionOn);
          }}>
          <View style={styles.OptionButton}>
            <View style={{flexDirection: 'row', height: 40}}>
              <Text style={styles.Add}>{workStatus}</Text>
              <Icon style={[styles.Icon, {marginLeft: 0}]} name="down" />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={[styles.AddButton, {maxHeight: 40}]}>
            <Text style={styles.Add}>Add</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Filters;
const styles = StyleSheet.create({
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
  SearchButton: {
    height: 40,
    marginTop: 6,
    marginBottom: 6,
    borderWidth: 1,
    flex: 1,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  AddButton: {
    height: 40,
    marginTop: 6,
    marginBottom: 6,
    borderWidth: 1,
    flex: 1,
    backgroundColor: '#40A9FF',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  OptionButton: {
    height: 40,
    marginTop: 6,
    marginBottom: 6,
    borderWidth: 1,
    flex: 1,
    backgroundColor: '#1790E5',
    maxHeight: 40,
    position: 'relative',
  },
  Icon: {
    height: 40,
    fontSize: 16,
    textAlignVertical: 'center',
    marginLeft: 12,
    marginRight: 12,
  },
  Add: {
    height: 40,
    fontSize: 16,
    textAlignVertical: 'center',
    marginLeft: 12,
    marginRight: 12,
    color: 'white',
  },
  InputContainer: {
    flexDirection: 'row',
  },
  Divider: {
    backgroundColor: '#aaa',
    height: 1,
    marginLeft: '5%',
    marginRight: '5%',
    marginTop: 10,
    marginBottom: 10,
  },
  ContainerTodoList: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  TodoList: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  priOption: {
    // height: 33,
  },
});
