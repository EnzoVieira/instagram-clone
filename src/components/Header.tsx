import React from "react"
import { Image, View } from "react-native"
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons"

export const Header = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 16,
      }}
    >
      <Image
        source={require("../../assets/instagram-logo.png")}
        resizeMode="contain"
        style={{
          height: 36,
          width: 100,
        }}
      />

      <View style={{ flexDirection: "row" }}>
        <FontAwesome name="plus-square-o" size={24} color="white" />
        <FontAwesome5
          name="heart"
          size={24}
          color="white"
          style={{ marginLeft: 32 }}
        />
        <FontAwesome5
          name="facebook-messenger"
          size={24}
          color="white"
          style={{ marginLeft: 32 }}
        />
      </View>
    </View>
  )
}
