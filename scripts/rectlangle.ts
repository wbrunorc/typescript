interface RectangleOptions {
    width: number;
    length: number;
    height?: number; //this one is optional
}

function drawRectangle(options: RectangleOptions) {
    let width = options.width;
    let length = options.length;
    
    if(options.height){
        let height = options.height;
        // Draw a 3D rectangle
    }

    // Draw logic...
}

drawRectangle({
    width: 300,
    length: 100
});