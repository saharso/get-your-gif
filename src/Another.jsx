import React from 'react';
import _ from 'lodash';
export default function Another(){
    return <div>
        another location
        <br/>
        {_.join(['foo', 'fighter'], ' ')}
    </div>
}