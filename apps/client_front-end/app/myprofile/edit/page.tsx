'use client'
import React, { useState, useEffect } from 'react';

const App = () => {
  const [shapes, setShapes] = useState([
    { id: 1, x: 120, y: 225, color: 'red', isDragging: false, zIndex: 0,text:'red' },
    { id: 2, x: 114, y: 555, color: 'blue', isDragging: false, zIndex: 0,text:'red' }
  ]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setShapes((prevShapes) =>
        prevShapes.map((shape) =>
          shape.isDragging
            ? { ...shape, x: e.clientX, y: e.clientY }
            : shape
        )
      );
    };

    const handleTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];
      setShapes((prevShapes) =>
        prevShapes.map((shape) =>
          shape.isDragging
            ? { ...shape, x: touch.clientX, y: touch.clientY }
            : shape
        )
      );
    };

    const handleMouseUp = () => {
      setShapes((prevShapes) =>
        prevShapes.map((shape) => ({ ...shape, isDragging: false }))
      );
    };

    const handleTouchEnd = () => {
      setShapes((prevShapes) =>
        prevShapes.map((shape) => ({ ...shape, isDragging: false }))
      );
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  const handleMouseDown = (id: number) => {
    setShapes((prevShapes) =>
      prevShapes.map((shape) =>
        shape.id === id ? { ...shape, isDragging: true } : shape
      )
    );
  };

  const handleTouchStart = (id: number) => {
    setShapes((prevShapes) =>
      prevShapes.map((shape) =>
        shape.id === id ? { ...shape, isDragging: true } : shape
      )
    );
  };

  const handleDoubleClick = (id: number) => {
    setShapes((prevShapes) =>
      prevShapes.map((shape) =>
        shape.id === id ? { ...shape, zIndex: shape.zIndex + 1 } : shape
      )
    );
  };

  const addShape = () => {
    const newShape = {
      id: shapes.length + 1,
      x: 500,
      y: 500,
      color:"yellow",
      isDragging: false,
      zIndex: 0,
      text:'red'
    };
    setShapes([...shapes, newShape]);
  };

  function changeText(shapeId:number) {
    setShapes(shapes.map((shape) =>
      shape.id === shapeId ? { ...shape, text:"black" } : shape
    ));
  }

  function SellectColor(){
    ///Not Yet
  }

  return (
    <div className='w-100% overflow-hidden h-screen'>
      <button onClick={addShape}>Add Shape</button>
      {shapes.map((shape) => (
        <input
          key={shape.id}
          style={{
            position: 'absolute',
            left: shape.x,
            top: shape.y,
            transform: 'translate(-50%, -50%)',
            cursor: shape.isDragging ? 'grabbing' : 'grab',
            width: '200px',
            height: '200px',
            background: shape.color,
            zIndex: shape.zIndex,
            color:shape.text,
          }}
          onMouseDown={() => handleMouseDown(shape.id)}
          onTouchStart={() => handleTouchStart(shape.id)}
          onDoubleClick={() => handleDoubleClick(shape.id)}
          onClick={()=>changeText(shape.id)}
        />
      ))}
    </div>
  );
};

export default App;
