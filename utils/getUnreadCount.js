const mongoose = require('mongoose');
const Conversation = mongoose.model('Conversation');

module.exports = async (role, userId) => {
    let unreadCount = 0;
    const getSender = role === 'distributor' ? 'from' : 'to';
    const conversations = await Conversation.find({ [getSender]: userId });
    conversations.forEach(({ unreadByDistributor, unreadByRetailer }) => {
        if (role === 'distributor' && unreadByDistributor === 'true') {
            unreadCount++;
        }
        if (role === 'retailer' && unreadByRetailer === 'true') {
            unreadCount++;
        }
    });
    return unreadCount;
};
