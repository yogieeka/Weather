import { useEffect } from "react";
import { ActivityIndicator, Button, Text, View } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";

import { useTheme } from "@/theme";
import { Brand } from "@/components/molecules";
import { SafeScreen } from "@/components/template";

import type { ApplicationScreenProps } from "@/types/navigation";

function Startup({ navigation }: ApplicationScreenProps) {
  const { layout, gutters, fonts, changeTheme } = useTheme();
  const { t } = useTranslation(["startup"]);

  const { isSuccess, isFetching, isError } = useQuery({
    queryKey: ["startup"],
    queryFn: () => {
      return Promise.resolve(true);
    },
  });

  useEffect(() => {
    changeTheme("dark");
  }, []);

  return (
    <SafeScreen>
      <Text
        style={[
          fonts.size_24,
          fonts.gray800,
          fonts.bold,
          layout.itemsStretch,
          { alignSelf: "center" },
        ]}
      >
        {"Technical Test – Mobile Application Developer"}
      </Text>
      <View
        style={[
          layout.flex_1,
          layout.col,
          layout.itemsCenter,
          layout.justifyCenter,
        ]}
      >
        <Button
          title="Task 1 (sequence of number)"
          onPress={() => navigation.navigate("Task")}
        />
        <View style={{ margin: 10 }} />
        <Button
          title="Task 2 (Weather App)"
          onPress={() => navigation.navigate("WeatherTab")}
        />
      </View>
    </SafeScreen>
  );
}

export default Startup;
