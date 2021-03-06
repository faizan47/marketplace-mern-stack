const mongoose = require('mongoose');
const Listing = mongoose.model('Listing');
const Conversation = mongoose.model('Conversation');
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
    app.post('/api/listings', requireLogin, async (req, res) => {
        const listing = await new Listing({
            ...req.body,
            _user: req.session.userId,
            datePosted: Date.now()
        }).save();
        return res.send([listing]);
    });

    app.get('/api/listings', async (req, res) => {
        const listings = await Listing.find({ status: 'published' })
            .select('-_user -quantity')
            .sort({ datePosted: -1 });
        return res.send(listings);
    });

    app.get('/api/listings/self', requireLogin, async (req, res) => {
        const userId = req.session.userId;
        const listingsByUserId = await Listing.find({ _user: userId })
            .populate({ path: '_user', select: 'company joinDate' })
            .sort({ datePosted: -1 })
            .exec();
        return res.send(listingsByUserId);
    });

    app.delete('/api/listings/:listingId', requireLogin, async (req, res) => {
        const userId = req.session.userId;
        const listing = await Listing.findOneAndDelete({
            _user: userId,
            _id: req.params.listingId
        });
        await Conversation.findOneAndUpdate({ _listing: req.params.listingId }, { active: false });
        return res.send(listing._id);
    });

    app.get('/api/listings/:listingId', async (req, res) => {
        const { userId } = req.session;
        const listing = await Listing.findOne({ _id: req.params.listingId })
            .populate({ path: '_user', select: 'company joinDate' })
            .exec();
        return listing.status === 'published' || listing._user.id === userId
            ? res.send([listing])
            : res.status(404).send({ message: 'Listing no longer publicly visible.' });
    });
    app.patch('/api/listings/:listingId', requireLogin, async (req, res) => {
        const userId = req.session.userId;
        const { title, description, category, quantity, images } = req.body;
        const listing = await Listing.findOneAndUpdate(
            {
                _user: userId,
                _id: req.params.listingId
            },
            { title, description, category, quantity, images },
            { new: true }
        );

        return res.send([listing]);
    });
    app.patch('/api/listings/complete/:listingId', requireLogin, async (req, res) => {
        const userId = req.session.userId;
        const listing = await Listing.findOneAndUpdate(
            {
                _user: userId,
                _id: req.params.listingId
            },
            { status: 'complete' },
            { new: true }
        );
        await Conversation.findOneAndUpdate({ _listing: req.params.listingId }, { active: false });
        return res.send(listing);
    });
    app.post('/api/listings/search', async (req, res) => {
        const { search, category } = req.body;
        if (search) {
            const listings = await Listing.find({
                $text: {
                    $search: search
                },
                category: category ? category : { $exists: true },
                status: 'published'
            })
                .select('-_user -quantity')
                .sort({ datePosted: -1 });
            return res.send(listings);
        }
        const listings = await Listing.find({
            category: category ? category : { $exists: true },
            status: 'published'
        })
            .select('-_user -quantity')
            .sort({ datePosted: -1 });
        return res.send(listings);
    });
};
