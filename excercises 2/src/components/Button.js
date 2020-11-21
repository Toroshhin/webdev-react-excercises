import React from 'react';

export default function Button(props) {
  return (
    <button style={{ marginTop: '10px' }} onClick={props.onClick} >{props.value}</button>
  );
}