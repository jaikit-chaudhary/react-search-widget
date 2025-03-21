import React from "react";
import { createRoot } from "react-dom/client";

const SearchWidget = () => {
  return (
    <div
      style={{
        padding: 20,
        background: "#fff",
        borderRadius: 8,
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      }}
    >
      <h3>Search Widget</h3>
      <input
        type="text"
        placeholder="Find a Hotel or Destination"
        style={{ width: "100%", padding: 8 }}
      />
    </div>
  );
};

// Create a standalone render function
function renderSearchWidget(containerId) {
  const container = document.getElementById(containerId);
  if (container) {
    createRoot(container).render(<SearchWidget />);
    console.log(`✅ Widget mounted in #${containerId}`);
  } else {
    console.error(`❌ Container with ID '${containerId}' not found.`);
  }
}

// Export as a simple object with methods
export default { renderSearchWidget };

// Also make sure global is set correctly
if (typeof window !== "undefined") {
  // Explicitly create the global object
  window.SearchWidget = window.SearchWidget || {};
  window.SearchWidget.renderSearchWidget = renderSearchWidget;
}