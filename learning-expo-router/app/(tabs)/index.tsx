import { Link, router } from "expo-router";
import { Pressable, Text, View } from "react-native";

const HomePage = () => {
    return( 
    <View>
        <Text> Hola mundo </Text>
        <Link href="/users/1">Ve al usario 1</Link>
       

            <Text>Ve a usuario 2</Text>
     
    </View>
    
);
}

export default HomePage