import * as THREE from './js/three.module.min.js';
import { OBJLoader } from './js/OBJLoader.js';

// Now, use THREE as usual
let scene, camera, renderer, objModel;
let mouseX = 0, mouseY = 0;

function init() {
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000);
    document.getElementById('splash').appendChild(renderer.domElement);

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 5, 5).normalize();
    scene.add(light);

    const loader = new OBJLoader();
    loader.load('../soppellogo3d.obj', function (object) {
        objModel = object;
        scene.add(objModel);
    });

    document.addEventListener('mousemove', onMouseMove);
    window.addEventListener('resize', onWindowResize);
    animate();
}

function onMouseMove(event) {
    mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    mouseY = (event.clientY / window.innerHeight) * 2 - 1;
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    requestAnimationFrame(animate);

    if (objModel) {
        objModel.rotation.y += mouseX * 0.01;
        objModel.rotation.x += mouseY * 0.01;
    }

    renderer.render(scene, camera);
}

init();
