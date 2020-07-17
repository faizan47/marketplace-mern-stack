import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchListings } from '../../../actions';
import ListingCard from './ListingCard';
import ContentLoader from 'react-content-loader';
import ListingSearch from './ListingSearch';

class Listings extends Component {
    componentDidMount() {
        this.props.fetchListings();
    }

    renderListings = () => {
        return this.props.listings.length ? (
            this.props.listings.map(({ _id, title, category, datePosted, images }) => {
                return (
                    <ListingCard
                        key={_id}
                        title={title}
                        category={category}
                        datePosted={datePosted}
                        images={images}
                        listingId={_id}
                        listingSlug={title.split(' ').join('-').toLowerCase()}
                    />
                );
            })
        ) : (
            <article class="message is-warning">
                <div class="message-body">No listings found! </div>
            </article>
        );
    };

    render() {
        return (
            <>
                <h1 className="title is-1">Listings</h1>
                <div className="columns">
                    <div className="column is-one-third">
                        <ListingSearch />
                    </div>
                    <div className="column">
                        {this.props.listings !== null ? this.renderListings() : <ContentLoader />}
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = ({ listings }) => ({ listings });
export default connect(mapStateToProps, { fetchListings })(Listings);
