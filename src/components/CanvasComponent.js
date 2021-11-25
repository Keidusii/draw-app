import React, { useRef, useState } from 'react';
import CanvasDraw from 'react-canvas-draw';
import Tools from './ToolsComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { Input } from 'reactstrap';

function Canvas() {
    const canvasRef = useRef();
    const [color, setColor] = useState("black");
    const [lineWidth, setLineWidth] = useState(1);
    const [title, setTitle] = useState("Title");
    const [editTitle, editingTitle] = useState(false);

    const handleColorChange = (c) => {
        setColor(c);
    }

    const handleLineWidthChange = (lw) => {
        setLineWidth(lw);
    }

    const toggleEditTitle = () => {
        editingTitle(!editTitle);
    }

    return (
        <>
            <h6 className="text-center mt-1">Tip: Ctrl + Scroll or Ctrl + Drag to zoom and pan.</h6>
            <div id="titleContainer">
                {!editTitle &&
                    <h4 className="d-inline" onClick={toggleEditTitle}>{title}</h4>
                }
                {editTitle &&
                    <Input
                        type="text"
                        value={title}
                        className="d-inline"
                        id="title"
                        onChange={(e) => {
                            setTitle(e.target.value)
                        }}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === 'Escape') {
                                editingTitle(false)
                                e.preventDefault()
                                e.stopPropagation()
                            }
                        }}
                    />
                }
                <FontAwesomeIcon icon={faEdit} className="d-inline" onClick={toggleEditTitle} />
            </div>
            <CanvasDraw
                ref={canvasRef}
                canvasHeight={window.innerWidth > 430 ? 400 : 250}
                canvasWidth={window.innerWidth > 430 ? 400 : 250}
                brushColor={color}
                brushRadius={lineWidth}
                hideGrid={true}
                immediateLoading={true}
                lazyRadius={0}
                enablePanAndZoom={true}
                id="canvas"
                className="mx-auto mt-2"
            />
            <Tools
                handleColorChange={handleColorChange}
                handleLineWidthChange={handleLineWidthChange}
                color={color}
                lineWidth={lineWidth}
                title={title}
                canvasRef={canvasRef}
            />
        </>
    );
}

export default Canvas;