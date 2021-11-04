import React from 'react';
import Heroes from '../heroes/Heroes';
const HeroLiist = (props) => {
    return (
        <div>
        {props.hero.map((hero) => 
        <Heroes
          key={hero.id}
          id={hero.id}
          name={hero.name}
          selectedItem={props.selectedItem}
          setSelectedItem={props.setSelectedItem}
          message={props.message}
          setMessage={props.setMessage}
        />
      )}
        </div>
    );
};

export default HeroLiist;