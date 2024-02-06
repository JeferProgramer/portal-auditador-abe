const PlusIcon = ({ size = 'default' }) => {
  const defaultSVG = (
    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_5296_37804)">
        <path d="M7.99967 5.83342V11.1668M5.33301 8.50009H10.6663M14.6663 8.50009C14.6663 12.182 11.6816 15.1668 7.99967 15.1668C4.31778 15.1668 1.33301 12.182 1.33301 8.50009C1.33301 4.81819 4.31778 1.83342 7.99967 1.83342C11.6816 1.83342 14.6663 4.81819 14.6663 8.50009Z" stroke="#A6D04F" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
      </g>
      <defs>
        <clipPath id="clip0_5296_37804">
          <rect width="16" height="16" fill="white" transform="translate(0 0.500092)" />
        </clipPath>
      </defs>
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

