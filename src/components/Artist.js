import React from "react";

const Artist = ({ artist }) => {
    if (!artist) return null;
    const { name, images, followers, genres } = artist;

    return (
        <div>
            <div class="list-group">
                <p class="list-group-item list-group-item-action flex-column align-items-start active">
                    <h2>{name}</h2>
                    <h4>{followers.total} followers</h4>
                    <h5>{genres.join(", ")}</h5>
                    <img
                        src={images[0] && images[0].url}
                        alt="artist-profile"
                        style={{
                            width: 200,
                            height: 150,
                            borderRadius: 100,
                            objectFit: "cover",
                        }}
                    />
                </p>
            </div>
        </div>
    );
};

export default Artist;
