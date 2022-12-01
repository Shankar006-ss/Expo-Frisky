import { StatusBar } from "expo-status-bar";

import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  SafeAreaView,
  Image,
  FlatList,
} from "react-native";



const ListItem = ({ item }) => {
  return (
    <View style={styles.item}>
      <Image
        source={{
          uri: item.uri,
        }}
        style={styles.itemPhoto}
        resizeMode="cover"
      />
      <Text style={styles.itemText}>{item.text}</Text>
      <Text style={styles.itemTex}>{item.tex}</Text>
    </View>
  );
};

export default () => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <SafeAreaView style={{ flex: 1 }}>
        <SectionList
          contentContainerStyle={{ paddingHorizontal: 10 }}
          stickySectionHeadersEnabled={false}
          sections={SECTIONS}
          renderSectionHeader={({ section }) => (
            <>
              <Text style={styles.sectionHeader}>{section.title}</Text>
              {section.horizontal ? (
                <FlatList
                  horizontal
                  data={section.data}
                  renderItem={({ item }) => <ListItem item={item} />}
                  showsHorizontalScrollIndicator={false}
                />
              ) : null}
            </>
          )}
          renderItem={({ item, section }) => {
            if (section.horizontal) {
              return null;
            }
            return <ListItem item={item} />;
          }}
        />
      </SafeAreaView>
    </View>
  );
};

const SECTIONS = [
  {
    title: "Made for you",
    horizontal: true,
    data: [
      {
        key: "1",
        text: "Dazzling Dusty",
        tex: "123445 Followers",
        uri: "https://rukminim1.flixcart.com/image/832/832/l55nekw0/laptop-skin-decal/7/e/n/exclusive-high-quality-print-laptop-decal-skin-sticker-for-15-6-original-imagfwchkjtgwzk5.jpeg?q=70",
      },
      {
        key: "2",
        text: "New Music Friday UK",
        tex: "5945734 Followers",
        uri: "https://c-fa.cdn.smule.com/smule-gg-uw1-s-7/arr/50/30/d256cca3-a985-417f-9a34-33cec5169c9d.jpg",
      },

      {
        key: "3",
        text: "Hits",
        tex: "5945734 Followers",
        uri: "https://img.freepik.com/premium-photo/classic-sheets-with-music-notes-sign_488220-9925.jpg?w=2000",
      },
      {
        key: "4",
        text: "Melody",
        tex: "5945734 Followers",
        uri: "https://picsum.photos/id/1006/200",
      },
      {
        key: "5",
        text: "Pep",
        tex: "5945734 Followers",
        uri: "https://picsum.photos/id/1008/200",
      },
    ],
  },
  {
    title: "Pop",
    horizontal: true,
    data: [
      {
        key: "1",
        text: "Dazzling Dusty",
        tex: "123445 Followers",
        uri: "https://rukminim1.flixcart.com/image/832/832/l55nekw0/laptop-skin-decal/7/e/n/exclusive-high-quality-print-laptop-decal-skin-sticker-for-15-6-original-imagfwchkjtgwzk5.jpeg?q=70",
      },
      {
        key: "2",
        text: "Campfire",
        tex: "123445 Followers",
        uri: "https://c4.wallpaperflare.com/wallpaper/218/298/563/headphones-minimalism-pastel-pink-wallpaper-preview.jpg",
      },

      {
        key: "3",
        text: "Melody",
        tex: "123445 Followers",
        uri: "https://picsum.photos/id/1013/200",
      },
      {
        key: "4",
        text: "Pep",
        tex: "123445 Followers",
        uri: "https://picsum.photos/id/1015/200",
      },
      {
        key: "5",
        text: "Classy",
        tex: "123445 Followers",
        uri: "https://picsum.photos/id/1016/200",
      },
    ],
  },
  //   {
  //     title: 'Based on your recent listening',
  //     horizontal: true,
  //     data: [
  //       {
  //         key: '1',
  //         text: 'Item text 1',
  //         uri: 'https://picsum.photos/id/1020/200',
  //       },
  //       {
  //         key: '2',
  //         text: 'Item text 2',
  //         uri: 'https://picsum.photos/id/1024/200',
  //       },

  //       {
  //         key: '3',
  //         text: 'Item text 3',
  //         uri: 'https://picsum.photos/id/1027/200',
  //       },
  //       {
  //         key: '4',
  //         text: 'Item text 4',
  //         uri: 'https://picsum.photos/id/1035/200',
  //       },
  //       {
  //         key: '5',
  //         text: 'Item text 5',
  //         uri: 'https://picsum.photos/id/1038/200',
  //       },
  //     ],
  //   },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  sectionHeader: {
    fontWeight: "800",
    fontSize: 18,
    color: "#f4f4f4",
    marginTop: 20,
    marginBottom: 5,
    alignItems: "center",
    // marginLeft:120
    textAlign: "center",
  },
  item: {
    margin: 10,
  },
  itemPhoto: {
    width: 200,
    height: 200,
  },
  itemText: {
    color: "white",
    marginTop: 5,
    textAlign:"center",
  },
  itemTex: {
    color: "rgba(255, 255, 255, 0.5)",
    marginTop: 5,
    textAlign:"center",
  },
  title: {
    alignItems: "center",
  },
});
