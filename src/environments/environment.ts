// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// const apiLink = 'https://localhost:44322/';
const apiLink = 'https://krf.azurewebsites.net/';

export const environment = {
  production: false,
  apiBase: `${apiLink}`,
  apiLink: `${apiLink}api/`,
  defailtProfilePicture: 'https://lh3.googleusercontent.com/proxy/6X8FY0OwZ3z0rXERgh0SXIn2wan0IklVMutoOXLrUQBCM--C9R0y-ip5YwpuNxeMF9cQe6SIDZnsLC4a03nXPF577oLvjTDqArRy6mbYAbwmPcwaawmptCDf'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
