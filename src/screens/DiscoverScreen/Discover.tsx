import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { globalStyles } from '../../globalstyles/globalStyles';
import TopicChip from '../../components/shared/topicChip/TopicChip';
import TopBar from '../../components/main/discover/topBar/TopBar';
import PostCards from '../../components/shared/PostCards/PostCards';

const DiscoverScreen = () => {
  return (
    <View style={globalStyles.container}>
      
<TopBar/>

<ScrollView>
<PostCards/>
<PostCards/>
<PostCards/>
<PostCards/>
</ScrollView>
    </View>
  );
};

export default DiscoverScreen;
