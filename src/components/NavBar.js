import React from 'react';
import SettingsToggleButton from './SettingsToggleButton';
import Settings from './Settings';

function NavBar(props) {
  return (
    <nav className="topNav">
      <SettingsToggleButton
        position="left"
        toggleNavOpen={props.toggleLeftNavOpen}
      />
      <Settings
        classTags={props.classTags}
        raceTags={props.raceTags}
        filterTags={props.filterTags}
        updateFilterTags={props.updateFilterTags}
        leftNavOpen={props.leftNavOpen}
        toggleLeftNavOpen={props.toggleLeftNavOpen}
      />
      <h1>PHRASE-SMITH</h1>
      <SettingsToggleButton position="right" />
    </nav>
  );
}

export default NavBar;
