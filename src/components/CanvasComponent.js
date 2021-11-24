import React, { useRef, useState } from 'react';
import CanvasDraw from 'react-canvas-draw';
import Tools from './ToolsComponent';

function Canvas(props) {
    const canvasRef = useRef();
    const [color, setColor] = useState("black");
    const [lineWidth, setLineWidth] = useState(1);

    const handleColorChange = (c)=> {
        setColor(c);
    }

    const handleLineWidthChange = (lw) => {
        setLineWidth(lw);
    }
    return (
        <>
            <h5 className="text-center">Tip: Ctrl + Scroll or Ctrl + Drag to zoom and pan.</h5>
            <CanvasDraw
                ref={canvasRef}
                brushColor={color}
                brushRadius={lineWidth}
                hideGrid={true}
                immediateLoading={true}
                lazyRadius={0}
                enablePanAndZoom={true}
                id="canvas"
                className="mx-auto"
            />
            <Tools
                handleColorChange={handleColorChange}
                handleLineWidthChange={handleLineWidthChange}
                color={color}
                lineWidth={lineWidth}
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