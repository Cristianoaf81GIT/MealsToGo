import 'dotenv/config';

export default {
  name: 'MealsToGo',
  version: '0.0.1',
  extra: {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId
  },
};

