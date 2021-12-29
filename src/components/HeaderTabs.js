import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function HeaderTabs() {
  const [activeTab, setActiveTab] = useState('Delivery');

  return (
    <View
      style={{
        flexDirection: 'row',
        alignSelf: 'center',
      }}
    >
      <HeaderButton
        text="Delivery"
        btnColor="#000"
        textColor="#fff"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        text="Pickup"
        btnColor="#fff"
        textColor="#000"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
}

const HeaderButton = (props) => (
  <TouchableOpacity
    style={{
      backgroundColor: props.activeTab === props.text ? '#000' : '#fff',
      paddingVertical: 6,
      paddingHorizontal: 16,
      borderRadius: 30,
      marginTop: 10,
    }}
    onPress={() => props.setActiveTab(props.text)}
  >
    <Text
      style={{
        color: props.activeTab === props.text ? '#fff' : '#000',
        fontSize: 15,
        fontWeight: 'bold',
      }}
    >
      {props.text}
    </Text>
  </TouchableOpacity>
);
