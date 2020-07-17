import React, { Component } from "react";

class ImageSlider extends Component {
    state = {
        mainImage:
            this.props.images[0] ||
            "https://bulma.io/images/placeholders/480x320.png",
    };
    setMainImage = url => {
        this.setState({ mainImage: url });
    };
    renderImages = () =>
        this.props.images.map((image, i) => (
            <figure
                key={i}
                onClick={() => this.setMainImage(image)}
                className="image is-96x96 is-inline-block mr-1"
            >
                <img src={image} alt={`listing ${i}`} />
            </figure>
        ));

    render() {
        return (
            <>
                <div className="card-image">
                    <figure className="image is-3by2">
                        <img
                            className="object-fit-cover"
                            src={this.state.mainImage}
                            alt="main"
                        />
                    </figure>
                </div>
                <div className="card-content pb-0 pr-0">
                    <div className="media-left">{this.renderImages()}</div>
                </div>
            </>
        );
    }
}

export default ImageSlider;
