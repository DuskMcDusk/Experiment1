let canvas = document.createElement('canvas');
let canvasContainer = document.getElementById('canvas-container');
let controllerContainer = document.getElementById('controller-container');
let resultcontainer = document.getElementById('result-container');
let inputController = document.createElement('textarea');

function init(){

    configCanvas();
    configController();
    console.log('end');
}

function configController(){
    let saveBtn = document.createElement('button');
    saveBtn.innerText = 'Save';
    saveBtn.onclick = renderImage;
    controllerContainer.appendChild(saveBtn);
   
    inputController.cols = 60;
    inputController.rows = 30;
    controllerContainer.appendChild(inputController);

    let loadBtn = document.createElement('button');
    loadBtn.innerText =  'Render';
    loadBtn.onclick = renderText;
    controllerContainer.appendChild(loadBtn);
}

function renderText(){
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillText(inputController.value, canvas.width * 0.5, canvas.height * 0.5,);
}

function configCanvas(){
    canvas.width = 640;
    canvas.height = 480;
    let ctx = canvas.getContext('2d');
    ctx.font = '16px Easy Reading';
    canvasContainer.appendChild(canvas);
}

function renderImage(){
    let imgResult = new Image();
    resultcontainer.innerHTML = '';
    let result = canvas.toDataURL();
    imgResult.src = result;
    resultcontainer.appendChild(imgResult);
}