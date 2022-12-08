import { View, Text } from "react-native";
import { StarIcon } from "react-native-heroicons/outline";
import Colors from "../utils/colors";

export default function RestaurantCard({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  description,
  dishes,
  lng,
  lat,
}) {
  return (
    <View className="flex-1 w-56 rounded-md overflow-hidden bg-white shadow-sm mr-4">
      <View className="w-full h-32 bg-gray-200"></View>
      <View className="p-4">
        <Text className="text-lg font-bold mb-1">{title}</Text>

        <View className="flex-row items-center gap-1">
          <StarIcon size={20} color={Colors.primary} />
          <Text className="text-xs text-gray-500 font-bold">
            {rating} (1k+) {genre}
          </Text>
        </View>
      </View>
    </View>
  );
}
