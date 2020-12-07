const providers: any[] = [
  { provide: 'environment', useValue: 'Production' },
  { provide: 'baseUrl', useValue: 'http://transport.opendata.ch' }
];

export const ENV_PROVIDERS = providers;

export const environment = {
  production: true
};
