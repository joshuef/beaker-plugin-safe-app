const { genHandle, getObj, freeObj } = require('./helpers');

module.exports.manifest = {
  newPlainText: 'promise',
  newSymmetric: 'promise',
  newAsymmetric: 'promise',
  free: 'sync'
};

/**
 * Create a PlainText Cipher Opt
 * @param {String} appToken - the application token
 * @returns {CipherOptHandle}
 **/
module.exports.newPlainText = (appToken) => {
  return getObj(appToken)
    .then((app) => app.cipherOpt.newPlainText())
    .then(genHandle);
};

/**
 * Create a new Symmetric Cipher
 * @param {String} appToken - the application token
 * @returns {CipherOptHandle}
 **/
module.exports.newSymmetric = (appToken) => {
  return getObj(appToken)
    .then((app) => app.cipherOpt.newSymmetric())
    .then(genHandle);
};

/**
 * Create a new Asymmetric Cipher for the given key
 * @param {String} appToken - the application token
 * @param {EncKeyHandle} keyHandle
 * @returns {CipherOptHandle}
 **/
module.exports.newAsymmetric = (appToken, keyHandle) => {
  return getObj(appToken)
    .then((app) => getObj(keyHandle)
      .then((key) => app.cipherOpt.newAsymmetric(key))
      .then(genHandle)
    );
};

/**
 * Free the CipherOpt instance from memory
 * @param {String} cipherOptHandle - the cipher opt handle
 */
module.exports.free = (cipherOptHandle) => freeObj(cipherOptHandle);
