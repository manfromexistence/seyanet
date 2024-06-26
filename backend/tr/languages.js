// const langs: {[key: string]: string} = {
//   'auto': 'Automatic',
//   'af': 'Afrikaans',
//   'sq': 'Albanian',
//   'am': 'Amharic',
//   'ar': 'Arabic',
//   'hy': 'Armenian',
//   'az': 'Azerbaijani',
//   'eu': 'Basque',
//   'be': 'Belarusian',
//   'bn': 'Bengali',
//   'bs': 'Bosnian',
//   'bg': 'Bulgarian',
//   'ca': 'Catalan',
//   'ceb': 'Cebuano',
//   'ny': 'Chichewa',
//   'zh': 'Chinese (Simplified)',
//   'zh-cn': 'Chinese (Simplified)',
//   'zh-tw': 'Chinese (Traditional)',
//   'co': 'Corsican',
//   'hr': 'Croatian',
//   'cs': 'Czech',
//   'da': 'Danish',
//   'nl': 'Dutch',
//   'en': 'English',
//   'eo': 'Esperanto',
//   'et': 'Estonian',
//   'tl': 'Filipino',
//   'fi': 'Finnish',
//   'fr': 'French',
//   'fy': 'Frisian',
//   'gl': 'Galician',
//   'ka': 'Georgian',
//   'de': 'German',
//   'el': 'Greek',
//   'gu': 'Gujarati',
//   'ht': 'Haitian Creole',
//   'ha': 'Hausa',
//   'haw': 'Hawaiian',
//   'he': 'Hebrew',
//   'iw': 'Hebrew',
//   'hi': 'Hindi',
//   'hmn': 'Hmong',
//   'hu': 'Hungarian',
//   'is': 'Icelandic',
//   'ig': 'Igbo',
//   'id': 'Indonesian',
//   'ga': 'Irish',
//   'it': 'Italian',
//   'ja': 'Japanese',
//   'jw': 'Javanese',
//   'kn': 'Kannada',
//   'kk': 'Kazakh',
//   'km': 'Khmer',
//   'ko': 'Korean',
//   'ku': 'Kurdish (Kurmanji)',
//   'ky': 'Kyrgyz',
//   'lo': 'Lao',
//   'la': 'Latin',
//   'lv': 'Latvian',
//   'lt': 'Lithuanian',
//   'lb': 'Luxembourgish',
//   'mk': 'Macedonian',
//   'mg': 'Malagasy',
//   'ms': 'Malay',
//   'ml': 'Malayalam',
//   'mt': 'Maltese',
//   'mi': 'Maori',
//   'mr': 'Marathi',
//   'mn': 'Mongolian',
//   'my': 'Myanmar (Burmese)',
//   'ne': 'Nepali',
//   'no': 'Norwegian',
//   'ps': 'Pashto',
//   'fa': 'Persian',
//   'pl': 'Polish',
//   'pt': 'Portuguese',
//   'pa': 'Punjabi',
//   'ro': 'Romanian',
//   'ru': 'Russian',
//   'sm': 'Samoan',
//   'gd': 'Scots Gaelic',
//   'sr': 'Serbian',
//   'st': 'Sesotho',
//   'sn': 'Shona',
//   'sd': 'Sindhi',
//   'si': 'Sinhala',
//   'sk': 'Slovak',
//   'sl': 'Slovenian',
//   'so': 'Somali',
//   'es': 'Spanish',
//   'su': 'Sundanese',
//   'sw': 'Swahili',
//   'sv': 'Swedish',
//   'tg': 'Tajik',
//   'ta': 'Tamil',
//   'te': 'Telugu',
//   'th': 'Thai',
//   'tr': 'Turkish',
//   'uk': 'Ukrainian',
//   'ur': 'Urdu',
//   'uz': 'Uzbek',
//   'vi': 'Vietnamese',
//   'cy': 'Welsh',
//   'xh': 'Xhosa',
//   'yi': 'Yiddish',
//   'yo': 'Yoruba',
//   'zu': 'Zulu'
// };

