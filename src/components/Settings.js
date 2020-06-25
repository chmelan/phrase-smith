import React from 'react';

function Settings(props) {
  const handleClick = (e) => {
    let newTags = props.filterTags;
    if (newTags.includes(e.target.value)) {
      const remIndex = newTags.indexOf(e.target.value);
      newTags.splice(remIndex, 1);
      props.updateFilterTags(newTags);
      return;
    }
    newTags.push(e.target.value);
    console.log(newTags);
    props.updateFilterTags(newTags);
  };
  return (
    <div>
      <ul>
        {props.classTags.map((tag) => (
          <button
            key={tag}
            value={tag}
            className={
              props.filterTags.some((fTag) => fTag === tag)
                ? 'filterBtn filterBtnActive'
                : 'filterBtn'
            }
            onClick={handleClick}
          >
            {tag}
          </button>
        ))}
      </ul>
      <ul>
        {props.raceTags.map((tag) => (
          <button
            key={tag}
            value={tag}
            className={
              props.filterTags.some((fTag) => fTag === tag)
                ? 'filterBtn filterBtnActive'
                : 'filterBtn'
            }
            onClick={handleClick}
          >
            {tag}
          </button>
        ))}
      </ul>
      <h3>{props.filterTags}</h3>
    </div>
  );
}

export default Settings;
