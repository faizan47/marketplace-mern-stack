const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = async (req, res, next) => {
    if (!req.session.userId)
        return res.status(401).send({ message: 'Only logged in users can perform that action.' });
    try {
        const { role, credits } = await User.findById(req.session.userId).select('role credits');
        if (role === 'distributor' && credits) {
            return next();
        }
        return res.status(401).send({
            message: 'Only distributors with sufficient credits can perform that action'
        });
    } catch (error) {
        console.log(error);

        return res.status(401).send({ message: 'Only authorized users can perform that action' });
    }
};
