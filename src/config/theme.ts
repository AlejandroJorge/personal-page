interface ITheme {
  color: {
    dark: IColorTheme;
    light: IColorTheme;
  };
}

interface IColorTheme {
  text: string;
  primary: string;
  secondary: string;
  background: string;
  foreground: string;
  strongerBackground: string;
}

const theme: ITheme = {
  color: {
    dark: {
      text: "#fff",
      primary: "#8f61d5",
      secondary: "#607cd1",
      background: "#0f1724",
      foreground: "#929daf",
      strongerBackground: "#000",
    },
    light: {
      text: "#000",
      primary: "#007bff",
      secondary: "#6c757d",
      background: "#f8f9fa",
      foreground: "#333333",
      strongerBackground: "#b0c4de",
    },
  },
};

export function getCSSVars(mode: "light" | "dark") {
  const colorTheme = theme.color[mode];
  const cssVars = {};
  for (const key in colorTheme) {
    //@ts-ignore
    cssVars[`${key}Color`] = colorTheme[key];
  }
  return cssVars;
}

export type LightningMode = "light" | "dark";
export const defaultLightningMode: LightningMode = "dark";
