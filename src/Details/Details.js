import React from 'react';
import {useEffect ,useState} from 'react';
const Details = (props) => {
        const [ detailItem, setDetailItem ] = useState({id: '', name: ''});
        useEffect(() => {
          setDetailItem(props.selectedItem);
        }, [props]);
       
        function setName(event) {
          const newItem = {
            id: detailItem.id,
            name: event.target.value
          };
          props.onChangeName(newItem);
        }

    return (
        <div>
        <h2> Details</h2>
        <div>
        <span>ID:{detailItem.id} </span>
        </div>
        <div>
        <label htmlFor="hero-name">Hero Name: </label>
        <input  value={detailItem.name} onChange={setName} />
        </div>
        </div>
    );
};

export default Details;