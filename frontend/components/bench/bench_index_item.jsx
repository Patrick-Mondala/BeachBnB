import React from 'react';

export default ({ bench }) => {
   return (
        <li>
            <p>{bench.description}</p>
            <span>
                <label>Latitude:
                    {bench.lat}
                </label>
                <label> Longitude:
                    {bench.lng}
                </label>
            </span>
        </li>
    )
}