// /**
// * Returns the ISO 639-1 code of the desiredLang – if it is supported by Google Translate
// * @param {string} desiredLang – the name or the code of the desired language
// * @returns {string|boolean} The ISO 639-1 code of the language or false if the language is not supported
// */
// function getCode(desiredLang: string): string | boolean {
//   if (!desiredLang) {
//       return false;
//   }
//   desiredLang = desiredLang.toLowerCase();

//   if (langs[desiredLang]) {
//       return desiredLang;
//   }

//   const keys = Object.keys(langs).filter((key: string) => {
//       if (typeof langs[key] !== 'string') {
//           return false;
//       }

//       return langs[key].toLowerCase() === desiredLang;
//   });

//   return keys[0] || false;
// }

// /**
// * Returns true if the desiredLang is supported by Google Translate and false otherwise
// * @param desiredLang – the ISO 639-1 code or the name of the desired language
// * @returns {boolean}
// */
// function isSupported(desiredLang: string): boolean {
//   return Boolean(getCode(desiredLang));
// }

// /**
// * Returns utf8 length
// * @param str – string
// * @returns {number}
// */
// function utf8Length(str: string): number {
//   const utf8: number[] = [];
//   for (let i = 0; i < str.length; i++) {
//       let charcode:any = str.charCodeAt(i);
//       if (charcode < 0x80) utf8.push(charcode);
//       else if (charcode < 0x800) {
//           utf8.push(0xc0 | (charcode >> 6),
//               0x80 | (charcode & 0x3f));
//       } else if (charcode < 0xd800 || charcode >= 0xe000) {
//           utf8.push(0xe0 | (charcode >> 12),
//               0x80 | ((charcode >> 6) & 0x3f),
//               0x80 | (charcode & 0x3f));
//       }
//       else {
//           i++;
//           charcode = 0x10000 + (((charcode & 0x3ff) << 10)
//               | (str.charCodeAt(i) & 0x3ff));
//           utf8.push(0xf0 | (charcode >> 18),
//               0x80 | ((charcode >> 12) & 0x3f),
//               0x80 | ((charcode >> 6) & 0x3f),
//               0x80 | (charcode & 0x3f));
//       }
//   }
//   return utf8.length;
// }

