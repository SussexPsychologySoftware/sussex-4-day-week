import React from "react";

const SignupPreview = ({entry}) => {
  const data = entry.getIn(["data"]).toJS();

  return (
    <div className="ph3 bg-off-white min-vh-100 center mw7 pv4">
      {/* Page Header */}
      <div className="tc pb4">
        <h1 className="f4 f3-l fw3 lh-title mb3 primary ttu">
          {data.title || "Sign Up"}
        </h1>
      </div>

      {/* Sign-up Form */}
      <div className="center" style={{maxWidth: "500px"}}>
        <form name="sussex-signup" method="POST" className="form form--custom">
          <fieldset className="fieldset">
            <ul className="form-fields list pa0">
              {/* Name Field */}
              <li className="mb3">
                <label className="label f6 fw6 db mb2" htmlFor="name">
                  Name:<span className="red">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="text-input w-100 f6 pv2 ph3 border-box ba br2 b--white primary"
                  required
                />
              </li>

              {/* Email Field */}
              <li className="mb3">
                <label className="label f6 fw6 db mb2" htmlFor="email">
                  Email Address:<span className="red">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="text-input w-100 f6 pv2 ph3 border-box ba br2 b--white primary"
                  required
                />
              </li>

              {/* Job Title Field */}
              <li className="mb3">
                <label className="label f6 fw6 db mb2" htmlFor="job_title">
                  Job Title:<span className="red">*</span>
                </label>
                <input
                  type="text"
                  id="job_title"
                  name="job_title"
                  className="text-input w-100 f6 pv2 ph3 border-box ba br2 b--white primary"
                  required
                />
              </li>

              {/* Company Name Field */}
              <li className="mb3">
                <label className="label f6 fw6 db mb2" htmlFor="company_name">
                  Company Name:<span className="red">*</span>
                </label>
                <input
                  type="text"
                  id="company_name"
                  name="company_name"
                  className="text-input w-100 f6 pv2 ph3 border-box ba br2 b--white primary"
                  required
                />
              </li>

              {/* Employee Count Field */}
              <li className="mb3">
                <label className="label f6 fw6 db mb2" htmlFor="employee_count">
                  Number of Employees:<span className="red">*</span>
                </label>
                <input
                  type="text"
                  id="employee_count"
                  name="employee_count"
                  className="text-input w-100 f6 pv2 ph3 border-box ba br2 b--white primary"
                  required
                />
              </li>

              {/* Company Location Field */}
              <li className="mb3">
                <label
                  className="label f6 fw6 db mb2"
                  htmlFor="company_location"
                >
                  Company Location:<span className="red">*</span>
                </label>
                <input
                  type="text"
                  id="company_location"
                  name="company_location"
                  className="text-input w-100 f6 pv2 ph3 border-box ba br2 b--white primary"
                  required
                />
              </li>

              {/* Schedule Type Options */}
              <li className="mb3">
                <span className="label f6 fw6 db mb2">
                  What type of new working schedule are you considering?
                  <span className="red">*</span>
                </span>
                <div className="mt2 tl">
                  {data.schedule_type_options &&
                    data.schedule_type_options.map((option, index) => (
                      <label key={index} className="db f6 fw3 mb2">
                        <input
                          type="checkbox"
                          name="schedule_type"
                          value={option.value}
                          className="mr2"
                        />
                        {option.label}
                      </label>
                    ))}
                </div>
              </li>

              {/* Additional Info */}
              <li className="mb3">
                <label
                  className="label f6 fw6 db mb2"
                  htmlFor="additional_info"
                >
                  Anything else you'd like to tell us?
                </label>
                <textarea
                  id="additional_info"
                  name="additional_info"
                  rows="4"
                  className="text-input w-100 f6 pv2 ph3 border-box ba br2 b--white primary"
                ></textarea>
              </li>

              {/* Newsletter Signup */}
              <li className="mb3">
                <label className="db f6 fw3">
                  <input
                    type="checkbox"
                    name="newsletter_signup"
                    value="yes"
                    className="mr2"
                  />
                  Tick to receive occasional news and updates from the S4DW team
                  and information about the 4 day week
                </label>
              </li>

              {/* Submit Button */}
              <li className="tc mb3">
                <button
                  type="submit"
                  className="bg-primary white f6 link br2 ph3 pv2 no-underline ttu"
                >
                  <span>Register Here</span>
                </button>
              </li>
            </ul>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default SignupPreview;
