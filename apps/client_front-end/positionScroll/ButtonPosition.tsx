'useClient'

import React from 'react';

interface typePositioninProps{
    label:string,
    className:string
    onClick1:()=>void
}

const ButtonPosition:React.FC<typePositioninProps> = ({ label, className, onClick1 }) => {
  return (
    <div>
      <button onClick={onClick1} className={`p-3 bg-white shadow-md rounded-3xl ${className}`}>{label}</button>
    </div>
  );
}

export default ButtonPosition;
