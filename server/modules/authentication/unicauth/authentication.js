/* global WIKI */

// ------------------------------------
// Circle Auth Application
// ------------------------------------

const CircleAuthStrategy = require('@circlesystems/passport-circleauth').Strategy

module.exports = {
  init (passport, conf) {
    passport.use('circleauth',
      new CircleAuthStrategy({
        appKey: conf.appKey,
        readKey: conf.readKey,
        writeKey: conf.writeKey,
        passReqToCallback: true
      }, async (req, profile, done) => {
        try {
          if (!profile.email) {
            // Find existing user
            let existingUser = await WIKI.models.users.query().findOne({
              providerId: profile.id,
              providerKey: req.params.strategy
            })
            if (!existingUser) {
              return done(null, null)
            }
            profile.email = existingUser.email
          }

          const user = await WIKI.models.users.processProfile({
            providerKey: req.params.strategy,
            profile
          })
          done(null, user)
        } catch (err) {
          done(err, null)
        }
      }
      ))
  },
  logout (conf) {
    return '/'
  }
}
