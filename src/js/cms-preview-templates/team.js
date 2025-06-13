import React from "react";

const TeamPreview = ({entry, getAsset}) => {
  const data = entry.getIn(["data"]).toJS();

  return (
    <div className="ph3 bg-off-white min-vh-100 center mw7 pv4">
      {/* Page Header */}
      <div className="tc pb4">
        <h1 className="f4 f3-l fw3 lh-title mb3 primary ttu">
          {data.title || "Our Team"}
        </h1>
      </div>

      {/* Page Content */}
      {data.body && (
        <div className="lh-copy measure center mb4 f6 fw3">
          {data.body}
        </div>
      )}

      {/* Team Members */}
      {data.team_members && (
        <>
          {/* First Team Member */}
          {data.team_members[0] && (
            <div className="mb1 cf flex-l items-center-l">
              <div className="w-100 w-50-l pr0 pr4-l mb3 mb0-l">
                {data.team_members[0].photo && (
                  <img
                    src={getAsset(data.team_members[0].photo)}
                    alt={data.team_members[0].name || "Team Member"}
                    className="w-100 br2 db"
                    style={{
                      objectFit: "cover",
                      objectPosition: "50% 50%",
                    }}
                  />
                )}
              </div>
              <div className="w-100 w-50-l pl0 pl4-l tl">
                <h2 className="f3 fw3 lh-title mb3 primary ttu">
                  {data.team_members[0].name || "Team Member Name"}
                </h2>
                <div className="f6 fw3 lh-copy gray">
                  <p className="fw6 mb3">
                    {data.team_members[0].role || "Role"}
                  </p>
                  <span className="mb3 db">
                    {data.team_members[0].bio || "Bio goes here."}
                  </span>
                  {data.team_members[0].email && (
                    <p className="mb3">
                      Get in touch:{" "}
                      <a
                        href={`mailto:${data.team_members[0].email}`}
                        className="link primary"
                      >
                        {data.team_members[0].email}
                      </a>
                    </p>
                  )}
                  {data.team_members[0].research_link && (
                    <p>
                      <a
                        href={data.team_members[0].research_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link primary"
                      >
                        {data.team_members[0].research_text || "Learn More"}
                      </a>
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Other Team Members */}
          {data.team_members.slice(1).map((member, index) => (
            <div key={index} className="mb1 pv3 center mw-7">
              <h3 className="f5 fw3 lh-title mb1 primary ttu">
                {member.name || "Team Member Name"}
              </h3>
              <h4 className="f6 fw3 gray mb3">
                {member.role || "Role"}
              </h4>
              <span className="f6 fw3 lh-copy gray mb3 db">
                {member.bio || "Bio goes here."}
              </span>
              {member.email && (
                <p className="f6 fw3 mb2">
                  Get in touch:{" "}
                  <a
                    href={`mailto:${member.email}`}
                    className="link primary"
                  >
                    {member.email}
                  </a>
                </p>
              )}
              {member.research_link && (
                <p className="f6 fw3">
                  <a
                    href={member.research_link}
                    className="link primary"
                  >
                    {member.research_text || "Learn More"}
                  </a>
                </p>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default TeamPreview;
