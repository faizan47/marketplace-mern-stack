module.exports = (req, res, next) => {
	if (!req.session.userId) {
		console.log('unauth');

		res.status(401).send({ error: 'User not authorized' });
	} else {
		next();
	}
};
