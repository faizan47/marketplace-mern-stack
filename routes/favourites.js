const mongoose = require("mongoose");
const User = mongoose.model("User");
const requireLogin = require("../middlewares/requireLogin");

module.exports = app => {
    app.post("/api/favourites/", requireLogin, async (req, res) => {
        const userId = req.session.userId;
        const { listingId } = req.body;
        const { favourites } = await User.findByIdAndUpdate(
            { _id: userId },
            { $addToSet: { favourites: listingId } },
            { new: true, select: "favourites -_id _user" }
        )
            .populate({ path: "favourites" })
            .exec();
        return res.send(favourites);
    });
    app.delete("/api/favourites/:listingId", requireLogin, async (req, res) => {
        const userId = req.session.userId;
        if (userId) {
            const { listingId } = req.params;
            const { favourites } = await User.findByIdAndUpdate(
                { _id: userId },
                { $pull: { favourites: listingId } },
                { new: true, select: "favourites" }
            )
                .populate({ path: "favourites" })
                .exec();

            return res.send(favourites);
        }
        return res.send({
            message: "Only authorized users can perform that action.",
        });
    });
};
