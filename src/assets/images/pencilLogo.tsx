import { heightPixel, widthPixel } from 'utils/normalizeUtils';
import React from 'react';
import { SvgXml } from 'react-native-svg';

interface Iprops {
    height?: number;
    width?: number
}

export const PencilLogo: React.FC<Iprops> = (props) => {
    const { height = heightPixel(14), width = widthPixel(14) } = props;
    const xml = `
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.33334 14.6667H14.6667" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.5148 5.72448L9.0607 9.17858C8.74813 9.49113 8.32421 9.66671 7.88218 9.66669H5.0854C4.97489 9.66669 4.86891 9.6228 4.79077 9.54466C4.71263 9.46652 4.66873 9.36053 4.66873 9.25003V6.45315C4.66873 6.0112 4.84426 5.58736 5.15672 5.27481L8.60873 1.8217C8.76349 1.66688 8.94723 1.54407 9.14945 1.46027C9.35168 1.37647 9.56843 1.33333 9.78733 1.33331C10.0062 1.33329 10.223 1.3764 10.4252 1.46016C10.6275 1.54392 10.8112 1.66671 10.966 1.8215L12.5134 3.36885C12.6682 3.5234 12.791 3.70695 12.8749 3.90899C12.9587 4.11103 13.002 4.32761 13.0021 4.54637C13.0022 4.76512 12.9593 4.98176 12.8757 5.1839C12.792 5.38605 12.6694 5.56974 12.5148 5.72448Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

`
    return (
        <SvgXml xml={xml} height={height} width={width} />
    )
}