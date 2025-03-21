import React from "react";
import ReactDOM from "react-dom/client";

// ✅ Widget Component
const SearchWidget = () => {
  return (
    <div style={{ padding: 20, background: "#fff", borderRadius: 8, boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}>
      <h3>Search Widget 1</h3>
      <input type="text" placeholder="Find a Hotel or Destination" style={{ width: "100%", padding: 8 }} />
    </div>
  );
};

// ✅ Render Function (Ensure this works)
function renderSearchWidget(containerId) {
  const container = document.getElementById(containerId);
  if (container) {
    ReactDOM.createRoot(container).render(<SearchWidget />);
    console.log(`✅ Widget mounted in #${containerId}`);
  } else {
    console.error(`❌ Container with ID '${containerId}' not found.`);
  }
}

// ✅ Ensure function is globally available
if (typeof window !== "undefined") {
  window.SearchWidget = { renderSearchWidget };
}

export { renderSearchWidget }; // ✅ Export it properly