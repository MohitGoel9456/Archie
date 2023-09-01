import { screenHeight } from "./dimension";

const height = screenHeight;

export const reduceFontSize = (fontSize: number) => {
    if (height < 700)
        return fontSize - 1;
}