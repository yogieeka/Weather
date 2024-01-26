import React from "react";
import { Text, TextProps } from "react-native";
import { FONTS } from "@/constants";
import { useTheme } from "@/theme";

interface ITextCompProps extends TextProps {}

const TextComp: React.FC<ITextCompProps> = (props) => {
  const {
    colors,
    variant,
    changeTheme,
    layout,
    gutters,
    fonts,
    components,
    backgrounds,
  } = useTheme();
  return (
    <Text
      {...props}
      style={[{ fontFamily: FONTS.nunito_regular }, props.style]}
    >
      {props.children}
    </Text>
  );
};

export default TextComp;
