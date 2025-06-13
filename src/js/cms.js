import CMS from "decap-cms-app";
import React from "react";

// Simple contact preview for testing
const ContactPreview = ({entry, widgetFor}) => {
  console.log("ContactPreview called with:", {entry, widgetFor});

  const data = entry?.getIn ? entry.getIn(["data"]).toJS() : {};
  console.log("Contact data:", data);

  return React.createElement("div", {
    style: {padding: "20px", fontFamily: "sans-serif"}
  }, [
    React.createElement("h1", {key: "title"}, data.title || "Contact Preview"),
    React.createElement("p", {key: "email"}, `Email: ${data.email || "No email"}`),
    React.createElement("p", {key: "instructions"}, data.instructions || "No instructions"),
    React.createElement("div", {key: "debug"}, [
      React.createElement("h3", {key: "debug-title"}, "Debug Info:"),
      React.createElement("pre", {key: "debug-data"}, JSON.stringify(data, null, 2))
    ])
  ]);
};

console.log("Registering minimal contact preview...");
CMS.registerPreviewTemplate("contact", ContactPreview);

console.log("Initializing CMS...");
CMS.init();
