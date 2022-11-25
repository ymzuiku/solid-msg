import { defineConfig } from "@twind/core";
import presetAutoprefix from "@twind/preset-autoprefix";
import presetTailwind from "@twind/preset-tailwind";
export * from "@twind/core";
export * from "@twind/preset-tailwind";

let tailwind = presetTailwind({
  disablePreflight: true,
}) as unknown;

interface TailwindColors {
  black: string;
  current: string;
  inherit: string;
  transparent: string;
  amber: Record<number, string>;
  blue: Record<number, string>;
  cyan: Record<number, string>;
  emerald: Record<number, string>;
  fuchsia: Record<number, string>;
  gray: Record<number, string>;
  green: Record<number, string>;
  indigo: Record<number, string>;
  lime: Record<number, string>;
  neutral: Record<number, string>;
  orange: Record<number, string>;
  pink: Record<number, string>;
  purple: Record<number, string>;
  red: Record<number, string>;
  rose: Record<number, string>;
  sky: Record<number, string>;
  slate: Record<number, string>;
  stone: Record<number, string>;
  teal: Record<number, string>;
  violet: Record<number, string>;
  yellow: Record<number, string>;
  zinc: Record<number, string>;
}

export const colors = (
  tailwind as Record<string, Record<string, TailwindColors>>
).theme!.colors;

tailwind = null;

// eslint-disable-next-line
export const defineUxConfig: typeof defineConfig = ((params: any = {}) => {
  return defineConfig({
    ...params,
    presets: [
      ...(params.presets || []),
      presetAutoprefix(),
      presetTailwind({ disablePreflight: !params.preflight }),
    ],
  });
  // eslint-disable-next-line
}) as any;
