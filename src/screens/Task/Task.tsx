import { useEffect, useState } from "react";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";

import { useTheme } from "@/theme";
import { Brand } from "@/components/molecules";
import { SafeScreen } from "@/components/template";

import type { ApplicationScreenProps } from "@/types/navigation";
import { APP_COLOR, FONTS } from "@/constants";
import InputComp from "@/components/Input";
import Icon from "react-native-vector-icons/MaterialIcons";

function Task({ navigation }: ApplicationScreenProps) {
  const { layout, gutters, fonts } = useTheme();

  const [valTester, setValTester] = useState("");
  const [isShowTester, setShowTester] = useState<boolean>(false);

  const onSubmitData = (data: any) => {
    setShowTester(true);
  };

  function findDigitPosition(n: number) {
    const digitTh = n;
    let length = 1;
    let count = 9;

    while (n > length * count) {
      n -= length * count;
      length += 1;
      count *= 10;
    }

    let num = Math.pow(10, length - 1) + Math.floor((n - 1) / length);
    let digitIndex = (n - 1) % length;
    let digit = num.toString()[digitIndex];

    return `The ${digitTh}th digit number is ${digit} and lies on number ${num}`;
  }

  return (
    <SafeScreen>
      <View
        style={[
          layout.flex_1,
          layout.col,
          layout.itemsCenter,
          layout.justifyCenter,
          gutters.marginHorizontal_16,
        ]}
      >
        <InputComp
          title="Tester"
          textInputProps={{
            style: {
              color: APP_COLOR.black,
            },
            placeholder: "Please input number",
            inputMode: "numeric",
            onChangeText(text) {
              setValTester(text);
              console.log(text);
            },
          }}
          rightIcon={
            <TouchableOpacity
              onPress={() => {
                setShowTester(false);
                onSubmitData(valTester);
              }}
            >
              <Icon name={"send"} size={14} color={APP_COLOR.orange} />
            </TouchableOpacity>
          }
        />

        {isShowTester && valTester !== "" && (
          <Text
            style={{
              color: APP_COLOR.white,
              fontFamily: FONTS.nunito_regular,
              fontSize: 12,
              marginTop: 10,
            }}
          >
            {findDigitPosition(Number.parseInt(valTester))}
          </Text>
        )}
      </View>
    </SafeScreen>
  );
}

export default Task;
