import { ScrollView, View, Text } from "react-native";
import { ArrowRightIcon } from "react-native-heroicons/solid";
import Colors from "../utils/colors";
import RestaurantCard from "./RestaurantCard";

export default function FeaturedRow({ id, title, description }) {
  return (
    <View className="mb-8">
      <View className="px-4 mb-2">
        <View className="flex-row items-center gap-2">
          <Text className="flex-1 text-xl font-bold">{title}</Text>
          <ArrowRightIcon size={20} color={Colors.primary} />
        </View>
        <Text className="text-xs text-gray-500">{description}</Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingLeft: 16,
        }}
      >
        <RestaurantCard
          id={1}
          imgUrl=""
          title="Title"
          rating={5}
          genre="Thai"
          address="Address"
          description="Desc"
          dishes={[1, 2, 3]}
          lng={100}
          lat={100}
        />
        <RestaurantCard
          id={1}
          imgUrl=""
          title="Title"
          rating={5}
          genre="Thai"
          address="Address"
          description="Desc"
          dishes={[1, 2, 3]}
          lng={100}
          lat={100}
        />
        <RestaurantCard
          id={1}
          imgUrl=""
          title="Title"
          rating={5}
          genre="Thai"
          address="Address"
          description="Desc"
          dishes={[1, 2, 3]}
          lng={100}
          lat={100}
        />
      </ScrollView>
    </View>
  );
}
