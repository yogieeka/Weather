export const APP_COLOR = {
  secondary: "#FAF6F4",
  secondary_dark: "#DCDCDC",
  subtitle_gray: "#707070",
  yellow: "#FFE03A",
  yellow_bg_doa: "#FCFFD0",
  yello_soft: "#FCB813",
  primary: "#AB3F01",
  lime: "#ACE98C",
  pink: "#FC76B3",
  gold: "#FFD700",
  white: "#FFFFFF",
  black: "black",
  dark: "#1C1C1C",
  orange: "#E65F2B",
  softOrange: "#FCDEA9",
  darkOrange: "#FB6107",
  blue_facebook: "#1977F3",
  blue_linkedin: "#0274B3",
  blue_dark: "#2D3156",
  blue_moodtracker: "#ABD8FFF0",
  green_play_button: "#96DE70",
  green_lighter: "#D8FFC4",
  bg_input_gray: "#E9E9E9",
  background: "#E7E7E7",
  placeholderText: "#C9C9C9",
  borderGray: "#D8D8D8",
  secondaryBlack: "#303B4D",
  secondaryWhite: "#D9D9D9",
  grey: "#CDCDCD",
  greySecond: "#929292",
  softGrey: "#CDCDCD",
  silver: "#F4F4F4",
  softGreen: "#CDE077",
  secondaryGrey: "#555555",
  veryDarkGrey: "#545454",
  darkersGrey: "#6B6B6B",
  verySoftGreen: "#EFF3DA",
  veryLightGrey: "#F1F1F1",
  veryDarkBlack: "#202020",
  verySoftBlue: "#EBF7FA",
  verySoftSilver: "#F9F9F9",
  green: "#39AB4B",
  softBlue: "#2F84A1",
  blue: "#005FAC",
  blacks: "#262626",
  border: "#D0D0D0",
  placeholder: "#A8A8A8",
  greenDark: "#5B8001",
  greenText: "#2C6C19",
  blacksDark: "#373737",
  line: "#FFF6E6",
  bgSilver: "#F5F5F5",
  greyText: "#797979",
  brown: "#603808",
  darkGrey: "#656565",
  purple: "#6337DF",
  cygan: "#2ABFFF",
  orangeSoft: "#FFA800",
  softBrown: "#C96100",
};

export const REGEX = {
  email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  only_number: /^[0-9]*$/,
  scan_phone_number_format_id: /^(\d{0,3})(\d{0,4})(\d{0,4})$/g,
  password: /^[a-z]+$/g,
  passwordSpecial: /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
  phoneNumber: /^[1-9][\d]*|0$/,
  passwordWithSpecialAndUppercase:
    /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/,
  disableSpecialChar: /^[a-zA-Z0-9]+$/,
  disableSpecialChar1: /^[a-zA-Z0-9' ]+$/,
  disableSpecialChar2: /^[a-zA-Z0-9'_./-]+$/,
  phoneNumberWithoutSpecial: /^[0-9]+$/,
  phoneNumberWithoutSpecial1: /^[0-9-]+$/,
};

export const STATUS_COLOR = {
  failed: "#FFE0DB",
  success: "#D8FFC4",
  pending: APP_COLOR.white,
};

export const STATUS_COLOR_TEXT = {
  failed: "#FF684D",
  success: "#ACE98C",
  pending: APP_COLOR.subtitle_gray,
};

export const STATUS_TEXT = {
  failed: "Gagal",
  success: "Berhasil",
  pending: "Pending",
};

export const STATUS_PAYMENT = {
  paid: {
    title: "Terbayar",
    color: APP_COLOR.lime,
  },
  unpaid: {
    title: "Proses Pembayaran",
    color: APP_COLOR.yellow,
  },
  failed: {
    title: "Gagal",
    color: APP_COLOR.orange,
  },
};

export const FONTS = {
  nunito_black: "Poppins-Black",
  nunito_black_italic: "Poppins-BlackItalic",
  nunito_bold: "Poppins-Bold",
  nunito_bold_italic: "Poppins-BoldItalic",
  nunito_extra_bold: "Poppins-ExtraBold",
  nunito_regular: "Poppins-Regular",
  nunito_semibold: "Poppins-SemiBold",
  nunito_medium: "Poppins-Medium",
};

export const toRupiah = (angka?: any, prefixRupiah = true) => {
  if (!angka) {
    return "$0";
  }
  const isMinus = angka < 0 ? "- $" : "$";
  let newAngka = angka.toString();
  const angkaInt = parseInt(newAngka);
  newAngka = angkaInt.toString();
  const number_string = newAngka.replace(/[^0+(?=\d),\d]/g, ""),
    split = number_string.split(","),
    sisa = split[0].length % 3,
    ribuan = split[0].substr(sisa).match(/\d{3}/gi);
  let rupiah = split[0].substr(0, sisa);

  // tambahkan titik jika yang di input sudah menjadi angka ribuan
  if (ribuan) {
    const separator = sisa ? "." : "";
    rupiah += separator + ribuan.join(".");
  }

  rupiah = split[1] !== undefined ? rupiah + "," + split[1] : rupiah;
  if (prefixRupiah) {
    return rupiah ? isMinus + rupiah : "";
  }
  return rupiah;
};

export const formatterUSD = new Intl.NumberFormat("ms", {
  style: "currency",
  currency: "MYR",

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

export const toCent = (amount: number) => {
  var currency = amount / 100;
  var num = parseFloat(String(currency)).toFixed(2);

  // return num;
  return formatterUSD.format(Number(num)).replace(/^(\D+)/, "$1 ");
};
