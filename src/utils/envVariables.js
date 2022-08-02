export const API_BASE_URL = 'API_BASE_URL';
export const SPONSORED_PROJECT_ID = 'SPONSORED_PROJECT_ID';

const processEnv = {
    API_BASE_URL: process.env.GATSBY_SUMMIT_API_BASE_URL,
    SPONSORED_PROJECT_ID: process.env.GATSBY_SPONSORED_PROJECT_ID,
}

export const getEnvVariable = (name) => {
    let res = typeof window === 'object' ? window[name] : null;
    if (!res) {
        res = processEnv[name];
    }
    return res;
}

if (typeof window === 'object') {
    window.API_BASE_URL = processEnv[API_BASE_URL];
    window.SPONSORED_PROJECT_ID = processEnv[SPONSORED_PROJECT_ID];
}