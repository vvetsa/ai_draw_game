import React from 'react';
import ReactDOM from 'react-dom/client';
import CanvasDraw from "react-canvas-draw";
//import './index.css';

class HelloWorld extends React.Component {
    state = {
        headText: "hello world",
        headNum:0,
        brushColor: "#000000",
        gridColor: "",
        brushRadius: 5,
        lazyRadius: 0
    }
    // FIX COLOR PICKER TO MAKE IT WORK LATER
    // try to make better looking canvas later
    render() {
        return (
            <div>
            <p>{this.state.headText}</p> 
            <p>{this.state.headNum}</p>
            <div>
                <label htmlFor="colorpicker"> Choose your brush color: </label>
                <input type="color" id="colorpicker" value={this.state.brushColor}></input>
            </div>

            <div> 
                <button onClick={() => {
                    localStorage.setItem(
                    "savedDrawing",
                    this.saveableCanvas.getSaveData());
                    this.setState({
                        headNum: this.state.headNum+1,
                    })
                    console.log(this.saveableCanvas.getSaveData());
                    }}>
                Save
                </button> 
                <button onClick={() => {
                    this.saveableCanvas.eraseAll();
                    }}>
                Erase
                </button> 
                <button onClick={() => {
                    this.saveableCanvas.undo();
                    }}>
                Undo
                </button> 
                
                
            </div>
            

            <CanvasDraw 
                ref={canvasDraw => (this.saveableCanvas = canvasDraw)}
                hideInterface
                brushColor={this.state.color} 
                onChange={() => console.log("onChange")} 
                gridColor={this.state.gridColor}
                brushRadius={this.state.brushRadius}
                lazyRadius={this.state.lazyRadius}
            />
            <p> below is your saved drawing </p>
            <CanvasDraw 
                disabled
                gridColor={this.state.gridColor}
                ref={canvasDraw => (this.loadableCanvas = canvasDraw)}
                saveData={localStorage.getItem("savedDrawing")}
            />

            </div>
        )
    }
}
// <canvas id="drawingCanvas" resize="true" width="795" height="771"></canvas>


// --------------------------------------------------------------
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HelloWorld />);