import React, { Component } from "react";
import { connect } from "react-redux";
import ListingCard from "../common/listing/ListingCard";
import ContentLoader from "react-content-loader";

class Favourites extends Component {
    renderFavouriteListings = () => {
        return this.props.favourites.length ? (
            this.props.favourites.map(
                ({ _id, title, category, datePosted, images }) => {
                    return (
                        <ListingCard
                            key={_id}
                            title={title}
                            category={category}
                            datePosted={datePosted}
                            images={images}
                            listingId={_id}
                            listingSlug={title
                                .split(" ")
                                .join("-")
                                .toLowerCase()}
                        />
                    );
                }
            )
        ) : (
            <article className="message is-warning">
                <div className="message-body">No favourites found! </div>
            </article>
        );
    };
    render() {
        console.log(this.props.favourites);
        return (
            <>
                <h1 className="title is-1">Favourites</h1>
                {this.props.favourites ? (
                    this.renderFavouriteListings()
                ) : (
                    <ContentLoader />
                )}
            </>
        );
    }
}
const mapStateToProps = ({ user: { favourites } }) => ({ favourites });
export default connect(mapStateToProps, {})(Favourites);
