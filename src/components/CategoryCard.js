import { View, Text, TouchableOpacity } from "react-native";

export default function CategoryCard({ last = false }) {
  return (
    <TouchableOpacity className={`relative items-center ${!last && "mr-2"}`}>
      <View className="w-20 h-20 rounded-md bg-gray-300"></View>
      <Text className="absolute bottom-1 left-2 text-white font-bold">
        Offer
      </Text>
    </TouchableOpacity>
  );
}
