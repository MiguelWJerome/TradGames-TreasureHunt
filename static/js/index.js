// --- Potential Fix: Add explicit import for CubeTexture static methods ---
// If using npm/modules, uncomment and adjust path if necessary
// import * as BABYLON from '@babylonjs/core'; // Assuming you have this
// import '@babylonjs/core/Materials/Textures/cubeTexture';
// --- End Potential Fix ---

const canvas = document.getElementById("renderCanvas");
const engine = new BABYLON.Engine(canvas, true);

var camera = null;
var ground = null;
var scene = null;

// Assume 'keys' dictionary is defined and populated by another script

const createScene = function() {
    // --- Check if BABYLON object exists ---
    if (typeof BABYLON === 'undefined') {
        console.error("BABYLON library is not loaded!");
        return null; // Stop scene creation if library isn't loaded
    }
    // --- End Check ---

    scene = new BABYLON.Scene(engine);

    // --- Camera Setup ---
    camera = new BABYLON.ArcRotateCamera("camera", Math.PI / 2, Math.PI / 4, 10, BABYLON.Vector3.Zero(), scene);
    camera.minZ = 0.1;
    camera.attachControl(canvas, true);

    // --- Environment Setup (IBL) ---
    const environmentColor = new BABYLON.Color3(68 / 255, 215 / 255, 246 / 255);

    // --- Check if CubeTexture and CreateFromColors exist before calling ---
    if (!(BABYLON.CubeTexture && typeof BABYLON.CubeTexture.CreateFromColors === 'function')) {
         console.error("BABYLON.CubeTexture.CreateFromColors function is not available! Check library includes/imports.");
         // Fallback: Create a simple hemispheric light instead of crashing
         const fallbackLight = new BABYLON.HemisphericLight("fallbackLight", new BABYLON.Vector3(0, 1, 0), scene);
         fallbackLight.intensity = 0.7;
         fallbackLight.groundColor = new BABYLON.Color3(0.5, 0.5, 0.5);
    } else {
        // --- Original IBL Code ---
        const environmentTexture = BABYLON.CubeTexture.CreateFromColors("envTexture", [
            environmentColor, environmentColor, environmentColor,
            environmentColor, environmentColor, environmentColor
        ], scene);

        scene.environmentTexture = environmentTexture;
        const skybox = scene.createDefaultSkybox(environmentTexture, true, 1000);
        // --- End Original IBL Code ---
    }


    // --- Ground (Using PBRMaterial) ---
    const groundMaterial = new BABYLON.PBRMaterial("groundPBR", scene);
    groundMaterial.albedoColor = new BABYLON.Color3(0, 1, 0);
    groundMaterial.metallic = 0.0;
    groundMaterial.roughness = 0.8;

    ground = BABYLON.MeshBuilder.CreateGround("ground", { width: 1000, height: 1000 }, scene);
    ground.material = groundMaterial;
    ground.receiveShadows = true;

    // --- Box (Using PBRMaterial) ---
    const box = BABYLON.MeshBuilder.CreateBox("box", { size: 2 }, scene);
    box.position.y = 1;
    const boxMaterial = new BABYLON.PBRMaterial("boxPBR", scene);
    boxMaterial.albedoColor = new BABYLON.Color3(1, 1, 1);
    boxMaterial.metallic = 0.1;
    boxMaterial.roughness = 0.4;
    box.material = boxMaterial;

    // Optional Shadow Light (Commented out)
    /*
    const shadowLight = new BABYLON.DirectionalLight("dirLight", new BABYLON.Vector3(-0.5, -1, -0.5), scene);
    shadowLight.intensity = 0.5;
    const shadowGenerator = new BABYLON.ShadowGenerator(1024, shadowLight);
    shadowGenerator.addShadowCaster(box);
    shadowGenerator.useBlurExponentialShadowMap = true;
    shadowGenerator.blurKernel = 32;
    */

    return scene;
};

const cameraSpeed = 0.2;

function update() {
    if (!camera || !scene || !scene.activeCamera || typeof keys === 'undefined') return;
    // Camera Movement Logic...
    if (camera instanceof BABYLON.FreeCamera) {
        // ... (FreeCamera movement code)
    } else if (camera instanceof BABYLON.ArcRotateCamera) {
        // ... (ArcRotateCamera movement code, if any)
    }
}

// --- Scene Creation and Render Loop Setup ---
scene = createScene();

if (scene) { // Check if scene was created successfully
    scene.onBeforeRenderObservable.add(update);

    engine.runRenderLoop(function() {
        scene.render();
    });
} else {
    console.error("Scene creation failed. Cannot start render loop.");
}

window.addEventListener("resize", function() {
    engine.resize();
});