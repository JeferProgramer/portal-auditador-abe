const PlusIcon = ({ size = 'default' }) => {
  const defaultSVG = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={15}
      height={15}
      fill="none"
    >
      <path
        stroke="#A6D04F"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.167}
        d="M7.5 5.167v4.667M5.167 7.5h4.666m3.5 0a5.833 5.833 0 1 1-11.666 0 5.833 5.833 0 0 1 11.666 0Z"
      />
    </svg>
  );

  const bigSVG = (
    <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_5441_13676)">
        <path d="M9 6.5V12.5M6 9.5H12M16.5 9.5C16.5 13.6421 13.1421 17 9 17C4.85786 17 1.5 13.6421 1.5 9.5C1.5 5.35786 4.85786 2 9 2C13.1421 2 16.5 5.35786 16.5 9.5Z" stroke="#A6D04F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </g>
      <defs>
        <clipPath id="clip0_5441_13676">
          <rect width="18" height="18" fill="white" transform="translate(0 0.5)" />
        </clipPath>
      </defs>
    </svg>
  );

  return size === 'big' ? bigSVG : defaultSVG;
};

export default PlusIcon;

