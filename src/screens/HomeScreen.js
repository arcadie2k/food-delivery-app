import { SafeAreaView, View, Text, TextInput, ScrollView } from "react-native";
import {
  ChevronDownIcon,
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/solid";
import Colors from "../utils/colors";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 pt-12">
      {/* Header */}
      <View className="flex-row items-center space-x-4 mb-4 px-4 ">
        <View className="w-10 h-10 bg-gray-300 rounded-full"></View>
        <View>
          <Text className="text-gray-400 text-xs">Deliver now!</Text>
          <View className="flex-row items-center space-x-2">
            <Text className="text-lg font-bold">Current location</Text>
            <ChevronDownIcon
              size={20}
              color={Colors.primary}
              style={{
                transform: [{ translateY: 1 }], // small adjustment for visual improvement
              }}
            />
          </View>
        </View>
      </View>

      {/* Search */}
      <View className="relative flex-row items-center gap-2 px-4 ">
        <View className="flex-1 flex-row items-center bg-gray-200 px-3 rounded-md">
          <MagnifyingGlassIcon size={20} color={Colors.primary} />

          <TextInput
            className="flex-1  px-3 py-1.5"
            placeholder="Placeholder"
          />
        </View>

        <AdjustmentsVerticalIcon size={20} color={Colors.primary} />
      </View>

      {/* Main body */}
      <ScrollView className="flex-1">
        {/* Offers */}

        {/* Featured */}
      </ScrollView>
    </SafeAreaView>
  );
}
