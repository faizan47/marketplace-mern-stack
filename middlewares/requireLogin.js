module.exports = (req, res, next) => {
    if (!req.session.userId) {
        return res
            .status(401)
            .send({ message: "Only logged in users can perform that action." });
    } else {
        next();
    }
};
