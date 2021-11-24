import React, { useRef, useState } from 'react';
import CanvasDraw from 'react-canvas-draw';
import Tools from './ToolsComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { Input } from 'reactstrap';

function Canvas(props) {
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
                canvasRef={canvasRef.current}
            />
        </>
    );
    /*const canvasRef = useRef(null);
    const contextRef = useRef(null);

    const [drawing, setDrawing] = useState(false);
    const [position, setPosition] = useState({
        x: 0,
        y: 0
    })

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        canvas.style.height = "480px";
        canvas.style.width = "100%";
        resizeCanvasToDisplaySize(canvas);
        resizeCanvas(canvas);
        context.strokeStyle = props.color;
        context.lineCap = "round";
        context.lineJoin = "round";
        context.lineWidth = props.lineWidth;
        contextRef.current = context;
    }, [props.color, props.lineWidth])

    const resizeCanvasToDisplaySize = canvas => {
    
        const { width, height } = canvas.getBoundingClientRect()

        if (canvas.width !== width || canvas.height !== height) {
          canvas.width = width
          canvas.height = height
          return true;
        }
    
        return false
    }

    function resizeCanvas(canvas) {
        const { width, height } = canvas.getBoundingClientRect()
        
        if (canvas.width !== width || canvas.height !== height) {
          const { devicePixelRatio:ratio=1 } = window
          const context = canvas.getContext('2d')
          canvas.width = width*ratio
          canvas.height = height*ratio
          context.scale(ratio, ratio)
          return true
        }
    
        return false
      }

    const startDrawing = ({nativeEvent}) => {
        const {offsetX, offsetY} = nativeEvent;
        setPosition({ x: offsetX, y: offsetY });
        contextRef.current.beginPath();
        contextRef.current.moveTo(position.x, position.y);
        setDrawing(true);
    }

    const stopDrawing = () => {
        contextRef.current.beginPath();
        setDrawing(false);
    }

    const draw = ({nativeEvent}) => {
        if (!drawing) {
            return;
        }
        const {offsetX, offsetY} = nativeEvent;
        setPosition({ x: offsetX, y: offsetY });
        contextRef.current.lineTo(position.x, position.y);
        contextRef.current.stroke();
    }

    return (
        <canvas
            id="canvas" 
            className="mt-2"
            onMouseDown={startDrawing}
            onTouchStart={startDrawing}
            onMouseUp={stopDrawing}
            onTouchEnd={stopDrawing}
            onMouseMove={draw}
            onTouchMove={draw}
            onMouseLeave={stopDrawing}
            ref={canvasRef}
        />
    );*/
}
export default Canvas;