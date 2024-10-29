import { initFederation } from '@angular-architects/native-federation';

initFederation('public/federation.manifest.json')
  .catch(err => console.error(err))
  .then(_ => import('./bootstrap'))
  .catch(err => console.error(err));
