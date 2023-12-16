export const IN_BROWSER = typeof window !== 'undefined'
export const USER_AGENT = IN_BROWSER ? window.navigator?.userAgent : undefined
export const IS_SAFARI = USER_AGENT?.includes('AppleWebKit') && !USER_AGENT?.includes('Chrome')
export const month = [
    "All Year",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];