// export default langs;
// export { isSupported, getCode, utf8Length };
const langs = {
  'auto': 'Automatic',
  'af': 'Afrikaans',
  'sq': 'Albanian',
  'am': 'Amharic',
  'ar': 'Arabic',
  'hy': 'Armenian',
  'az': 'Azerbaijani',
  'eu': 'Basque',
  'be': 'Belarusian',
  'bn': 'Bengali',
  'bs': 'Bosnian',
  'bg': 'Bulgarian',
  'ca': 'Catalan',
  'ceb': 'Cebuano',
  'ny': 'Chichewa',
  'zh': 'Chinese (Simplified)',
  'zh-cn': 'Chinese (Simplified)',
  'zh-tw': 'Chinese (Traditional)',
  'co': 'Corsican',
  'hr': 'Croatian',
  'cs': 'Czech',
  'da': 'Danish',
  'nl': 'Dutch',
  'en': 'English',
  'eo': 'Esperanto',
  'et': 'Estonian',
  'tl': 'Filipino',
  'fi': 'Finnish',
  'fr': 'French',
  'fy': 'Frisian',
  'gl': 'Galician',
  'ka': 'Georgian',
  'de': 'German',
  'el': 'Greek',
  'gu': 'Gujarati',
  'ht': 'Haitian Creole',
  'ha': 'Hausa',
  'haw': 'Hawaiian',
  'he': 'Hebrew',
  'iw': 'Hebrew',
  'hi': 'Hindi',
  'hmn': 'Hmong',
  'hu': 'Hungarian',
  'is': 'Icelandic',
  'ig': 'Igbo',
  'id': 'Indonesian',
  'ga': 'Irish',
  'it': 'Italian',
  'ja': 'Japanese',
  'jw': 'Javanese',
  'kn': 'Kannada',
  'kk': 'Kazakh',
  'km': 'Khmer',
  'ko': 'Korean',
  'ku': 'Kurdish (Kurmanji)',
  'ky': 'Kyrgyz',
  'lo': 'Lao',
  'la': 'Latin',
  'lv': 'Latvian',
  'lt': 'Lithuanian',
  'lb': 'Luxembourgish',
  'mk': 'Macedonian',
  'mg': 'Malagasy',
  'ms': 'Malay',
  'ml': 'Malayalam',
  'mt': 'Maltese',
  'mi': 'Maori',
  'mr': 'Marathi',
  'mn': 'Mongolian',
  'my': 'Myanmar (Burmese)',
  'ne': 'Nepali',
  'no': 'Norwegian',
  'ps': 'Pashto',
  'fa': 'Persian',
  'pl': 'Polish',
  'pt': 'Portuguese',
  'pa': 'Punjabi',
  'ro': 'Romanian',
  'ru': 'Russian',
  'sm': 'Samoan',
  'gd': 'Scots Gaelic',
  'sr': 'Serbian',
  'st': 'Sesotho',
  'sn': 'Shona',
  'sd': 'Sindhi',
  'si': 'Sinhala',
  'sk': 'Slovak',
  'sl': 'Slovenian',
  'so': 'Somali',
  'es': 'Spanish',
  'su': 'Sundanese',
  'sw': 'Swahili',
  'sv': 'Swedish',
  'tg': 'Tajik',
  'ta': 'Tamil',
  'te': 'Telugu',
  'th': 'Thai',
  'tr': 'Turkish',
  'uk': 'Ukrainian',
  'ur': 'Urdu',
  'uz': 'Uzbek',
  'vi': 'Vietnamese',
  'cy': 'Welsh',
  'xh': 'Xhosa',
  'yi': 'Yiddish',
  'yo': 'Yoruba',
  'zu': 'Zulu'
};

/**
* Returns the ISO 639-1 code of the desiredLang – if it is supported by Google Translate
* @param {string} desiredLang – the name or the code of the desired language
* @returns {string|boolean} The ISO 639-1 code of the language or false if the language is not supported
*/
function getCode(desiredLang) {
  if (!desiredLang) {
      return false;
  }
  desiredLang = desiredLang.toLowerCase();

  if (langs[desiredLang]) {
      return desiredLang;
  }

  const keys = Object.keys(langs).filter((key) => {
      if (typeof langs[key] !== 'string') {
          return false;
      }

      return langs[key].toLowerCase() === desiredLang;
  });

  return keys[0] || false;
}

/**
* Returns true if the desiredLang is supported by Google Translate and false otherwise
* @param desiredLang – the ISO 639-1 code or the name of the desired language
* @returns {boolean}
*/
function isSupported(desiredLang) {
  return Boolean(getCode(desiredLang));
}

/**
* Returns utf8 length
* @param str – string
* @returns {number}
*/
function utf8Length(str) {
  const utf8 = [];
  for (let i = 0; i < str.length; i++) {
      let charcode = str.charCodeAt(i);
      if (charcode < 0x80) utf8.push(charcode);
      else if (charcode < 0x800) {
          utf8.push(0xc0 | (charcode >> 6),
              0x80 | (charcode & 0x3f));
      } else if (charcode < 0xd800 || charcode >= 0xe000) {
          utf8.push(0xe0 | (charcode >> 12),
              0x80 | ((charcode >> 6) & 0x3f),
              0x80 | (charcode & 0x3f));
      }
      else {
          i++;
          charcode = 0x10000 + (((charcode & 0x3ff) << 10)
              | (str.charCodeAt(i) & 0x3ff));
          utf8.push(0xf0 | (charcode >> 18),
              0x80 | ((charcode >> 12) & 0x3f),
              0x80 | ((charcode >> 6) & 0x3f),
              0x80 | (charcode & 0x3f));
      }
  }
  return utf8.length;
}

export default langs;
export { isSupported, getCode, utf8Length };
