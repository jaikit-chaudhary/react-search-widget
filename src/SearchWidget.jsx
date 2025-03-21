import React from 'react';
import ReactDOM from 'react-dom/client';

const SearchWidget = () => {
  return (
    <div style={{ padding: 10, background: 'white', borderRadius: 8 }}>
      <h3>Search Widget</h3>
      <input type="text" placeholder="Find a Hotel or Destination" />
    </div>
  );
};

export function renderSearchWidget(containerId) {
  const container = document.getElementById(containerId);
  if (container) {
    const root = ReactDOM.createRoot(container);
    root.render(<SearchWidget />);
  }
}