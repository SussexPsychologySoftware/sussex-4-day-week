import React from 'react';

const ContactPreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(['data']).toJS();

  return (
    <div className="ph3 bg-off-white min-vh-100 center mw7 pv4">
      {/* Page Header */}
      <div className="tc pb4">
        <h1 className="f4 f3-l fw3 lh-title mb3 primary ttu">
          {data.title || 'Get in Touch!'}
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
      {widgetFor('body') && (
        <div className="lh-copy measure center mb4 f6 fw3">
          {widgetFor('body')}
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