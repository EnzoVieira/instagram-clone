import React from "react"
import { FlatList, Image, View } from "react-native"
import { Entypo } from "@expo/vector-icons"
import { stories } from "../data/lists"
import { theme } from "../styles/theme"

export const StoriesFlatList = () => {
  return (
    <FlatList
      data={stories}
      horizontal
      style={{ marginTop: 8 }}
      renderItem={({ item }) => (
        <View>
          <Image
            source={item.uri}
            style={{
              width: 80,
              height: 80,
              borderRadius: 40,
              marginLeft: 16,
              borderWidth: item.mine ? 0 : 3.6,
              borderColor: item.mine
                ? theme.background
                : item.cf
                ? "green"
                : "purple",
            }}
          />

          {item.mine && (
            <View
              style={{
                backgroundColor: theme.button,
                width: 30,
                height: 30,
                position: "relative",
                bottom: 30,
                left: 70,
                borderRadius: 15,
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 3,
                borderColor: theme.background,
              }}
            >
              <Entypo name="plus" size={24} color="white" />
            </View>
          )}
        </View>
      )}
    />
  )
}
