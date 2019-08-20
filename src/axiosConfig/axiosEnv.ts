function getBaseUrl() {
  // dev
  let urlCfg = 'https://easy-mock.com/mock/5d5a65a0ec6a85619f33b678';
  if (process.env.NODE_ENV === 'production') {
    urlCfg = 'https://erp-api.huazhu.com/';
  } else if (process.env.NODE_ENV === 'test') {
    // urlCfg = 'https://erp-api-test.huazhu.com/'
    urlCfg = 'https://erp-api-test.huazhu.com/';
  }
  return urlCfg;
}
export default getBaseUrl;
