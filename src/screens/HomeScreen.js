import { SafeAreaView, View, Text } from "react-native";
import { ChevronDownIcon } from "react-native-heroicons/solid";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <View className="flex-row items-center gap-4">
        <Text>Home</Text>
        <ChevronDownIcon size={20} color="black" />
      </View>
    </SafeAreaView>
  );
}
