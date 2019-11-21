import React from 'react';

export default ({
  width = '28',
  height = '30',
  fill = '000000',
  margin = '0 0 0 0',
  padding = '0 0 0 0',
  viewBox = '0 0 28 30'
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      margin={margin}
      padding={padding}
    >
      <path
        d="M14 0.5C11.3916 0.5 9.09263 2.18366 8.35579 4.63C7.57474 4.28463 6.74947 4.09756 5.89474 4.09756C4.33136 4.09756 2.83201 4.70401 1.72653 5.78348C0.621051 6.86296 0 8.32705 0 9.85366C0.0034916 11.1284 0.439149 12.3661 1.23895 13.3736C2.03876 14.3811 3.15769 15.1016 4.42105 15.4227V25.6829H23.5789V15.4227C26.1726 14.7607 28 12.4727 28 9.85366C28 8.32705 27.3789 6.86296 26.2735 5.78348C25.168 4.70401 23.6686 4.09756 22.1053 4.09756C21.2505 4.09756 20.4253 4.28463 19.6442 4.63C18.9074 2.18366 16.6084 0.5 14 0.5ZM13.2632 13.4512H14.7368V23.5244H13.2632V13.4512ZM8.8421 16.3293H10.3158V23.5244H8.8421V16.3293ZM17.6842 16.3293H19.1579V23.5244H17.6842V16.3293ZM4.42105 27.122V28.561C4.42105 28.9426 4.57632 29.3087 4.85268 29.5785C5.12905 29.8484 5.50389 30 5.89474 30H22.1053C22.4961 30 22.8709 29.8484 23.1473 29.5785C23.4237 29.3087 23.5789 28.9426 23.5789 28.561V27.122H4.42105Z"
        fill="white"
      />
    </svg>
  );
};