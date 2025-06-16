import React from "react";

const ResourcesPreview = ({entry, getAsset, widgetFor}) => {
  let data = {};
  try {
    data = entry?.getIn ? entry.getIn(["data"]).toJS() : {};
  } catch (error) {
    console.error("Error getting entry data:", error);
    data = {};
  }
  return (
    <div className="ph3 bg-off-white min-vh-100">
      <div className="center mw7 pv4">
        {/* Page Header */}
        <div className="tc pb4">
          <h1 className="f4 f3-l fw3 lh-title mb3 primary ttu">
            {data.title || "Resources"}
          </h1>
        </div>

        {/* Hero Image */}
        {data.hero_image && (
          <div className="tc mb4">
            <img
              src={getAsset(data.hero_image)}
              alt="Resources"
              className="w-75 w-60-m w-50-l br2 db center"
            />
          </div>
        )}

        {/* Page Content */}
        {widgetFor("body") && (
          <div className="lh-copy measure center mb4 f6 fw3">
            {widgetFor("body")}
          </div>
        )}

        {/* PDF Guide Section */}
        {data.pdf_guide && (
          <div className="pv3 tc">
            <div className="bg-white pa4 br2 mw6 center ba b--light-gray">
              <h2 className="f4 fw3 lh-title mb3 primary ttu">
                {data.pdf_guide.title || "Guide Title"}
              </h2>
              <p className="f6 fw3 lh-copy mb4">
                {data.pdf_guide.description || "Guide description here."}
              </p>
              <a
                href={getAsset(data.pdf_guide.file)}
                className="btn bg-primary white f6 link br1 ph3 pv2 mb3 dib"
                download
              >
                {data.pdf_guide.button_text || "Download"}
              </a>
            </div>
            {data.pdf_guide.bottom_text && (
              <div className="tc mb4">
                <p className="f6 fw3 lh-copy measure center">
                  {data.pdf_guide.bottom_text}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Partners Section */}
        {data.partners && (
          <div className="pv3">
            <div className="cf">
              {data.partners.map((partner, index) => (
                <div key={index} className="fl w-100 w-50-l pa3 tc">
                  <img
                    src={getAsset(partner.logo)}
                    alt={partner.name || "Partner Logo"}
                    className="w-100 h3 db center mb2"
                    style={{objectFit: "contain"}}
                  />
                  <p className="f6 fw3">
                    The{" "}
                    <a
                      href={partner.website || "#"}
                      className="link primary"
                    >
                      {partner.name || "Partner Name"}
                    </a>{" "}
                    {partner.text || ""}
                    {partner.extra_link && (
                      <>
                        {" "}
                        <a
                          href={partner.extra_link}
                          className="link primary"
                        >
                          {partner.redirect_text || "Learn More"}
                        </a>
                      </>
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResourcesPreview;
