function requireUser(req, res, next) {
  // Check if user is logged in based on req.user
  if (req.user) {
    // User is logged in, attach user information to the request object
    req.user = req.user;
    next();
  } else {
    // User is not logged in, send unauthorized response
    res.status(401).json({ error: 'Unauthorized' });
  }
}

module.exports = {
  requireUser
};

