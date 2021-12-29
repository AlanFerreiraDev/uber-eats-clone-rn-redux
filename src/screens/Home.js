import React from 'react';
import { View, Text, SafeAreaView, StatusBar } from 'react-native';
import Categories from '../components/Categories';
import HeaderTabs from '../components/HeaderTabs';
import SearchBar from '../components/SearchBar';

const Home = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#eee" />
      <SafeAreaView
        style={{
          backgroundColor: '#eee',
          flex: 1,
        }}
      >
        <View
          style={{
            padding: 15,
            backgroundColor: '#fff',
          }}
        >
          <HeaderTabs />
          <SearchBar />
        </View>
        <Categories />
      </SafeAreaView>
    </>
  );
};

export default Home;
