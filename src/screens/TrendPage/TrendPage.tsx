import {
  Text,
  View,
  ImageBackground,
  Dimensions,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React, { useEffect } from "react";
import styles from "./TrendPage.style";
import { CustomButton, CustomImage } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovie } from "../../redux/movieThunk";
import type { RootState, AppDispatch } from "../../redux/store";
import { IMAGE_URL } from "../../services/movieAppService";
import { Ionicons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const TrendPage = () => {
  const dispatch: AppDispatch = useDispatch();
  const trendingMovies = useSelector(
    (state: RootState) => state.movie.moviesByEndpoint["popular"] || []
  );
  const loading = useSelector(
    (state: RootState) => state.movie.loadingByEndpoint["popular"] || false
  );

  useEffect(() => {
    dispatch(fetchMovie("popular"));
  }, [dispatch]);

  return (
    <View style={[styles.mainContainer, { flex: 1, backgroundColor: "black" }]}>
      <ImageBackground
        source={{
          uri: "https://image.tmdb.org/t/p/original/5oNOiqrgnX2m2YoDIf9lfqiIKvm.jpg",
        }}
        resizeMode="cover"
        style={{ width, height: (height * 2) / 3 }}
      >
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

        <View
          style={{
            position: "absolute",
            bottom: 20,
            left: 0,
            right: 0,
            flexDirection: "row",
            justifyContent: "center",
            gap: 15,
          }}
        >
          <CustomButton
            buttonText="Play"
            buttonTextStyle={{ color: "white", fontSize: 14 }}
            buttonStyle={{
              flexDirection: "row",
              backgroundColor: "rgba(0, 0, 0, 0.75)",
              paddingHorizontal: 10,
              paddingVertical: 4,
              borderRadius: 15,
              width: 100,
              height: 35,
              marginBottom: 40,
              alignItems: "center",
              justifyContent: "center",
              borderWidth: 1,
              borderColor: "white",
            }}
            onPress={() => console.log("Play clicked")}
            icon={
              <Ionicons name="caret-forward-outline" size={20} color="white" />
            }
          />
          <CustomButton
            buttonText="Details"
            buttonTextStyle={{ color: "white", fontSize: 14 }}
            buttonStyle={{
              backgroundColor: "rgba(0, 0, 0, 0.75)",
              paddingHorizontal: 10,
              paddingVertical: 4,
              borderRadius: 15,
              width: 100,
              height: 35,
              marginBottom: 40,
              alignItems: "center",
              justifyContent: "center",
              borderWidth: 1,
              borderColor: "white",
            }}
            onPress={() => console.log("Details clicked")}
          />
        </View>
      </ImageBackground>

      <View
        style={{
          flex: 1,
          backgroundColor: "black",
          paddingVertical: 15,
          marginTop: -20,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginHorizontal: 20,
            marginBottom: 10,
            marginTop: 10,
          }}
        >
          <Text style={{ color: "white", fontSize: 25, fontWeight: "500" }}>
            Trending Now
          </Text>

          <CustomButton
            isTextOnly
            buttonText="See all"
            buttonTextStyle={{ color: "gray", fontSize: 15, opacity: 0.75 }}
            onPress={() => console.log("See all clicked")}
          />
        </View>

        {loading ? (
          <ActivityIndicator size="large" color="white" />
        ) : (
          <FlatList
            horizontal
            data={trendingMovies}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <CustomButton
                onPress={() => console.log(item.title)}
                isImageOnly
                source={{
                  uri: item.fullPosterPath || `${IMAGE_URL}${item.poster_path}`,
                }}
                imageStyle={{
                  width: 110,
                  height: 170,
                  borderWidth: 0.25,
                  borderRadius: 5,
                  borderColor: "white",
                  resizeMode: "cover",
                  marginHorizontal: 5,
                }}
              />
            )}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingHorizontal: 20,
              paddingBottom: 100,
            }}
          />
        )}
      </View>
    </View>
  );
};

export default TrendPage;
