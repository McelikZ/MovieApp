import React, { useEffect } from "react";
import {
  View,
  Text,
  SectionList,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovie } from "../../redux/movieThunk";
import type { RootState, AppDispatch } from "../../redux/store";
import { IMAGE_URL } from "../../services/movieAppService";
import { CustomButton, CustomImage } from "../../components";
import styles from "./HomePage.style";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";


const endpoints = [
  { title: "Trending Now", endpoint: "popular" },
  { title: "Upcoming", endpoint: "upcoming" },
  { title: "Top Rated", endpoint: "top_rated" },
  { title: "Now Playing", endpoint: "now_playing" },
];

const HomePage = ({ navigation }: { navigation: any }) => {
  const dispatch: AppDispatch = useDispatch();
  const moviesByEndpoint = useSelector(
    (state: RootState) => state.movie.moviesByEndpoint
  );
  const loadingByEndpoint = useSelector(
    (state: RootState) => state.movie.loadingByEndpoint
  );
  useEffect(() => {
    endpoints.forEach((sec) => {
      dispatch(fetchMovie(sec.endpoint));
    });
  }, [dispatch]);

  const sections = endpoints.map((sec, index) => ({
    id: `section-${index}`,
    title: sec.title,
    data: moviesByEndpoint[sec.endpoint] || [],
    loading: loadingByEndpoint[sec.endpoint] || false,
  }));

  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={styles.mainContainer} edges={["top", "left", "right"]}>
      <View style={styles.headerContainer}>
        <CustomButton
          isImageOnly={true}
          imageStyle={{
            width: 60,
            height: 60,
            marginBottom: 10,
          }}
          onPress={() => console.log("Tıklandı...")}
         icon={<Ionicons name="person-circle" size={50} color="white" />}
        />
        <CustomButton
          isImageOnly={true}
          imageStyle={{
            width: 60,
            height: 60,
            marginBottom: 10,
          }}
          onPress={() => console.log("Tıklandı...")}
         icon={<Ionicons name="search-circle" size={50} color="white" />}
        />
      </View>

      <View style={styles.contentContainer}>
        <SectionList
          sections={sections}
          contentContainerStyle={{
            paddingBottom: insets.bottom + 60,
          }}
          keyExtractor={(item) => item.id.toString()}
          renderItem={() => null}
          renderSectionHeader={({ section }) => (
            <View style={{ marginVertical: 10 }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginHorizontal: 20,
                  marginBottom: 10,
                }}
              >
                <Text
                  style={{
                    fontSize: 24,
                    color: "white",
                    fontWeight: "500",
                  }}
                >
                  {section.title}
                </Text>

                <CustomButton
                  isTextOnly
                  buttonText="See all"
                  buttonTextStyle={{
                    color: "gray",
                    fontSize: 15,
                    opacity: 0.75,
                  }}
                  onPress={() => console.log("See all clicked")}
                />
              </View>

              {section.loading ? (
                <ActivityIndicator
                  size="large"
                  color="white"
                  style={{ marginVertical: 20 }}
                />
              ) : (
                <FlatList
                  horizontal
                  data={section.data}
                  keyExtractor={(item) => item.id.toString()}
                  renderItem={({ item }) => (
                    <CustomButton
                      onPress={() =>
                        navigation.navigate("DetailPage", {
                          movieId: item.id,
                          movieTitle: item.title,
                        })
                      }
                      isImageOnly
                      source={{
                        uri:
                          item.fullPosterPath ||
                          `${IMAGE_URL}${item.poster_path}`,
                      }}
                      imageStyle={{
                        width: 110,
                        height: 170,
                        borderWidth: 0.25,
                        borderRadius: 5,
                        borderColor: "white",
                        resizeMode: "cover",
                      }}
                    />
                  )}
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{
                    paddingLeft: 20,
                    paddingRight: 20, 
                  }}
                  ItemSeparatorComponent={() => <View style={{ width: 10 }} />} 
                />
              )}
            </View>
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomePage;
