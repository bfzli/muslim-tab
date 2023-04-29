export default function Saying(props) {
  return (
    <svg
      width={props.size || "1em"}
      viewBox="0 0 124 124"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M74.7722 37.2786L74.7723 37.2786C80.2427 39.2088 83.5943 42.0866 86.442 47.3183C91.0743 55.8292 89.1644 67.4433 82.3139 73.227C80.5517 74.7145 78.2585 76.1074 76.0116 77.1295C73.7394 78.1631 71.6366 78.7618 70.2405 78.773C69.6624 78.7775 69.0656 78.7862 68.5693 78.9187C67.9802 79.0761 67.4889 79.4156 67.182 80.0289C66.9232 80.5461 66.8308 81.197 66.7843 81.9086C66.7361 82.6452 66.7315 83.5997 66.7315 84.8042V87.1308C66.7315 87.7351 66.1291 88.1543 65.5625 87.9443C57.9797 85.1298 51.3064 81.4387 46.1893 77.4008C41.0545 73.3489 37.5681 69.0133 36.2186 64.9377L36.2186 64.9375C32.1802 52.7478 38.4829 40.4504 50.6267 36.756C51.5671 36.47 53.2797 36.2525 55.4714 36.1265C57.6337 36.0023 60.1765 35.9711 62.7241 36.0262C65.2718 36.0813 67.8103 36.2224 69.9643 36.4401C72.1476 36.6608 73.8473 36.9522 74.7722 37.2786Z"
        stroke="white"
        strokeOpacity="0.4"
        strokeWidth="8"
      />
      <path
        d="M51.554 8.93401L51.554 8.93395C54.712 5.56555 56.7303 3.56156 58.2403 2.39582C59.7096 1.26155 60.5961 1 61.5105 1C62.4249 1 63.3111 1.26151 64.78 2.39575C66.2896 3.56148 68.3075 5.56547 71.4649 8.93389L72.191 8.25324L71.4649 8.93392C76.5799 14.3902 83.7822 17.4011 91.2585 17.209C91.2586 17.209 91.2586 17.209 91.2587 17.209L91.388 17.2057L91.3882 17.2057C97.1423 17.0579 99.8636 16.9975 101.439 17.2764C102.169 17.4057 102.569 17.5972 102.894 17.8491C103.259 18.1328 103.582 18.5295 104.128 19.2233C104.583 19.8012 104.897 20.2683 105.131 20.7845C105.364 21.2972 105.537 21.9021 105.655 22.7644C105.897 24.535 105.889 27.2344 105.771 32.164C105.598 39.3777 108.509 46.323 113.773 51.2586L114.075 51.5425L114.076 51.5435C116.842 54.1367 118.855 56.0714 120.182 57.6916C121.513 59.3165 122.021 60.4707 122.021 61.5001C122.021 62.5295 121.513 63.6835 120.182 65.308C118.855 66.9279 116.842 68.862 114.076 71.4544L114.076 71.4544C108.62 76.5693 105.609 83.7714 105.801 91.2476C105.801 91.2478 105.801 91.2481 105.801 91.2483L105.804 91.3752L105.804 91.3777C105.952 97.1321 106.012 99.8535 105.734 101.429C105.604 102.159 105.413 102.559 105.161 102.884C104.877 103.249 104.48 103.572 103.787 104.118C103.209 104.573 102.742 104.887 102.225 105.121C101.713 105.354 101.108 105.527 100.246 105.645C98.4751 105.887 95.7758 105.879 90.8465 105.761C83.6329 105.588 76.6876 108.498 71.7519 113.762L71.7517 113.762L71.467 114.066C68.8738 116.832 66.9391 118.845 65.3189 120.172C63.694 121.503 62.5398 122.01 61.5104 122.01C60.481 122.01 59.327 121.503 57.7025 120.172C56.0826 118.845 54.1485 116.832 51.5561 114.066L51.556 114.066C46.4412 108.61 39.2391 105.599 31.7629 105.791C31.7627 105.791 31.7624 105.791 31.7622 105.791L31.6353 105.794L31.6328 105.794C25.8784 105.942 23.157 106.002 21.5817 105.724C20.8515 105.594 20.4512 105.403 20.1267 105.151C19.7615 104.867 19.4383 104.47 18.8924 103.777C18.4378 103.199 18.1237 102.732 17.8894 102.215C17.6567 101.703 17.4834 101.098 17.3655 100.236C17.1235 98.465 17.1311 95.7655 17.2492 90.836C17.4221 83.6223 14.5119 76.6771 9.24836 71.7414L8.94451 71.4565L8.2605 72.186L8.94449 71.4565C6.17881 68.8633 4.16577 66.9286 2.83876 65.3084C1.50788 63.6835 1 62.5293 1 61.4999C1 60.4705 1.50785 59.3165 2.83869 57.692C4.16568 56.0721 6.1787 54.138 8.94438 51.5456L8.94442 51.5456C14.4007 46.4306 17.4117 39.2282 17.2195 31.7517L17.2162 31.6225L17.2162 31.6223C17.0684 25.8679 17.008 23.1465 17.2869 21.5712C17.4162 20.841 17.6077 20.4407 17.8596 20.1162C18.1433 19.751 18.54 19.4278 19.2338 18.8819C19.8117 18.4273 20.2788 18.1132 20.795 17.8789C21.3077 17.6462 21.9126 17.4729 22.7749 17.355C24.5455 17.113 27.245 17.1206 32.1745 17.2387C39.3882 17.4116 46.3334 14.5014 51.2691 9.23786L50.552 8.56543L51.2691 9.23785L51.554 8.93401Z"
        stroke="white"
        strokeWidth="8"
      />
    </svg>
  );
}