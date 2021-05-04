const { OAuth2Client } = require('google-auth-library');

const client = new OAuth2Client(process.env.GOOGLE_ID)

module.exports = async (token) => {
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: process.env.GOOGLE_AUDIENCE,
  })
  const {
    name,
    email,
    picture,
  } = ticket.getPayload()
  return {
    name,
    email,
    picture,
  }
}