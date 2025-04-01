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

  export const languages = [
    { code : 'all', name : 'All' },
    { code : 'zh', name : 'Chinese' },
    { code : 'es', name : 'Spanish' },
    { code : 'en', name : 'English' },
    { code : 'hi', name : 'Hindi' },
    { code : 'bn', name : 'Bengali' },
    { code : 'pt', name : 'Portuguese' },
    { code : 'ru', name : 'Russian' },
    { code : 'ja', name : 'Japanese' },
    { code : 'de', name : 'German' },
    { code : 'fr', name : 'French' },
    { code : 'ur', name : 'Urdu' },
    { code : 'it', name : 'Italian' },
    { code : 'fa', name : 'Persian' },
    { code : 'tr', name : 'Turkish' },
    { code : 'ta', name : 'Tamil' },
    { code : 'te', name : 'Telugu' },
    { code : 'vi', name : 'Vietnamese' },
    { code : 'mr', name : 'Marathi' },
    { code : 'ko', name : 'Korean' },
    { code : 'pl', name : 'Polish' },
    { code : 'uk', name : 'Ukrainian' },
];

