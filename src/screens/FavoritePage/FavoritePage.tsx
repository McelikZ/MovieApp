import React, { useState, useCallback } from "react";
import { View, Button, Alert } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

const FavoritePage = () => {
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state: string) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("Video has finished playing!");
    }
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", backgroundColor: "#000" }}>
      <YoutubePlayer
        height={300}
        play={playing}
        videoId="iee2TATGMyI" // Youtube video ID
        onChangeState={onStateChange}
      />
      <Button title={playing ? "Pause" : "Play"} onPress={() => setPlaying(prev => !prev)} />
    </View>
  );
};

export default FavoritePage;
