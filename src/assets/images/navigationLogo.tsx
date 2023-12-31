import { heightPixel, widthPixel } from 'utils/normalizeUtils';
import React from 'react';
import { SvgXml } from 'react-native-svg';

interface Iprops {
    height?: number;
    width?: number
}

export const NavigationLogo: React.FC<Iprops> = (props) => {
    const { height = heightPixel(14), width = widthPixel(14) } = props;
    const xml = `
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.19207 12.3847L12.9415 2.25211C13.0036 2.08563 13.0166 1.90481 12.9788 1.73119C12.941 1.55757 12.8541 1.39846 12.7285 1.27282C12.6029 1.14718 12.4438 1.0603 12.2701 1.02253C12.0965 0.984756 11.9157 0.997686 11.7492 1.05978L1.61212 4.81376C1.42647 4.88245 1.26769 5.00878 1.15903 5.17424C1.05036 5.3397 0.99753 5.53561 1.00826 5.73327C1.01899 5.93093 1.09272 6.11996 1.21865 6.27269C1.34459 6.42542 1.51611 6.53382 1.70811 6.58201L6.27497 7.73085L7.41481 12.2827C7.46062 12.4776 7.56818 12.6524 7.72146 12.7812C7.87474 12.9099 8.06552 12.9857 8.26537 12.9971C8.46522 13.0086 8.66342 12.9552 8.83042 12.8448C8.99742 12.7344 9.12428 12.5731 9.19207 12.3847Z" stroke="white" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`
    return (
        <SvgXml xml={xml} height={height} width={width} />
    )
}