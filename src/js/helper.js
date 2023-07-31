import { TiMEOUT } from "./config";

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const getJSON = async url => {
  try {
    const res = await Promise.race([fetch(url), timeout(TiMEOUT)]);
    if (!res.ok) return;
    return await res.json();
  } catch (e) {
    console.error(e);
  }
};
