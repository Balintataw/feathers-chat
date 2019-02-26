// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
const crypto = require('crypto');
const gravatarUrl = 'https://s.gravatar.com/avatar';
const query = 's=60'; // creates images of 60 pixels

// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return async context => {
      const { email } = context.data;
      // Gravatar uses MD5 hashes from an email address (all lowercase) to get the image
      const hash = crypto.createHash('md5').update(email.toLowerCase()).digest('hex');

      context.data.avatar = `${gravatarUrl}/${hash}?${query}`;

      return context;
  };
};
