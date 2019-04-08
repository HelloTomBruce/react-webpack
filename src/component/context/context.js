import React from "react"

export const themes = {
  light: {
    color: "yellow",
    title: "light"
  },
  dark: {
    color: "blue",
    title: "dark"
  }
}

const defaultContext = {
  theme:       themes.light,
  changeTheme: () => {}
}

export const ThemeContext = React.createContext(defaultContext)
