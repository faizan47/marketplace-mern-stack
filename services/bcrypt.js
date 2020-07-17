const bcrypt = require("bcrypt");

module.exports = {
    hashPassword: async password => {
        const saltRounds = 10;
        const hashedPassword = await new Promise((resolve, reject) => {
            bcrypt.hash(password, saltRounds, function (err, hash) {
                if (err) reject(err);
                resolve(hash);
            });
        });

        return hashedPassword;
    },
    comparePassword: async (passwordHash, suppliedPassword) => {
        return await bcrypt.compare(suppliedPassword, passwordHash);
    },
};
