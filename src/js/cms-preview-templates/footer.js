import React from "react";

const FooterPreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS();

  return (
    <footer className="bg-primary white pv4">
      <div className="center mw7 pv3 ph3">
        {/* Social Icons Section */}
        {data.social && (
          <div className="tc mb3">
            {data.social.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                title={social.platform}
                className="white dib mh2 f4"
              >
                {social.icon ? (
                  <img
                    src={social.icon}
                    alt={social.platform}
                    className="w1 h1"
                  />
                ) : (
                  social.platform
                )}
              </a>
            ))}
          </div>
        )}

        {/* Newsletter Section */}
        {data.newsletter_text && (
          <div className="tc mb4">
            <p className="f6 lh-copy mb3 white tc center">
              {data.newsletter_text ||
                "Sign up with your email address to receive news and updates."}
            </p>
            <div className="tc">
              <form name="newsletter" method="POST" className="di">
                <input
                  type="hidden"
                  name="form-name"
                  value="newsletter"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="f6 pv2 ph3 mr1 ba br2 b--light-gray bg-white gray w5"
                  required
                />
                <button
                  type="submit"
                  className="bg-primary white f6 br2 ph3 pv2 ttu pointer bn"
                >
                  <span>Subscribe</span>
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Copyright Section */}
        <div className="tc">
          <p className="f6 ma0 white tc center">
            © Copyright {new Date().getFullYear()}{" "}
            {data.copyright_name || "Sussex 4 Day Week"}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterPreview;