declare module "styled-components" {
  interface DefaultTheme {
    color: {
      lightBlue: string;
      darkBlue: string;
      midBlue: string;
      areaBlue: string;
      darkText: string;
      lightText: string;
      lightRed: string;
    };
    font: {
      primary: string;
    };
  }
}

export default DefaultTheme;
