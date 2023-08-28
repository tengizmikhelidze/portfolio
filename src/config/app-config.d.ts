export interface AppConfig {
  firebase: {
    projectId: string,
    appId: string,
    storageBucket: string,
    locationId: string,
    apiKey: string,
    authDomain: string,
    messagingSenderId: string,
    measurementId: string,
  },
  socials: {
    "github" : string,
    "linkedin" : string,
    "facebook" : string,
    "instagram" : string
  },
  apiUrl: string
}
