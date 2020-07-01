import React from 'react';

function SettingsToggleButton(props) {
  return (
    <button
      onClick={props.toggleNavOpen}
      className={
        props.position === 'left'
          ? 'navToggle leftNavToggle'
          : 'navToggle rightNavToggle'
      }
    >
      <div className="bar bar1"></div>
      <div className="bar bar2"></div>
      <div className="bar bar3"></div>
    </button>
  );
}

export default SettingsToggleButton;
