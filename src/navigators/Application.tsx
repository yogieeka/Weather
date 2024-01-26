import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { Example, Startup } from "@/screens";
import { useTheme } from "@/theme";

import type { ApplicationStackParamList } from "@/types/navigation";
import Task from "@/screens/Task/Task";
import Weather from "@/screens/Weather/Weather";
import WeatherTab from "@/screens/Weather/WeatherTab";

const Stack = createStackNavigator<ApplicationStackParamList>();

function ApplicationNavigator() {
  const { variant, navigationTheme } = useTheme();

  return (
    <NavigationContainer theme={navigationTheme}>
      <Stack.Navigator key={variant} screenOptions={{ headerShown: true }}>
        <Stack.Screen
          name="Startup"
          component={Startup}
          options={{ title: "Home", headerShown: true }}
        />
        <Stack.Screen name="Example" component={Example} />
        <Stack.Screen name="Task" component={Task} />
        <Stack.Screen name="Weather" component={Weather} />
        <Stack.Screen
          name="WeatherTab"
          component={WeatherTab}
          options={{ title: "Weather" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default ApplicationNavigator;
