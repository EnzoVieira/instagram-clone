import React from "react"
import { FlatList, Image, Text, View } from "react-native"
import { AntDesign, Feather, FontAwesome5 } from "@expo/vector-icons"
import { posts } from "../data/lists"

export const PostsFlatList = () => {
  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => (
        <View>
          <View
            style={{ flexDirection: "row", marginLeft: 16, paddingVertical: 8 }}
          >
            <Image
              source={item.avatar}
              style={{ width: 35, height: 35, borderRadius: 17.5 }}
            />

            <View style={{ marginLeft: 16 }}>
              <Text style={{ color: "white" }}>{item.user}</Text>
              <Text style={{ color: "white", opacity: 0.8 }}>
                {item.location}
              </Text>
            </View>

            <AntDesign
              name="ellipsis1"
              color="white"
              size={24}
              style={{ position: "absolute", right: 16, top: 15 }}
            />
          </View>

          <Image source={item.uri} style={{ width: "100%", height: 450 }} />

          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 16,
                paddingHorizontal: 16,
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <FontAwesome5 name="heart" size={32} color="white" />
                <Feather
                  name="message-circle"
                  size={32}
                  color="white"
                  style={{ marginLeft: 16 }}
                />
                <Feather
                  name="send"
                  size={32}
                  color="white"
                  style={{ marginLeft: 16 }}
                />
              </View>

              <Feather name="bookmark" size={32} color="white" />
            </View>

            <View
              style={{
                marginTop: 16,
                paddingHorizontal: 16,
                flexDirection: "row",
              }}
            >
              <Image
                source={require("../../assets/myphoto-avatar.jpeg")}
                style={{
                  height: 24,
                  width: 24,
                  borderRadius: 17.5,
                  marginRight: 6,
                }}
              />

              <Text style={{ color: "white" }}>
                Curtido por
                <Text style={{ fontWeight: "bold" }}>
                  {" "}
                  Enzo Gabriel e outras 179 pessoas
                </Text>
              </Text>
            </View>

            <Text
              style={{ color: "white", marginTop: 8, paddingHorizontal: 16 }}
            >
              <Text style={{ fontWeight: "bold" }}>{item.user} </Text>
              {item.description}
            </Text>
          </View>
        </View>
      )}
    />
  )
}
