import React from "react";

const HomePreview = ({entry, getAsset}) => {
  // Safe data extraction - same pattern as SuccessStoriesPreview
  let data = {};
  try {
    data = entry?.getIn ? entry.getIn(["data"]).toJS() : {};
  } catch (error) {
    console.error("Error getting entry data:", error);
    data = {};
  }

  return (
    <div>
      {/* Hero Section */}
      {data.hero && (
        <div className="hero pt3 pt4-l ph3">
          <div className="mw9 center ph3 tc">
            <h1 className="f4 f3-l fw3 lh-title mb3 primary ttu">
              {data.hero.slogan || "Your Slogan Here"}
            </h1>
            <p className="f6 fw3 mw7 center">
              {data.hero.description || "Your description here."}
            </p>
          </div>
        </div>
      )}

      {/* Feature Blocks Section */}
      {data.features && Array.isArray(data.features) && (
        <div className="pb4 pt2 pb5-l pt3-l bg-white">
          <div className="mw7 center">
            {data.features.map((feature, index) => (
              <div
                key={index}
                className={`feature-block pt3 pb4-l ph3 ph0-l ${
                  index % 2 === 1 ? "reverse-desktop" : ""
                }`}
              >
                {/* Media Container */}
                <div className="feature-media mb3 mb0-l">
                  {feature?.image ? (
                    <img
                      src={getAsset ? getAsset(feature.image) : feature.image}
                      alt={feature.title || "Feature Image"}
                      className="w-100 db feature-img"
                    />
                  ) : feature?.youtube_embed_src ? (
                    <div className="video-container">
                      <iframe
                        src={feature.youtube_embed_src}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    </div>
                  ) : null}
                </div>

                {/* Content Container */}
                <div className="feature-content">
                  <h3 className="f4 b lh-title mb2 primary ttu fw3">
                    {feature?.title || "Feature Title"}
                  </h3>
                  <p className="f6 lh-copy fw3">
                    {feature?.description || "Feature description here."}
                  </p>
                  {feature?.link_url && (
                    <a
                      href={feature.link_url}
                      className="btn bg-primary white f6 link br1 ph3 pv2 mb3 dib"
                    >
                      {feature.link_text || "Learn More"}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePreview;
