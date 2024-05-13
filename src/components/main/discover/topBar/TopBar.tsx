import React from 'react'
import { globalStyles } from '../../../../globalstyles/globalStyles'
import { ScrollView, View ,Text} from 'react-native'
import TopicChip from '../../../shared/topicChip/TopicChip'

const TopBar = () => {
  const chipArray = Array.from({ length: 8 }, (_, index) => index + 1);

  return (
   <View style={{}}>
   <Text style={[globalStyles.title,{paddingHorizontal:10}]}>
        Circle
      </Text>
      <Text style={{fontSize:18,fontWeight:"700",paddingHorizontal:10}}>Topics</Text>
      <View style={{ height: 45 ,marginTop:10}}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
          {chipArray.map((number) => (
            <TopicChip key={number} />
          ))}
        </ScrollView>
      </View>
   </View>
  )
}

export default TopBar
