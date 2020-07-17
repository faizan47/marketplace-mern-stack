import React from "react";
import time_ago_in_words from "time_ago_in_words";

export default ({
    currentListing: { title, description, category, quantity, datePosted },
}) => (
    <div className="content">
        <h1 className="title is-2">{title}</h1>
        <div className="level">
            <div className="level-left field is-grouped is-grouped-multiline">
                <div className="control">
                    <span className="tags has-addons level-item">
                        <span className="tag">Category</span>
                        <span className="tag is-info is-light">{category}</span>
                    </span>
                </div>
                <div className="control">
                    <span className="tags has-addons level-item">
                        <span className="tag">Quantity</span>
                        <span className="tag is-info is-light">{quantity}</span>
                    </span>
                </div>
            </div>
            <div className="level-right">
                <span className="level-item tags has-addons level-item">
                    <span className="tag icon">
                        <i className="fas fa-clock" />
                    </span>
                    <span className="tag is-light">
                        {time_ago_in_words(new Date(datePosted))}
                    </span>
                </span>
            </div>
        </div>
        <hr /> <h2 className="title description is-4">Description </h2>
        <p>{description}</p>
    </div>
);
