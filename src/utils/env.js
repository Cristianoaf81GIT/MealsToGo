import Constants from 'expo-constants';

export const isDevelopment = Constants.manifest.extra.stage;
const apiLocal = Constants.manifest.extra.apiUrlLocal;
const apiRemote = Constants.manifest.extra.apiUrlRemote;
export const host = isDevelopment === 'dev' ? apiLocal : apiRemote;


