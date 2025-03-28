const canvas = document.getElementById("renderCanvas");
const engine = new BABYLON.Engine(canvas, true);

var camera = null;
var light = null;
var ground = null;

const createScene = function() {
    scene = new BABYLON.Scene(engine);
    
    camera = new BABYLON.ArcRotateCamera("camera", Math.PI / 2, Math.PI / 4, 10, BABYLON.Vector3.Zero(), scene);//new BABYLON.FreeCamera("camera", new BABYLON.Vector3(0, 2, -10), scene);
    camera.attachControl(canvas, true);

    // Create a light
    light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0), scene);
    light.intensity =  1;

    // Create a green material
    greenMaterial = new BABYLON.StandardMaterial("greenMaterial", scene);
    greenMaterial.diffuseColor = new BABYLON.Color3(0, 1, 0); // RGB for green

    // Create a ground (plane)
    const ground = BABYLON.MeshBuilder.CreateGround("ground", { width: 1000, height: 1000 }, scene);
    ground.material = greenMaterial; // Assign the green material to the ground


    // Create a blue material
    const blueMaterial = new BABYLON.StandardMaterial("blueMaterial", scene);
    blueMaterial.backFaceCulling = false
    blueMaterial.diffuseColor = new BABYLON.Color3(68 / 255, 215 / 255, 246 / 255);

    // Create a blue sphere
    const sphere = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: 2000 }, scene);
    sphere.material = blueMaterial;
    sphere.position.y = 1;

    // Create a simple box
    const box = BABYLON.MeshBuilder.CreateBox("box", { size: 2 }, scene);
    box.position.y = 1;
    return scene;
};

cameraSpeed = 0.8

function update()
{
    if (keys['up'])
    {
        camera.position.x += (cameraSpeed * Math.sin(camera.rotation.y))
        
        camera.position.z += (cameraSpeed * Math.cos(camera.rotation.y))
    }
    if (keys['left'])
    {
        camera.rotation.y -= 0.02;
    }
    if (keys['right'])
    {
        camera.rotation.y += 0.02;
    }
    if (keys['down'])
    {
        camera.position.x -= (cameraSpeed * Math.sin(camera.rotation.y))
        
        camera.position.z -= (cameraSpeed * Math.cos(camera.rotation.y))
    }
    if (keys['w'])
    {}
}

setInterval(update, 1000/60);

scene = createScene();
// Render loop
engine.runRenderLoop(function() {
    scene.render();
});
// Resize the engine on window resize
window.addEventListener("resize", function() {
    engine.resize();
});