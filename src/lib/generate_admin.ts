import bcryptjs from 'bcryptjs';

let local_hash = '';
const password = 'password1234';

/**
 * Generate a hash for the password
 */
bcryptjs.genSalt(12, function (err, salt) {
  if (err) {
    console.log(err.message);
  }

  bcryptjs.hash(password, salt, function (err, hash) {
    if (err) {
      console.log(err.message);
    }
    local_hash = hash;
    console.log(local_hash);
  });
});

/**
 * Compare password with hash
 */
bcryptjs.compare(password, local_hash, function (err, res) {
  if (err) {
    console.log(err.message);
  }
  console.log(res);
});
