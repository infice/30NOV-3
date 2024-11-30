import React, { useState } from "react";
import Modal from "./Modal";
import Tooltip from "./Tooltip";
import Dropdown from "./Dropdown";

/* function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <h1>React Portals Example</h1>
      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <p>This is a modal rendered with React Portals.</p>
      </Modal>
    </div>
  );
} */

/* function App() {
  const [tooltip, setTooltip] = useState({
    visible: false,
    text: "",
    position: { x: 0, y: 0 },
  });

  const handleMouseOver = (e) => {
    setTooltip({
      visible: true,
      text: "This is a tooltip",
      position: { x: e.clientX + 10, y: e.clientY + 10 },
    });
  };

  const handleMouseOut = () => {
    setTooltip({ visible: false, text: "", position: { x: 0, y: 0 } });
  };

  return (
    <div>
            <h1>Tooltip Example</h1>
            
      <button onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                menu       
      </button>
            
      {tooltip.visible && (
        <Tooltip text={tooltip.text} position={tooltip.position} />
      )}
          
    </div>
  );
} */

function App() {
  const [dropdown, setDropdown] = useState({
    isOpen: false,
    position: { x: 0, y: 0 },
  });

  const handleRightClick = (e) => {
    e.preventDefault();
    setDropdown({ isOpen: true, position: { x: e.clientX, y: e.clientY } });
  };

  const handleClose = () =>
    setDropdown({ isOpen: false, position: { x: 0, y: 0 } });

  return (
    <div onContextMenu={handleRightClick} onClick={handleClose}>
            <h1>Right-Click Dropdown Example</h1>
            
      {dropdown.isOpen && (
        <Dropdown
          isOpen={dropdown.isOpen}
          position={dropdown.position}
          items={["Edit", "Rename", "Delete"]}
        />
      )}
          
    </div>
  );
}

export default App;
