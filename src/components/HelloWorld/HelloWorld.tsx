import React from 'react'

interface HelloWorldProps {
  color: string
}

const HelloWorld: React.FC<HelloWorldProps> = ({ color }) => {
  return (
    <div style={{ color }}>
      <h1>Hello World</h1>
    </div>
  )
}

export default HelloWorld
