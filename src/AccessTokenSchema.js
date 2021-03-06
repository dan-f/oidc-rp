/**
 * Local dependencies
 */
const {JWTSchema} = require('@trust/jose')

/**
 * AccessTokenSchema
 */
const AccessTokenSchema = JWTSchema.extend({
  properties: {
    payload: {
      properties: {

        /**
         * scope
         */
        scope: {
          type: ['array', 'string'],
          items: { type: 'string' }
        }
      }
    }
  }
})

/**
 * Export
 */
module.exports = AccessTokenSchema
