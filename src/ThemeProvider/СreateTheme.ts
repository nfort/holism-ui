import { ITheme, DefaultTheme } from "../Palette/variables";
import deepmerge from "../utils/deepmerge";
import DeepPartial from "../utils/deepPartial";

const createTheme = (options: DeepPartial<ITheme>) => deepmerge(DefaultTheme, options);

export default createTheme;
