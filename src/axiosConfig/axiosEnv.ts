function getBaseUrl() {
  // dev
  let urlCfg: string;
  if (process.env.environment[0] === 'dev') {
    urlCfg = 'https://easy-mock.com/mock/5d5a65a0ec6a85619f33b678';
  } else if (process.env.environment[0] === 'test') {
    urlCfg =
      'https://easy-mock.com/mock/5d5b6664dddb770a00aa9248/test-easymock';
  } else if (process.env.environment[0] === 'pre') {
    urlCfg = 'pre';
  } else if (process.env.environment[0] === 'online') {
    urlCfg = 'online';
  }
  return urlCfg;
}
export default getBaseUrl;
