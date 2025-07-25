const { InvariantError } = require('../../errors/InvariantError');
const { SongPayloadSchema, SongQuerySchema } = require('./schema');

const SongValidator = {
  validateSongPayload: (payload) => {
    const validationResult = SongPayloadSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
  validateSongQuery: (query) => {
    const validationResult = SongQuerySchema.validate(query);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
};

module.exports = { SongValidator };
