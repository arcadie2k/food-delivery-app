import { SafeAreaView, View, Text, TextInput, ScrollView } from "react-native";
import {
  ChevronDownIcon,
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/solid";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import Colors from "../utils/colors";

export default function HomeScreen() {
  return (
    <View className="flex-1">
      {/* Top section (Header + Search) */}
      <View className="bg-white">
        <SafeAreaView>
          {/* Header */}
          <View className="flex-row items-center space-x-4 pt-12 pb-4 px-4 bg-white">
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
          <View className="relative flex-row items-center gap-2 px-4 pb-4 bg-white border-b-[1px] border-gray-200">
            <View className="flex-1 flex-row items-center bg-gray-200 px-3 rounded-md">
              <MagnifyingGlassIcon size={20} color={Colors.primary} />

              <TextInput
                className="flex-1  px-3 py-1.5"
                placeholder="Placeholder"
              />
            </View>

            <AdjustmentsVerticalIcon size={20} color={Colors.primary} />
          </View>
        </SafeAreaView>
      </View>

      {/* Main body */}
      <ScrollView className="flex-1">
        <Categories />

        <FeaturedRow id="1" title="Featured!" description="Description 1" />
        <FeaturedRow
          id="2"
          title="Tasty discounts!"
          description="Description 2"
        />
        <FeaturedRow
          id="3"
          title="Offers near you!"
          description="Description 3"
        />
      </ScrollView>
    </View>
  );
}
