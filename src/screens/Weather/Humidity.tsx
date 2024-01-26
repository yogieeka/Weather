import React, { useState } from "react";
import { Dimensions, Text, View } from "react-native";

import { useTheme } from "@/theme";
import { SafeScreen } from "@/components/template";

import type { ApplicationScreenProps } from "@/types/navigation";
import { BarChart, LineChart, ruleTypes } from "react-native-gifted-charts";
import { WEATHER_DATA } from "@/Data";
import moment from "moment";
import { APP_COLOR, FONTS } from "@/constants";
function Humidity({ navigation }: ApplicationScreenProps) {
  const { layout, gutters, fonts } = useTheme();

  return (
    <SafeScreen>
      <View
        style={[
          // layout.flex_1,
          layout.col,
          layout.itemsCenter,
          gutters.marginTop_80,
          {
            borderWidth: 1,
            alignItems: "center",
            alignSelf: "center",
            width: "40%",
            paddingVertical: 50,
            borderRadius: 10,
            borderColor: APP_COLOR.white,
          },
        ]}
      >
        <Text
          style={[
            fonts.size_40,
            fonts.gray800,
            { fontFamily: FONTS.nunito_bold },
          ]}
        >
          {"Humidity"}
        </Text>
        <Text
          style={[
            fonts.size_40,
            fonts.gray800,
            { fontFamily: FONTS.nunito_bold },
          ]}
        >
          {WEATHER_DATA.current.humidity + "%"}
        </Text>
      </View>
    </SafeScreen>
  );
}

export default Humidity;
