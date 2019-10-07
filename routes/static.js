module.exports = handlers => ({
  method: 'GET',
  path: '//pizza-luvrs-ronnie.s3.amazonaws.com/{param*}',
  handler: {
    directory: {
      path: 'assets'
    }
  },
  options: {
    auth: false
  }
})
