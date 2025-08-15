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

const endpoints = [
  { title: "Trending Now", endpoint: "popular" },
  { title: "Upcoming", endpoint: "upcoming" },
  { title: "Top Rated", endpoint: "top_rated" },
  { title: "Now Playing", endpoint: "now_playing" },
];

const HomePage = () => {
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

  return (
    <SafeAreaView style={styles.mainContainer} edges={["top", "left", "right"]}>
      <View style={styles.headerContainer}>
        <CustomImage
          source={require("../../../assets/Images/Profile.png")}
          imageStyle={{ width: 50, height: 50,marginBottom:10}}
        />
        <CustomButton
          isImageOnly={true}
          source={require("../../../assets/Images/SearchIcon.png")}
          imageStyle={{ width: 65, height: 65,marginBottom:10 }}
          onPress={() => console.log("Tıklandı...")}
        />
      </View>

      <View style={styles.contentContainer}>
        <SectionList
          sections={sections}
          keyExtractor={(item) => item.id.toString()}
          renderItem={() => null} // item'i FlatList içinde render ediyoruz
          renderSectionHeader={({ section }) => (
            <View style={{ marginVertical: 10 }}>
              <Text
                style={{
                  fontSize: 24,
                  color: "white",
                  fontWeight: "500",
                  marginBottom: 15,
                  marginHorizontal:10,
                }}
              >
                {section.title}
              </Text>

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
                    onPress={()=> console.log(item.release_date)}
                      isImageOnly
                      source={{
                        uri:
                          item.fullPosterPath ||
                          `${IMAGE_URL}${item.poster_path}`,
                      }}
                      imageStyle={{
                        width: 110,
                        height: 170,
                        borderWidth: 0.5,
                        borderRadius: 5,
                        borderColor: "white",
                        resizeMode: "cover",
                      }}
                      buttonStyle={{ marginRight: 0,marginLeft:10 }}
                    />
                  )}
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{ paddingHorizontal: 0 }}
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
