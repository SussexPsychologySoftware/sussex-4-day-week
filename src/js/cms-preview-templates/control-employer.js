import React from "react";

const ControlEmployerPreview = ({entry, widgetFor}) => {
  // Safe data extraction
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
            {data.title || "Be a Control Employer"}
          </h1>
          {data.intro && (
            <p className="f6 fw3 mw7 center">{data.intro}</p>
          )}
        </div>

        {/* Main Content */}
        {widgetFor && widgetFor("body") && (
          <div className="lh-copy measure center mb4 f6 fw3">
            {widgetFor("body")}
          </div>
        )}

        {/* Benefits Section */}
        {data.benefits && Array.isArray(data.benefits) && (
          <div className="pv3">
            <div className="cf">
              {data.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="fl w-100 w-50-m w-third-l pa2"
                >
                  <div className="pa3 tc">
                    <h3 className="f5 fw3 lh-title mb2 primary ttu">
                      {benefit?.title || "Benefit Title"}
                    </h3>
                    <p className="f6 fw3 lh-copy gray">
                      {benefit?.description || "Benefit description here."}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Call to Action Section */}
        <div className="tc pv4">
          <div className="bg-white pa4 br2 ba b--light-gray">
            <h2 className="f4 fw3 lh-title mb3 primary ttu">
                Ready to Participate?
            </h2>
            <p className="f6 fw3 lh-copy gray mb4 mw5 center">
                Join our research programme and help advance understanding of workplace wellbeing and productivity.
            </p>
            <a
              href="/signup"
              className="btn bg-primary white f6 link br1 ph3 pv2 mb3 dib"
            >
                Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ControlEmployerPreview;
