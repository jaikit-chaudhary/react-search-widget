import React from "react";
import ReactDOM from "react-dom/client";

const SearchWidget = () => {
  return (
    <div style={{ padding: 20, background: "#fff", borderRadius: 8, boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}>
      <h3>Search Widget</h3>
      <input type="text" placeholder="Find a Hotel or Destination" style={{ width: "100%", padding: 8 }} />
    </div>
  );
};

// Function to render the widget dynamically
function renderSearchWidget(containerId) {
  const container = document.getElementById(containerId);
  if (container) {
    ReactDOM.createRoot(container).render(<SearchWidget />);
  } else {
    console.error(`Container with ID '${containerId}' not found.`);
  }
}

// Expose the function globally for UMD
if (typeof window !== "undefined") {
  window.SearchWidget = { renderSearchWidget };
}

// Export for module usage
export { renderSearchWidget };