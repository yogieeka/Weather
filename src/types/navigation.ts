import type { StackScreenProps } from "@react-navigation/stack";

export type ApplicationStackParamList = {
  Startup: undefined;
  Example: undefined;
  Weather: undefined;
  Task: undefined;
  WeatherTab: undefined;
  Humidity: undefined;
};

export type ApplicationScreenProps =
  StackScreenProps<ApplicationStackParamList>;
