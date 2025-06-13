import React from "react";

const SuccessStoriesPreview = ({entry, widgetFor}) => {
  console.log("SuccessStoriesPreview rendering...");

  // Safe data extraction
  let data = {};
  try {
    data = entry?.getIn ? entry.getIn(["data"]).toJS() : {};
  } catch (error) {
    console.error("Error getting entry data:", error);
    data = {};
  }

  console.log("Success Stories data:", data);

  return (
    <div className="ph3 bg-off-white min-vh-100">
      <div className="center mw7 pv4">
        {/* Page Header */}
        <div className="tc pb4">
          <h1 className="f4 f3-l fw3 lh-title mb3 primary ttu">
            {data.title || "Success Stories"}
          </h1>
          {data.subtitle && (
            <p className="f6 fw3 mw7 center">{data.subtitle}</p>
          )}
        </div>

        {/* Success Stories Carousel Preview */}
        {data.success_stories && data.success_stories.length > 0 && (
          <div className="pv4">
            <h2 className="f5 fw3 lh-title mb3 tc primary ttu">Success Stories</h2>
            <div className="bg-white br3 pa3 mb3">
              {data.success_stories.slice(0, 2).map((story, index) => (
                <div key={index} className="bb b--light-gray pb3 mb3 last-child-no-border">
                  <div className="flex items-start">
                    {story.logo && (
                      <div className="flex-none pr3">
                        <img
                          src={story.logo}
                          alt={story.company}
                          className="w3 h3 object-contain"
                          style={{maxWidth: "70px", maxHeight: "70px"}}
                        />
                      </div>
                    )}
                    <div className="flex-auto">
                      <h3 className="f6 fw3 primary ttu mb2">{story.company}</h3>
                      <p className="f6 fw3 lh-copy mb2 i">"{story.quote}"</p>
                      {story.attribution && (
                        <cite className="f6 fw3 gray">— {story.attribution}</cite>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              {data.success_stories.length > 2 && (
                <p className="f6 fw3 gray tc">
                        + {data.success_stories.length - 2} more stories...
                </p>
              )}
            </div>
          </div>
        )}

        {/* Trial Results Section */}
        {data.trial_results && data.trial_results.logos && data.trial_results.logos.length > 0 && (
          <div className="pv4 bg-grey-1">
            <div className="center mw7 ph3">
              <h2 className="f4 fw3 lh-title mb4 tc primary ttu">
                {data.trial_results.heading || "Trial Results"}
              </h2>
              <div className="bg-white br3 pa3">
                {data.trial_results.logos.slice(0, 3).map((result, index) => (
                  <div key={index} className="bb b--light-gray pb3 mb3 last-child-no-border">
                    {result.logo && (
                      <div className="mb2">
                        <img
                          src={result.logo}
                          alt={result.company}
                          className="w3 h3 object-contain"
                          style={{maxWidth: "70px", maxHeight: "70px"}}
                        />
                      </div>
                    )}
                    <h3 className="f5 fw3 lh-title mb2 primary ttu">{result.company}</h3>
                    <p className="f6 fw3 lh-copy mb2">
                      <strong>Who are they?</strong> {result.who}
                    </p>
                    <p className="f6 fw3 lh-copy mb3">
                      <strong>What did they learn?</strong> {result.learnings}
                    </p>
                    {result.link && (
                      <a href={result.link} className="f6 link primary hover-underline">
                                Visit website
                      </a>
                    )}
                  </div>
                ))}
                {data.trial_results.logos.length > 3 && (
                  <p className="f6 fw3 gray tc">
                          + {data.trial_results.logos.length - 3} more results...
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Participating Employers Section */}
        {data.participating_employers && data.participating_employers.logos && data.participating_employers.logos.length > 0 && (
          <div className="pv4">
            <h2 className="f4 fw3 lh-title mb4 tc primary ttu">
              {data.participating_employers.heading || "Participating Employers"}
            </h2>
            <div className="grid-container" style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
              gap: "1rem",
              alignItems: "center"
            }}>
              {data.participating_employers.logos.slice(0, 8).map((employer, index) => (
                <div key={index} className="tc pa2">
                  {employer.link ? (
                    <a href={employer.link} className="link">
                      <img
                        src={employer.logo}
                        alt={employer.name}
                        className="w-100 object-contain"
                        style={{height: "3rem", maxWidth: "150px"}}
                      />
                    </a>
                  ) : (
                    <img
                      src={employer.logo}
                      alt={employer.name}
                      className="w-100 object-contain"
                      style={{height: "3rem", maxWidth: "150px"}}
                    />
                  )}
                </div>
              ))}
            </div>
            {data.participating_employers.logos.length > 8 && (
              <p className="f6 fw3 gray tc mt3">
                      + {data.participating_employers.logos.length - 8} more employers...
              </p>
            )}
          </div>
        )}

        {/* Research Findings Section */}
        {data.research_findings && (
          <div className="pv4">
            {/* Blue Divider */}
            <div className="tc pv3">
              <div className="bg-primary" style={{height: "1px", width: "100%"}}></div>
            </div>

            <div className="tc pb4">
              <h2 className="f4 f3-l fw3 lh-title mb3 primary ttu">
                {data.research_findings.heading || "Research Findings"}
              </h2>
              {data.research_findings.description && (
                <p className="f6 fw3 mw7 center">{data.research_findings.description}</p>
              )}
            </div>
            {data.research_findings.image && (
              <div className="tc">
                <img
                  src={data.research_findings.image}
                  alt={data.research_findings.image_alt || "Research Findings Results"}
                  className="w-100 mw-none"
                  style={{maxWidth: "95%"}}
                />
              </div>
            )}
          </div>
        )}

        {/* Consultant Quote Section */}
        {data.consultant_quote && (
          <div className="pv4">
            {/* Blue Divider */}
            <div className="tc pv3">
              <div className="bg-primary" style={{height: "1px", width: "100%"}}></div>
            </div>

            <div className="center mw6">
              <blockquote className="quote-block bg-white br3 pa4 shadow-2 ma0">
                <p className="f5 lh-copy i mb3 dark-gray">
                      "{data.consultant_quote.quote}"
                </p>
                <cite className="f6 fw3 ttu tracked primary db tr">
                      — {data.consultant_quote.attribution}
                </cite>
              </blockquote>
            </div>
          </div>
        )}

        {/* Debug Info */}
        <div className="mt4 pa3 bg-light-gray br3" style={{fontSize: "0.75rem"}}>
          <h3 className="f6 fw4 mb2">Preview Debug Info:</h3>
          <p className="mb1">Success Stories: {data.success_stories?.length || 0} items</p>
          <p className="mb1">Trial Results: {data.trial_results?.logos?.length || 0} items</p>
          <p className="mb1">Participating Employers: {data.participating_employers?.logos?.length || 0} items</p>
          <p className="mb1">Research Findings: {data.research_findings ? "Present" : "Missing"}</p>
          <p className="mb1">Consultant Quote: {data.consultant_quote ? "Present" : "Missing"}</p>
        </div>
      </div>

      <style jsx>{`
        .last-child-no-border:last-child {
          border-bottom: none !important;
          margin-bottom: 0 !important;
          padding-bottom: 0 !important;
        }
        .quote-block {
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }
        .bg-grey-1 {
          background-color: #f8f9fa;
        }
        .primary {
          color: var(--primary, #2563eb);
        }
        .hover-underline:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};

export default SuccessStoriesPreview;
