import React from 'react';

const IterationSample = () =>{
    const names = ['가', '나', '다', '라'];
    const namesList = names.map((name, index) => <li
    key = {index} > {name} </li>);
    return <ul>{namesList}</ul>;
};


export default IterationSample;