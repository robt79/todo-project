function setStatusRenderError(res, statusCode, message) {
  res.status(500);
  res.render('error', {
    message
  });
}

module.exports = {
  setStatusRenderError

};
