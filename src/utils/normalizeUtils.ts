import { screenHeight, screenWidth } from "./dimension";
import { PixelRatio } from 'react-native';
const height = screenHeight;
const width = screenWidth;

const widthBaseScale = width / 414;
const heightBaseScale = height / 896;

function normalize(size: number, based = 'width') {
    const newSize = (based === 'height') ?
        size * heightBaseScale : size * widthBaseScale;
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

export const heightPixel = (size: number) => {
    return normalize(size, 'height');
};

//for width  pixel
export const widthPixel = (size: number) => {
    return normalize(size, 'width');
};

export const fontPixel = (size: number) => {
    return heightPixel(size);
};

export const pixelSizeVertical = (size: number) => {
    return heightPixel(size);
};
//for Margin and Padding horizontal pixel
export const pixelSizeHorizontal = (size: number) => {
    return widthPixel(size);
};