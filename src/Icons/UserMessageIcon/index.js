const UserMessageIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        stroke="#9197B3"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4.43 16.199a3.334 3.334 0 0 1 3.07-2.032h5c1.38 0 2.563.838 3.07 2.032m-2.237-8.282a3.333 3.333 0 1 1-6.666 0 3.333 3.333 0 0 1 6.666 0Zm5 2.083a8.333 8.333 0 1 1-16.666 0 8.333 8.333 0 0 1 16.666 0Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default UserMessageIcon;
