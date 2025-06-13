import React from "react";

const ContactPreview = ({entry, widgetFor}) => {
  console.log("ContactPreview rendering...");
  console.log("Entry:", entry);
  console.log("Entry data:", entry?.getIn ? entry.getIn(["data"]) : "No getIn method");

  // Safe data extraction
  let data = {};
  try {
    data = entry?.getIn ? entry.getIn(["data"]).toJS() : {};
  } catch (error) {
    console.error("Error getting entry data:", error);
    data = {};
  }

  console.log("Processed data:", data);

  return (
    <div className="ph3 bg-off-white min-vh-100 center mw7 pv4">
      {/* Page Header */}
      <div className="tc pb4">
        <h1 className="f4 f3-l fw3 lh-title mb3 primary ttu">
          {data.title || "Get in Touch!"}
        </h1>
      </div>

      {/* Contact Information */}
      {(data.email || data.instructions) && (
        <div className="tc center mb4">
          {data.email && (
            <p className="f6 fw3 mb3 center">
                            Email: <a href={`mailto:${data.email}`} className="link primary">{data.email}</a>
            </p>
          )}
          {data.instructions && (
            <p className="f6 fw3 lh-copy measure center">{data.instructions}</p>
          )}
        </div>
      )}

      {/* Page Content */}
      {widgetFor && widgetFor("body") && (
        <div className="lh-copy measure center mb4 f6 fw3">
          {widgetFor("body")}
        </div>
      )}

      {/* Form Settings Preview */}
      {data.form && (
        <div className="tc mb4">
          <h3 className="f5 fw4">Form Settings:</h3>
          <p className="f6 fw3">Name: {data.form.name}</p>
          <p className="f6 fw3">Submit Text: {data.form.submit_text}</p>
          <p className="f6 fw3">Success Message: {data.form.success_message}</p>
        </div>
      )}

      {/* Contact Form Placeholder */}
      <div className="tc">
        <p className="f6 fw3">[Contact Form Placeholder]</p>
      </div>
    </div>
  );
};

export default ContactPreview;
