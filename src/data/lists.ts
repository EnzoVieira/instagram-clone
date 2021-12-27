export const stories = [
    { uri: require("../../assets/myphoto-avatar.jpeg"), mine: true },
    {
      uri: require("../../assets/landscape-avatar.jpeg"),
      mine: false,
      cf: true,
    },
    {
      uri: require("../../assets/swimming-avatar.jpeg"),
      mine: false,
      cf: false,
    },
    { uri: require("../../assets/god-avatar.jpeg"), mine: false, cf: false },
  ]

  export const posts = [
    {
      uri: require("../../assets/myphoto.jpeg"),
      avatar: require("../../assets/myphoto-avatar.jpeg"),
      user: "Enzo Gabriel",
      location: "Coimbra, Portugal",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      uri: require("../../assets/landscape.jpeg"),
      avatar: require("../../assets/landscape-avatar.jpeg"),
      user: "Jaime Reimer",
      location: "Lago Moraine",
      description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ]