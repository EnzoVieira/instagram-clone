import React from "react"
import { Image, View } from "react-native"
import {
  Foundation,
  Feather,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons"

export const Footer = () => {
  return (
    <View
      style={{
        height: 70,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Foundation name="home" size={24} color="white" />

      <Feather name="search" size={24} color="white" />

      <MaterialIcons name="ondemand-video" size={24} color="white" />

      <MaterialCommunityIcons name="shopping-outline" size={24} color="white" />

      <Image
        source={require("../../assets/myphoto-avatar.jpeg")}
        style={{ height: 35, width: 35, borderRadius: 17.5 }}
      />
    </View>
  )
}
