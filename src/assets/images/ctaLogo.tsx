import { heightPixel, widthPixel } from 'utils/normalizeUtils';
import React from 'react';
import { SvgXml } from 'react-native-svg';

interface Iprops {
    height?: number;
    width?: number
}

export const CTALogo: React.FC<Iprops> = (props) => {
    const { height = heightPixel(40), width = widthPixel(40) } = props;
    const xml = `
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="40" height="40" rx="12" fill="#E8ECFA"/>
<g clip-path="url(#clip0_1_830)">
<path d="M12.125 23.5V16.5C12.125 15.3397 12.5859 14.2269 13.4064 13.4064C14.2269 12.5859 15.3397 12.125 16.5 12.125H23.5C24.6603 12.125 25.7731 12.5859 26.5936 13.4064C27.4141 14.2269 27.875 15.3397 27.875 16.5V23.5C27.875 24.6603 27.4141 25.7731 26.5936 26.5936C25.7731 27.4141 24.6603 27.875 23.5 27.875H16.5C15.3397 27.875 14.2269 27.4141 13.4064 26.5936C12.5859 25.7731 12.125 24.6603 12.125 23.5Z" stroke="#1652F0" stroke-width="1.3125" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M23.3722 17.2473C23.311 17.3083 23.2331 17.3499 23.1482 17.3667C23.0634 17.3835 22.9755 17.3747 22.8956 17.3416C22.8157 17.3084 22.7475 17.2524 22.6994 17.1804C22.6514 17.1085 22.6258 17.024 22.6258 16.9375C22.6258 16.851 22.6514 16.7665 22.6994 16.6946C22.7475 16.6226 22.8157 16.5666 22.8956 16.5334C22.9755 16.5003 23.0634 16.4915 23.1482 16.5083C23.2331 16.5251 23.311 16.5667 23.3722 16.6278C23.413 16.6684 23.4453 16.7167 23.4674 16.7698C23.4894 16.823 23.5008 16.88 23.5008 16.9375C23.5008 16.995 23.4894 17.052 23.4674 17.1052C23.4453 17.1583 23.413 17.2066 23.3722 17.2473Z" fill="#1652F0" stroke="#1652F0" stroke-width="1.3125" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.6538 27.875C21.7143 27.4765 21.7465 27.0741 21.75 26.671C21.75 24.4376 20.8628 22.2957 19.2835 20.7165C17.7043 19.1372 15.5624 18.25 13.329 18.25C12.9259 18.2528 12.5235 18.285 12.125 18.3462" stroke="#1652F0" stroke-width="1.3125" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_1_830">
<rect width="21" height="21" fill="white" transform="translate(9.5 9.5)"/>
</clipPath>
</defs>
</svg>
`
    return (
        <SvgXml xml={xml} height={height} width={width} />
    )
}