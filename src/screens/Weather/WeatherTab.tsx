import { ApplicationScreenProps } from "@/types/navigation";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Weather from "./Weather";
import { FONTS } from "@/constants";
import Humidity from "./Humidity";
import Barometer from "./Barometer";

const Tab = createMaterialTopTabNavigator();

function WeatherTab({ navigation }: ApplicationScreenProps) {
  return (
    <Tab.Navigator
      initialRouteName="Weather"
      screenOptions={{
        // tabBarActiveTintColor: "#e91e63",
        tabBarLabelStyle: { fontSize: 14, fontFamily: FONTS.nunito_bold },
        // tabBarStyle: { backgroundColor: "powderblue" },
      }}
    >
      <Tab.Screen
        name="Weather"
        component={Weather}
        options={{ tabBarLabel: "Temperature" }}
      />
      <Tab.Screen
        name="Humidity"
        component={Humidity}
        options={{ tabBarLabel: "Humidity" }}
      />
      <Tab.Screen
        name="Barometer"
        component={Barometer}
        options={{ tabBarLabel: "Barometer" }}
      />
      {/* <Tab.Screen
        name="Weather"
        component={Weather}
        options={{ tabBarLabel: "Tes" }}
      />
      <Tab.Screen
        name="Weather"
        component={Weather}
        options={{ tabBarLabel: "123" }}
      /> */}
    </Tab.Navigator>
  );
}

export default WeatherTab;
