export type CustomTheme = typeof globalTheme;

export const globalTheme = {
  fontSize: {
    h1: "100px",
    h2: "80px",
    h3: "64px",
    h4: "48px",
    h5: "32px",
    h6: "24px",
    xxl: "24px",
    xl: "20px",
    lg: "18px",
    md: "16px",
    sm: "14px",
    xs: "12px",
  },
  fontWeight: {
    extrabold: 900,
    bold: 700,
    default: 400,
    light: 300,
  },
  color: {
    /**
     * @inner
     * 사용성이 편하도록 기본값은 idx 0으로 설정합니다.(이러면 보통 중간값인 5가 디폴트임을 쉽게 알 수 있습니다.)
     */
    primary: [
      "#009B9F",

      "#C8FAEA",
      "#93F5DE",
      "#5AE2CE",
      "#31C5BC",
      "#009B9F",
      "#007988",
      "#005C72",
      "#00425C",
      "#00304C",
    ],
    sub: [
      "#DDDDDD",

      "#FAFAFA",
      "#EEEEEE",
      "#DDDDDD",
      "#CCCCCC",
      "#BBBBBB",
      "#AAAAAA",
    ],
  },

  border: {
    default: "1px solid #DDDDDD",
  },

  borderRadius: {
    default: "10px",
    rounded: "20px",
    soft: "10px",
    hard: "5px",
    round: "50%",
  },

  layouts: {
    header: {
      height: "60px",
    },
    footer: {
      height: "250px",
    },
    banner: {
      height: "160px",
    },
  },
};
