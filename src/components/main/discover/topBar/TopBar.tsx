import React from 'react'
import { globalStyles } from '../../../../globalstyles/globalStyles'
import { ScrollView, View ,Text} from 'react-native'
import TopicChip from '../../../shared/topicChip/TopicChip'

const TopBar = () => {
  const chipArray = Array.from({ length: 8 }, (_, index) => index + 1);

  return (
   <>
   <Text style={globalStyles.title}>
        Circle
      </Text>
      <Text style={{fontSize:18,fontWeight:"700"}}>Topics</Text>
      <View style={{ height: 50 ,marginTop:10}}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
          {chipArray.map((number) => (
            <TopicChip key={number} />
          ))}
        </ScrollView>
      </View>
   </>
  )
}

export default TopBar
