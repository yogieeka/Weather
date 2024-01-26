import React from "react";
import {
  Platform,
  StyleSheet,
  TextStyle,
  ViewProps,
  ViewStyle,
} from "react-native";
import { View, TextInput, TextInputProps } from "react-native";

import TextComp from "../Text";
import {
  APP_COLOR,
  FONTS,
  STATUS_COLOR,
  STATUS_COLOR_TEXT,
} from "../../constants";
import { useTheme } from "@/theme";

interface IInputCompProps extends ViewProps {
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  rightIconContainerStyle?: ViewStyle;
  leftIconContainerStyle?: ViewStyle;
  titleStyle?: TextStyle;
  textInputProps?: TextInputProps;
  shadow?: boolean;
  error?: any;
  title?: string;
  editable?: boolean;
  maxLength?: number;
}

const shadowStyle =
  Platform.OS === "ios"
    ? {
        // shadowColor: '#000',
        // shadowOffset: {
        //   width: 0,
        //   height: 4,
        // },
        // shadowOpacity: 0.2,
        // shadowRadius: 6.0,
        // shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.05,
        shadowRadius: 6.0,
      }
    : { elevation: 6 };

const InputComp: React.FC<IInputCompProps> = (props) => {
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
    <View>
      {props.title && (
        <TextComp
          style={[
            {
              color: APP_COLOR.blacks,
              fontFamily: FONTS.nunito_regular,
              fontSize: 14,
              alignSelf: "flex-start",
              marginTop: 14,
              marginBottom: 8,
            },
            props.titleStyle,
          ]}
        >
          {props.title}
        </TextComp>
      )}
      <View
        style={[
          styles.textInputContainer,
          props.shadow && shadowStyle,
          props.style,
          props.error && styles.errorStyle,
        ]}
      >
        <View
          style={{
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          {props.leftIcon && (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                marginRight: 4,
              }}
            >
              {props.leftIcon}
            </View>
          )}
          <TextInput
            editable={props.editable}
            placeholder="Input Text"
            placeholderTextColor={APP_COLOR.subtitle_gray}
            {...props.textInputProps}
            style={[
              styles.textInput,
              props.textInputProps?.style,
              { paddingVertical: 10, fontFamily: FONTS.nunito_regular },
            ]}
            maxLength={props.maxLength}
          />
          {props.rightIcon && (
            <View
              style={[
                {
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                },
                props.rightIconContainerStyle,
              ]}
            >
              {props.rightIcon}
            </View>
          )}
        </View>
      </View>
      {props.error && (
        <TextComp
          numberOfLines={2}
          style={{
            color: STATUS_COLOR_TEXT.failed,
            marginTop: 5,
            fontSize: 12,
            alignSelf: "flex-start",
          }}
        >
          {props.error}
        </TextComp>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  textInputContainer: {
    borderColor: APP_COLOR.border,
    borderWidth: 1,
    height: 50,
    paddingHorizontal: 16,
    borderRadius: 6,
    paddingBottom: 4,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: APP_COLOR.white,
    width: "100%",
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 4,
    // },
    // shadowOpacity: 0.05,
    // shadowRadius: 6.0,
  },
  textInput: {
    fontSize: 12,
    borderWidth: 0,
    width: "100%",
    flex: 10,
  },
  errorStyle: {
    borderWidth: 1,
    borderColor: STATUS_COLOR_TEXT.failed,
    backgroundColor: STATUS_COLOR.failed,
  },
});

export default InputComp;
