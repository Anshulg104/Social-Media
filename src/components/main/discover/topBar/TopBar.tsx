import React from 'react';
import { globalStyles } from '../../../../globalstyles/globalStyles';
import { ScrollView, View, Text } from 'react-native';
import TopicChip from '../../../shared/topicChip/TopicChip';
import { AntDesign } from '@expo/vector-icons';

const TopBar = () => {
  const topics = ["Fashion", "Food", "Kids", "Shopping","Live"];

  return (
    <View>
      <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
        <Text style={[globalStyles.title, { paddingHorizontal: 10 }]}>
        Circle
      </Text>
      <AntDesign name='search1' style={{paddingRight:20}} size={26} color="#e77e7e"/>
      
      </View>
      

      <Text style={{ fontSize: 18, fontWeight: "700", paddingHorizontal: 10 }}>
        Topics
      </Text>
      <View style={{ height: 45, marginTop: 10 }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {topics.map((topic, index) => (
            <TopicChip key={index} text={topic} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default TopBar;
