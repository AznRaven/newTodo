import React from 'react';

export default function Btn({ color, setListType, text }) {
  return (
    <button
      type="button"
      className={`btn btn-outline-${color}`}
      onClick={() => setListType(text)}
    >
      {text}
    </button>
  );
}
