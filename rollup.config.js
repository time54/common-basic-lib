/*
 * @Author: taojinchao
 * @Date: 2022-08-22 21:07:34
 * @LastEditors: taojinchao
 * @LastEditTime: 2022-08-22 21:16:06
 */
import json from "rollup-plugin-json";
import typescript from "@rollup/plugin-typescript";
import pkg from "./package.json";
export default {
  input: "packages/utils/src/index.ts",
  output: [
    {
      name: pkg.name,
      file: pkg.main,
      format: "umd",
    },
  ],
  plugins: [json(), typescript({ lib: ["es5", "es6", "dom"], target: "es5" })],
};
