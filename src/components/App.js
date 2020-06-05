import React, { Component } from "react";
import Search from "./Search";
import Artist from "./Artist";
import Tracks from "./Tracks";

const API = "https://spotify-api-wrapper.appspot.com";

class App extends Component {
    state = { artist: null, tracks: [] };

    searchArtist = (artistQuery) => {
        fetch(`${API}/artist/${artistQuery}`)
            .then((res) => res.json())
            .then((json) => {
                if (json.artists.total > 0) {
                    const artist = json.artists.items[0];

                    this.setState({ artist: artist });
                    fetch(`${API}/artist/${artist.id}/top-tracks`)
                        .then((res) => res.json())
                        .then((json) => {
                            this.setState({ tracks: json.tracks });
                        });
                }
            });
    };

    render() {
        return (
            <div>
                <Search searchArtist={this.searchArtist} />
                <Artist artist={this.state.artist} />
                <Tracks tracks={this.state.tracks} />
            </div>
        );
    }
}

export default App;
