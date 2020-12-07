const providers: any[] = [
  { provide: 'environment', useValue: 'Development' },
  { provide: 'baseUrl', useValue: 'http://transport.opendata.ch' }
];

export const ENV_PROVIDERS = providers;

export const environment = {
  production: false
};
