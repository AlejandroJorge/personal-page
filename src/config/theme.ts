const theme = {
  text: "#fff",
  primary: "#8f61d5",
  secondary: "#607cd1",
  background: "#0f1724",
  foreground: "#929daf",
  strongerBackground: "#000",
};

export function getCSSVars() {
  const cssVars = {};
  for (const key in theme) {
    //@ts-ignore
    cssVars[`${key}Color`] = theme[key];
  }
  return cssVars;
}
