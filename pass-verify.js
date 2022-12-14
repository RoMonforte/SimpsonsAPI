const bcrypt = require('bcrypt');


async function verifyPassword() {
    const myPassword = 'admin123';
    const hash = '$2b$10$8S3/Y0lmMX520i5RWOP7..Kl6GnEicaYrzOSYRt1RP5pxYDD45gTe';
    const isMatch = await bcrypt.compare(myPassword, hash);
    console.log(isMatch);
}

verifyPassword();

