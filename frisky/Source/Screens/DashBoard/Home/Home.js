import { StatusBar } from "expo-status-bar";

import React from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  SectionList,
  StyleSheet,
  Text,
  View,
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
        uri: "https://a10.gaanacdn.com/gn_pl_img/playlists/ZaP37OR3Dy/P374pvevWD/size_m_1606805633.webp",
      },
      {
        key: "2",
        text: "New Music Friday UK",
        tex: "5945734 Followers",
        uri: "https://m.media-amazon.com/images/I/61-DP+EXhHL._SX355_.jpg",
      },

      {
        key: "3",
        text: "Hits",
        tex: "5945734 Followers",
        uri: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1130637b-ff57-48b5-b8d6-bfe756c7af58/ddfyqy1-3657f3ec-c511-47e9-b5a4-470fb40076e1.jpg/v1/fill/w_1024,h_1024,q_75,strp/hiphop_tamizha_fanmade__by_kajandra_ddfyqy1-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcLzExMzA2MzdiLWZmNTctNDhiNS1iOGQ2LWJmZTc1NmM3YWY1OFwvZGRmeXF5MS0zNjU3ZjNlYy1jNTExLTQ3ZTktYjVhNC00NzBmYjQwMDc2ZTEuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.SwN4OGq6LkjOT2C9uoNldWQuv5sIwF9FLPpxxTf1YpA",
      },
      {
        key: "4",
        text: "Melody",
        tex: "5945734 Followers",
        uri: "https://a10.gaanacdn.com/gn_pl_img/playlists/XzVWRyL3dq/VWRv5pMeWd/size_m_1515081240.webp",
      },
      {
        key: "5",
        text: "Pep",
        tex: "5945734 Followers",
        uri: "https://1601606126.rsc.cdn77.org/raagaimg/r_img/250/t/tc0000508-1.jpg",
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
        uri: "https://raaga.gumlet.io/raagaimg/r_img/250/t/tc0001224-2.jpg?w=240&dpr=2.6",
      },
      {
        key: "2",
        text: "Campfire",
        tex: "123445 Followers",
        uri: "https://i.scdn.co/image/ab67706c0000bebbd275d0f7c811dfd6d911cf2d",
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
    textAlign: "center",
  },
  itemTex: {
    color: "rgba(255, 255, 255, 0.5)",
    marginTop: 5,
    textAlign: "center",
  },
  title: {
    alignItems: "center",
    
  },
});
