import md5 from "spark-md5";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NX_OPENAI_API_KEY?: string;
      NX_CODE?: string;
      NX_BASE_URL?: string;
      NX_PROXY_URL?: string;
      NX_VERCEL?: string;
      NX_HIDE_USER_API_KEY?: string; // disable user's api key input
      NX_DISABLE_GPT4?: string; // allow user to use gpt-4 or not
    }
  }
}

const ACCESS_CODES = (function getAccessCodes(): Set<string> {
  const code = process.env.NX_CODE;

  try {
    const codes = (code?.split(",") ?? [])
      .filter((v) => !!v)
      .map((v) => md5.hash(v.trim()));
    return new Set(codes);
  } catch (e) {
    return new Set();
  }
})();

export const getServerSideConfig = () => {
  if (typeof process === "undefined") {
    throw Error(
      "[Server Config] you are importing a nodejs-only module outside of nodejs",
    );
  }

  return {
    apiKey: process.env.NX_OPENAI_API_KEY,
    code: process.env.NX_CODE,
    codes: ACCESS_CODES,
    needCode: ACCESS_CODES.size > 0,
    baseUrl: process.env.NX_BASE_URL,
    proxyUrl: process.env.NX_PROXY_URL,
    isVercel: !!process.env.NX_VERCEL,
    hideUserApiKey: !!process.env.NX_HIDE_USER_API_KEY,
    enableGPT4: !process.env.NX_DISABLE_GPT4,
  };
};
