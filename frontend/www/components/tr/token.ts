import got from 'got';
import Configstore from 'configstore';

interface Options {
  tld: any;
  proxy: any;
  headers: any;
}

function sM(a: any): any {
  let b: any;
  if (yr !== null) {
    b = yr;
  } else {
    b = wr(String.fromCharCode(84));
    const c = wr(String.fromCharCode(75));
    b = [b(), b()];
    b[1] = c();
    b = (yr = window[b.join(c())] || '') || '';
  }
  let d = wr(String.fromCharCode(116)),
    c = wr(String.fromCharCode(107)),
    d = [d(), d()];
  d[1] = c();
  c = '&' + d.join('') + '=';
  d = b.split('.');
  b = Number(d[0]) || 0;
  const e = [],
    f = 0;
  for (let g = 0; g < a.length; g++) {
    let l = a.charCodeAt(g);
    if (128 > l) {
      e[f++] = l;
    } else {
      if (2048 > l) {
        e[f++] = l >> 6 | 192;
      } else {
        if (
          55296 === (l & 64512) &&
          g + 1 < a.length &&
          56320 === (a.charCodeAt(g + 1) & 64512)
        ) {
          l =
            65536 +
            ((l & 1023) << 10) +
            (a.charCodeAt(++g) & 1023);
          e[f++] = l >> 18 | 240;
          e[f++] = l >> 12 & 63 | 128;
        } else {
          e[f++] = l >> 12 | 224;
          e[f++] = l >> 6 & 63 | 128;
        }
      }
      e[f++] = l & 63 | 128;
    }
  }
  a = b;
  for (f = 0; f < e.length; f++) {
    a += e[f];
    a = xr(a, '+-a^+6');
  }
  a = xr(a, '+-3^+b+-f');
  a ^= Number(d[1]) || 0;
  if (0 > a) {
    a = (a & 2147483647) + 2147483648;
  }
  a %= 1e6;
  return c + (a.toString() + '.' + (a ^ b));
}

let yr: any | null = null;
const wr = (a: any) => () => a;
const xr = (a: number, b: any) => {
  for (let c = 0; c < b.length - 2; c += 3) {
    const d = b.charAt(c + 2),
      d = 'a' <= d ? d.charCodeAt(0) - 87 : Number(d),
      d = '+' === b.charAt(c + 1) ? a >>> d : a << d;
    a = '+' === b.charAt(c) ? a + d & 4294967295 : a ^ d;
  }
  return a;
};

const config = new Configstore('google-translate-api');

const window = {
  TKK: config.get('TKK') || '422854.923862967',
};

function updateTKK(opts?: Options): Promise<void> {
  opts = opts || { tld: 'com', proxy: {}, headers: {} };
  return new Promise<void>((resolve, reject) => {
    const now = Math.floor(Date.now() / 3600000);

    if (Number(window.TKK.split('.')[0]) === now) {
      resolve();
    } else {
      got('https://translate.google.' + opts.tld, {
        ...opts.proxy,
        headers: opts.headers,
        timeout: 2000,
        retry: 0,
      })
        .then((res) => {
          const code = res.body.match(/TKK='.*?';/g);

          if (code) {
            eval(code[0]);
            if (typeof TKK !== 'undefined') {
              window.TKK = TKK;
              config.set('TKK', TKK);
            }
          }

          resolve();
        })
        .catch(() => {
          reject();
        });
    }
  });
}

interface TranslationResult {
  name: any;
  value: any;
}

function get(text: any, opts?: Options): Promise<TranslationResult | null> {
  return updateTKK(opts)
    .then(() => {
      let tk = sM(text);
      tk = tk.replace('&tk=', '');
      return { name: 'tk', value: tk };
    })
    .catch(() => {
      return null;
    });
}

export { get };
