import React, { useEffect, useState, useCallback } from "react";
import {
  View,
  Dimensions,
  Text,
  ActivityIndicator,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import YoutubePlayer from "react-native-youtube-iframe";
import { Ionicons } from "@expo/vector-icons";

import { fetchMovie } from "../../redux/movieThunk";
import type { RootState, AppDispatch } from "../../redux/store";
import { CustomButton } from "../../components";
import styles from "./DetailPage.style";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";

const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

export type RootStackParamList = {
  Home: undefined;
  Detail: { movieId: number };
};

type DetailPageNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Detail"
>;
type DetailPageRouteProp = RouteProp<RootStackParamList, "Detail">;

type Props = {
  navigation: DetailPageNavigationProp;
  route: DetailPageRouteProp;
};

const { width } = Dimensions.get("window");

const DetailPage: React.FC<Props> = ({ route, navigation }) => {
  const { movieId } = route.params;
  const dispatch: AppDispatch = useDispatch();

  const movieDetail = useSelector((state: RootState) =>
    Object.values(state.movie.moviesByEndpoint)
      .flat()
      .find((m: any) => m.id === movieId)
  );

  const loading = useSelector((state: RootState) =>
    Object.values(state.movie.loadingByEndpoint).some(Boolean)
  );

  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [previewMode, setPreviewMode] = useState(true);

  const firstVideoKey = movieDetail?.videos?.results[0]?.key;

  useEffect(() => {
    dispatch(fetchMovie("popular")); //Example
  }, [dispatch]);

  useEffect(() => {
    if (firstVideoKey) {
      setPlayingVideoId(firstVideoKey);
      setIsPlaying(false);
      setPreviewMode(true);
    }
  }, [firstVideoKey]);

  const onStateChange = useCallback((state: string) => {
    if (state === "ended") {
      setIsPlaying(false);
      setPreviewMode(true);
    }
  }, []);

  if (loading || !movieDetail)
    return <ActivityIndicator size="large" color="white" />;

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      >
        {playingVideoId && (
          <>
            {previewMode ? (
              <TouchableOpacity
                onPress={() => {
                  setPreviewMode(false);
                  setTimeout(() => setIsPlaying(true), 100);
                }}
              >
                <Image
                  source={{
                    uri: `https://img.youtube.com/vi/${playingVideoId}/hqdefault.jpg`,
                  }}
                  style={{ width, height: 200, borderRadius: 10 }}
                />
              </TouchableOpacity>
            ) : (
              <YoutubePlayer
                height={200}
                width={width}
                play={isPlaying}
                videoId={playingVideoId}
                onChangeState={onStateChange}
                forceAndroidAutoplay={true}
                initialPlayerParams={{
                  controls: true,
                  modestbranding: true,
                }}
              />
            )}
          </>
        )}

        <View style={styles.headerContainer}>
          <CustomButton
            isImageOnly
            icon={
              <Ionicons
                name="arrow-back-circle-outline"
                size={50}
                color="white"
              />
            }
            onPress={() => navigation.goBack()}
          />
        </View>

        <View style={styles.movieActionContainer}>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              alignItems: "center",
              flex: 1,
            }}
          >
            <Text
              style={{
                color: "white",
                marginLeft: 15,
                fontSize: 24,
                fontWeight: "800",
                textShadowColor: "rgba(0,0,0,0.8)",
                textShadowOffset: { width: 2, height: 2 },
                textShadowRadius: 5,
                flexShrink: 1,
              }}
            >
              {movieDetail.title}
            </Text>

            <View style={{ flexDirection: "row", marginLeft: "auto" }}>
              <CustomButton
                isImageOnly
                imageStyle={{ width: 50, height: 50 }}
                onPress={() => console.log("Ekle tıklandı")}
                icon={<Ionicons name="add" size={30} color="green" />}
              />
              <CustomButton
                isImageOnly
                buttonStyle={{ marginHorizontal: 10 }}
                imageStyle={{ width: 50, height: 50 }}
                onPress={() => console.log("İndir tıklandı")}
                icon={<Ionicons name="warning" size={25} color="red" />}
              />
            </View>
          </View>
        </View>

        <View style={styles.movieInfoContainer}>
          <View style={{ marginTop: 8 }}>
            <Text style={{ color: "white", fontSize: 15 }}>
              95% Match {movieDetail.release_date?.slice(0, 4)} 2h 49m R HD
            </Text>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 5,
                marginLeft: 5,
              }}
            >
              <Ionicons
                name="thumbs-up"
                size={18}
                color="green"
                style={{ marginRight: 5 }}
              />
              <Text style={{ color: "white", fontSize: 15 }}>Most Liked</Text>
            </View>
          </View>

          <CustomButton
            buttonStyle={{
              flexDirection: "row",
              marginVertical: 10,
              width: 330,
              height: 40,
              backgroundColor: "gray",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 20,
            }}
            buttonText={isPlaying ? "Pause" : "Play"}
            buttonTextStyle={{ fontSize: 15, color: "white" }}
            onPress={() => {
              if (previewMode) {
                setPreviewMode(false);
                setTimeout(() => setIsPlaying(true), 100);
              } else {
                setIsPlaying((prev) => !prev);
              }
            }}
            icon={
              <Ionicons name="caret-forward-outline" size={25} color="white" />
            }
          />

          <Text style={{ color: "white", fontSize: 20, marginVertical: 5 }}>
            Prolog
          </Text>
          <Text
            style={{
              color: "rgba(255,255,255,0.85)",
              fontSize: 15,
              lineHeight: 22,
              marginBottom: 10,
            }}
          >
            {movieDetail.overview}
          </Text>

          <View style={styles.footerContainer}>
            <Text style={{ color: "white", fontSize: 20, marginVertical: 5 }}>
              Top Cast
            </Text>

            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={movieDetail.cast || []}
              keyExtractor={(item: any) => item.id.toString()}
              contentContainerStyle={{ paddingHorizontal: 0 }}
              renderItem={({ item }) => (
                <View style={{ alignItems: "center", marginRight: 15 }}>
                  <Image
                    source={{
                      uri: item.profile_path
                        ? `${IMAGE_URL}${item.profile_path}`
                        : "https://via.placeholder.com/80x120",
                    }}
                    style={{
                      width: 80,
                      height: 120,
                      borderRadius: 50,
                      marginBottom: 5,
                    }}
                  />
                  <Text
                    style={{
                      color: "white",
                      fontSize: 12,
                      width: 80,
                      textAlign: "center",
                    }}
                    numberOfLines={2}
                    ellipsizeMode="tail"
                  >
                    {item.name}
                  </Text>
                </View>
              )}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailPage;
