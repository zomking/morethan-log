import { Theme } from "@emotion/react"
import { Colors, colors } from "./colors"
import { variables } from "./variables"
import { zIndexes } from "./zIndexes"

declare module "@emotion/react" {
  export interface Theme {
    scheme: Scheme
    colors: Colors
    zIndexes: typeof zIndexes
    variables: typeof variables
  }
}

export type Scheme = "light" | "dark" | "gangwon"

type Options = {
  scheme: Scheme
}

export const createTheme = (options: Options): Theme => <Theme>({
  scheme: options.scheme,
  colors: colors[options.scheme],
  variables: variables,
  zIndexes: zIndexes,
})
