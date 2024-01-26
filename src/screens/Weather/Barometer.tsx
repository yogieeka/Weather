import React, { useState } from "react";
import { Dimensions, Text, View } from "react-native";

import { useTheme } from "@/theme";
import { SafeScreen } from "@/components/template";

import type { ApplicationScreenProps } from "@/types/navigation";
import { BarChart, LineChart, ruleTypes } from "react-native-gifted-charts";
import { WEATHER_DATA } from "@/Data";
import moment from "moment";
import { APP_COLOR, FONTS } from "@/constants";
import Icon from "react-native-vector-icons/MaterialIcons";

function Barometer({ navigation }: ApplicationScreenProps) {
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
            borderWidth: 2,
            alignItems: "center",
            alignSelf: "center",
            width: "40%",
            paddingVertical: 50,
            borderRadius: 10,
            borderColor: APP_COLOR.white,
          },
        ]}
      >
        <Icon name="cloud" size={100} color={APP_COLOR.white} />
        <Text
          style={[
            fonts.size_40,
            fonts.gray800,
            { fontFamily: FONTS.nunito_bold },
          ]}
        >
          {WEATHER_DATA.current.temp_f + " (°F)"}
        </Text>

        <View
          style={{
            // borderWidth: 1,
            // alignItems: "center",
            alignSelf: "center",
            paddingHorizontal: 10,
            width: "80%",
            paddingVertical: 20,
            borderRadius: 10,
            marginTop: 20,
            borderColor: APP_COLOR.white,
          }}
        >
          <Text
            style={[
              fonts.size_16,
              fonts.gray800,
              { fontFamily: FONTS.nunito_bold },
            ]}
          >
            {"Wind: " + WEATHER_DATA.current.wind_kph + " kmph"}
          </Text>
          <Text
            style={[
              fonts.size_16,
              fonts.gray800,
              { fontFamily: FONTS.nunito_bold },
            ]}
          >
            {"Pressure: " + WEATHER_DATA.current.pressure_mb + " mb"}
          </Text>
          <Text
            style={[
              fonts.size_16,
              fonts.gray800,
              { fontFamily: FONTS.nunito_bold },
            ]}
          >
            {"Precip: " + WEATHER_DATA.current.precip_mm + " mm"}
          </Text>
        </View>
      </View>
    </SafeScreen>
  );
}

export default Barometer;
