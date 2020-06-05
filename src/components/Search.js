import React, { Component } from "react";

class Search extends Component {
    state = { artistQuery: "" };

    updateArtistQuery = (event) => {
        this.setState({ artistQuery: event.target.value });
    };

    handleArtist = (event) => {
        if (event.key === "Enter") {
            this.searchArtist();
        }
    };

    searchArtist = () => {
        this.props.searchArtist(this.state.artistQuery);
    };

    render() {
        return (
            <div>
                <div className="alert alert-dismissible alert-warning">
                    <button
                        type="button"
                        className="close mr-4"
                        data-dismiss="alert"
                    >
                        &times;
                    </button>
                    <h1 className="display-3">Hello, world!</h1>
                    <p className="lead" id="intro">
                        This is a simple Music application by using
                        <span
                            className="badge badge-success badge-pill ml-2"
                            style={{
                                color: "#eee",
                                fontSize: 25,
                                fontStyle: "italic",
                            }}
                        >
                            Spotify API
                        </span>
                    </p>

                    <p className="lead">
                        <a
                            className="btn btn-primary btn-lg"
                            href="https://github.com/hijal"
                            role="button"
                            target="_blank"
                        >
                            <span
                                className="badge badge-success badge-pill ml-2"
                                style={{
                                    color: "#eee",
                                    fontSize: 25,
                                    fontStyle: "italic",
                                }}
                            >
                                Hijal
                            </span>
                        </a>
                    </p>
                    <hr className="my-4"></hr>
                </div>
                <div className="jumbotron">
                    <input
                        className="form-control"
                        onChange={this.updateArtistQuery}
                        onKeyPress={this.handleArtist}
                        type="text"
                        placeholder="Search for an Artist..."
                    />
                    <button
                        type="button"
                        onClick={this.searchArtist}
                        className="btn btn-outline-success mt-2"
                    >
                        Search
                    </button>
                </div>
            </div>
        );
    }
}

export default Search;
