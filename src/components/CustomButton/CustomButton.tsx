import React from "react";
import {
  Pressable,
  Text,
  Image,
  ImageSourcePropType,
  StyleProp,
  ViewStyle,
  TextStyle,
  ImageStyle,
} from "react-native";
import styles from "./CustomButton.style";

interface CustomButtonList {
  onPress?: () => void;
  buttonText?: string;
  showText?: boolean;
  isTextOnly?: boolean;
  isImageOnly?: boolean;
  source?: ImageSourcePropType;

  buttonStyle?: StyleProp<ViewStyle>;
  buttonTextStyle?: StyleProp<TextStyle>;
  imageStyle?: StyleProp<ImageStyle>;
}

const CustomButton: React.FC<CustomButtonList> = ({
  onPress = () => {},
  buttonText = "Default",
  showText = true,
  isTextOnly = false,
  isImageOnly = false,
  source,

  buttonStyle,
  buttonTextStyle,
  imageStyle,
}) => {
  if (isTextOnly) {
    return (
      <Pressable onPress={onPress}>
        <Text style={[styles.defaultButtonText, buttonTextStyle]}>
          {buttonText}
        </Text>
      </Pressable>
    );
  }

  if (isImageOnly && source) {
    return (
      <Pressable onPress={onPress} style={buttonStyle}>
        <Image source={source} resizeMode="contain" style={imageStyle} />
      </Pressable>
    );
  }

  return (
    <Pressable onPress={onPress} style={[styles.defaultButton, buttonStyle]}>
      {source && (
        <Image
          source={source}
          resizeMode="contain"
          style={[styles.defaultButtonImageStyle, imageStyle]}
        />
      )}

      {showText && (
        <Text style={[styles.defaultButtonText, buttonTextStyle]}>
          {buttonText}
        </Text>
      )}
    </Pressable>
  );
};

export default CustomButton;
