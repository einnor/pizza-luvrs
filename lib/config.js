module.exports.get = (envVariableName) => {
  if (typeof envVariableName !== 'string') {
    throw new Error('Ivalid variable name')
  }

  return process.env[envVariableName];
}
