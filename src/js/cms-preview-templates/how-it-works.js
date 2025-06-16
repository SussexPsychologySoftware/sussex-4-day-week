import React from "react";

const HowItWorksPreview = ({entry, widgetFor}) => {
  // Guard clause - return early if entry is not available
  if (!entry || !entry.getIn) {
    return (
      <div className="ph3 bg-off-white min-vh-100">
        <div className="center mw8 pv4">
          <div className="tc">
            <h1 className="f4 f3-l fw3 lh-title mb3 primary ttu">
                Loading How It Works Preview...
            </h1>
          </div>
        </div>
      </div>
    );
  }

  // Safely get data with fallback
  let data = {};
  try {
    data = entry.getIn(["data"]) ? entry.getIn(["data"]).toJS() : {};
  } catch (error) {
    console.error("Error getting entry data:", error);
    data = {};
  }

  return (
    <div className="ph3 bg-off-white min-vh-100">
      <div className="center mw8 pv4">
        {/* Page Header */}
        <div className="tc pb3">
          <h1 className="f4 f3-l fw3 lh-title mb3 primary ttu">
            {data.title || "How It Works"}
          </h1>
          <p className="f6 fw3 mw7 center">
            {data.intro || "If you're interested in trialling a shorter working week:"}
          </p>
        </div>

        {/* Page Content */}
        {widgetFor && widgetFor("body") && (
          <div className="lh-copy measure center mb4 f6 fw3">
            {widgetFor("body")}
          </div>
        )}

        {/* Process Steps */}
        {data.process_steps && Array.isArray(data.process_steps) && (
          <div className="pv3">
            <div className="cf">
              {data.process_steps.map((step, index) => (
                <div
                  key={index}
                  className="fl w-100 w-50-m w-25-l pa2"
                >
                  <div className="bg-white pa3 br2 tc" style={{minHeight: "280px"}}>
                    {/* Icon Circle */}
                    <div className="bg-primary white icon-circle">
                      {index === 0 && <span>📧</span>}
                      {index === 1 && <span>💬</span>}
                      {index === 2 && <span>✏️</span>}
                      {index === 3 && <span>📄</span>}
                    </div>

                    {/* Content */}
                    <h3 className="f5 fw3 lh-title mb3 primary ttu">
                      {step?.title || "Step Title"}
                    </h3>
                    <p className="f6 fw3 lh-copy gray">
                      {step?.description || "Step description here."}
                      {step?.email && (
                        <>
                          <br />
                          <a
                            href={`mailto:${step.email}`}
                            className="link primary email-link f7"
                          >
                            {step.email}
                          </a>
                        </>
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Registration Section */}
        {data.registration && (
          <div className="pv4 bg-primary white tc br2 mw7 center">
            <div className="flex flex-column items-center">
              <h2 className="f3 fw3 lh-title mb3 ttu">
                {data.registration?.heading || "Register Now"}
              </h2>
              {data.registration?.description && (
                <span className="f5 fw3 mb4 mw6">
                  {data.registration.description}
                </span>
              )}
              <a
                href={data.registration?.form_url || "#"}
                className="btn bg-white primary f6 link br1 ph3 pv2 mb3 dib"
              >
                {data.registration?.button_text || "Sign Up"}
              </a>
            </div>
          </div>
        )}

        {/* Debug info (remove in production) */}
        {process.env.NODE_ENV === "development" && (
          <div className="pa3 bg-light-gray mt4">
            <h4>Debug Info:</h4>
            <pre style={{fontSize: "12px", overflow: "auto"}}>
              {JSON.stringify(data, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default HowItWorksPreview;
