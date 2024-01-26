import React, { useState } from "react";
import { Dimensions, FlatList, ScrollView, Text, View } from "react-native";

import { useTheme } from "@/theme";
import { SafeScreen } from "@/components/template";

import type { ApplicationScreenProps } from "@/types/navigation";
import { BarChart, LineChart, ruleTypes } from "react-native-gifted-charts";
import { WEATHER_DATA } from "@/Data";
import moment from "moment";
import { APP_COLOR } from "@/constants";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
function Weather({ navigation }: ApplicationScreenProps) {
  const { layout, gutters, fonts } = useTheme();

  const [onEndReached, setOnEndReached] = useState(false);
  const [num, setNum] = useState(9);

  const barData = WEATHER_DATA.forecast.forecastday[0].hour.map((item) => {
    return {
      value: item.temp_f,
      frontColor: "#4ABFF4",
      label: moment(item.time).format("HH:mm"),
    };
  });

  const lineData = WEATHER_DATA.forecast.forecastday.map((item) => {
    return {
      value: item.day.avgtemp_f,
      date: moment(item.date).format("DD MMM"),
      dateTime: item.date,
      label: moment(item.date).format("DD MMM"),
      labelTextStyle: { color: "lightgray", width: 60 },
    };
  });

  return (
    <SafeScreen>
      <View
        style={[
          layout.flex_1,
          layout.col,
          layout.itemsCenter,
          gutters.marginTop_16,
        ]}
      >
        <Text style={[fonts.size_16, fonts.gray800]}>{"HOURLY (°F)"}</Text>
        <ScrollView horizontal>
          <BarChart
            barWidth={5}
            initialSpacing={20}
            endSpacing={30}
            frontColor="white"
            spacing={40}
            yAxisTextStyle={{ color: "white" }}
            xAxisLabelTextStyle={{ color: "white" }}
            data={barData}
            yAxisThickness={0}
            xAxisThickness={0}
            showLine
            lineConfig={{
              color: "#F29C6E",
              thickness: 2,
              curved: true,
              hideDataPoints: true,
              shiftY: 20,
              // initialSpacing: -30,
            }}
            showGradient
            pointerConfig={{
              pointerStripHeight: 160,
              pointerStripColor: "lightgray",
              pointerStripWidth: 2,
              pointerColor: "lightgray",
              radius: 6,
              pointerLabelWidth: 100,
              pointerLabelHeight: 90,
              pointerLabelComponent: (items) => {
                return (
                  <View
                    style={{
                      height: 90,
                      width: 100,
                      justifyContent: "center",
                      // marginTop: -30,
                      // marginLeft: -40,
                    }}
                  >
                    <Text
                      style={{
                        color: "white",
                        fontSize: 14,
                        marginBottom: 6,
                        textAlign: "center",
                      }}
                    >
                      {items[0].date}
                    </Text>

                    <View
                      style={{
                        paddingHorizontal: 14,
                        paddingVertical: 6,
                        borderRadius: 16,
                        backgroundColor: "white",
                      }}
                    >
                      <Text style={{ fontWeight: "bold", textAlign: "center" }}>
                        {"Temp " + items[0].value}
                      </Text>
                    </View>
                  </View>
                );
              },
            }}
          />
        </ScrollView>

        <Text style={[fonts.size_16, fonts.gray800, gutters.marginTop_40]}>
          {"DAILY (°F)"}
        </Text>

        <ScrollView horizontal>
          <LineChart
            areaChart
            data={lineData}
            hideDataPoints
            spacing={110}
            color="#00ff83"
            thickness={2}
            startFillColor="rgba(20,105,81,0.3)"
            endFillColor="rgba(20,85,81,0.01)"
            startOpacity={0.9}
            endOpacity={0.2}
            initialSpacing={10}
            noOfSections={6}
            stepHeight={50}
            height={300}
            maxValue={100}
            yAxisColor="white"
            yAxisThickness={0}
            rulesType={ruleTypes.SOLID}
            rulesColor="gray"
            yAxisTextStyle={{ color: "gray" }}
            yAxisTextNumberOfLines={2}
            xAxisColor="lightgray"
            xAxisLabelTextStyle={{ color: "lightgray" }}
            xAxisLabelsHeight={0}
            pointerConfig={{
              pointerStripHeight: 160,
              pointerStripColor: "lightgray",
              pointerStripWidth: 2,
              pointerColor: "lightgray",
              radius: 6,
              pointerLabelWidth: 100,
              pointerLabelHeight: 90,
              autoAdjustPointerLabelPosition: false,
              pointerLabelComponent: (items) => {
                return (
                  <View
                    style={{
                      height: 90,
                      width: 100,
                      justifyContent: "center",
                      // marginTop: -30,
                      // marginLeft: -40,
                    }}
                  >
                    <Text
                      style={{
                        color: "white",
                        fontSize: 14,
                        marginBottom: 6,
                        textAlign: "center",
                      }}
                    >
                      {items[0].date}
                    </Text>

                    <View
                      style={{
                        paddingHorizontal: 14,
                        paddingVertical: 6,
                        borderRadius: 16,
                        backgroundColor: "white",
                      }}
                    >
                      <Text style={{ fontWeight: "bold", textAlign: "center" }}>
                        {"avgtemp_f " + items[0].value}
                      </Text>
                    </View>
                  </View>
                );
              },
            }}
          />
        </ScrollView>
        <FlatList
          data={lineData}
          horizontal
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View
              style={{ margin: 10, marginHorizontal: 24, alignItems: "center" }}
            >
              <Text
                style={[
                  fonts.size_16,
                  fonts.gray800,
                  { color: APP_COLOR.white },
                ]}
              >
                {moment(item.dateTime).format("ddd")}
              </Text>
              <MaterialIcons name="cloud" size={30} color={APP_COLOR.white} />
              <Text
                style={[
                  fonts.size_16,
                  fonts.gray800,
                  { color: APP_COLOR.white },
                ]}
              >
                {item.value + "°F"}
              </Text>
            </View>
          )}
        />
      </View>
    </SafeScreen>
  );
}

export default Weather;
