import React from "react";

const DivComponent: React.FC<{
  className: string, 
  children?: string | JSX.Element | JSX.Element[]
}> = ({children, className}) => {
  return (
    <div className={className}>
      {children}
    </div>
  )
}

export default DivComponent;