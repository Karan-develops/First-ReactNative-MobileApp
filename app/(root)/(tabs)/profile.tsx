import { useLocalSearchParams } from 'expo-router'
import { View, Text } from 'react-native'

const Profile = () => {

    const {id} = useLocalSearchParams()

  return (
    <View>
      <Text>Profile</Text>
    </View>
  )
}

export default Profile