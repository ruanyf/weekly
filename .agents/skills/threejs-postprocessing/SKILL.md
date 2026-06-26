---
name: threejs-postprocessing
description: Three.js post-processing - EffectComposer, bloom, DOF, screen effects. Use when adding visual effects, color grading, blur, glow, or creating custom screen-space shaders.
---

# Three.js Post-Processing

## Quick Start

```javascript
import * as THREE from "three";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/addons/postprocessing/UnrealBloomPass.js";

// Setup composer
const composer = new EffectComposer(renderer);

// Render scene
const renderPass = new RenderPass(scene, camera);
composer.addPass(renderPass);

// Add bloom
const bloomPass = new UnrealBloomPass(
  new THREE.Vector2(window.innerWidth, window.innerHeight),
  1.5, // strength
  0.4, // radius
  0.85, // threshold
);
composer.addPass(bloomPass);

// Animation loop - use composer instead of renderer
function animate() {
  requestAnimationFrame(animate);
  composer.render(); // NOT renderer.render()
}
```

## EffectComposer Setup

```javascript
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";

const composer = new EffectComposer(renderer);

// First pass: render scene
const renderPass = new RenderPass(scene, camera);
composer.addPass(renderPass);

// Add more passes...
composer.addPass(effectPass);

// Last pass should render to screen
effectPass.renderToScreen = true; // Default for last pass

// Handle resize
function onResize() {
  const width = window.innerWidth;
  const height = window.innerHeight;

  camera.aspect = width / height;
  camera.updateProjectionMatrix();

  renderer.setSize(width, height);
  composer.setSize(width, height);
}
```

## Common Effects

### Bloom (Glow)

```javascript
import { UnrealBloomPass } from "three/addons/postprocessing/UnrealBloomPass.js";

const bloomPass = new UnrealBloomPass(
  new THREE.Vector2(window.innerWidth, window.innerHeight),
  1.5, // strength - intensity of glow
  0.4, // radius - spread of glow
  0.85, // threshold - brightness threshold
);

composer.addPass(bloomPass);

// Adjust at runtime
bloomPass.strength = 2.0;
bloomPass.threshold = 0.5;
bloomPass.radius = 0.8;
```

### Selective Bloom

Apply bloom only to specific objects.

```javascript
import { UnrealBloomPass } from "three/addons/postprocessing/UnrealBloomPass.js";
import { ShaderPass } from "three/addons/postprocessing/ShaderPass.js";

// Layer setup
const BLOOM_LAYER = 1;
const bloomLayer = new THREE.Layers();
bloomLayer.set(BLOOM_LAYER);

// Mark objects to bloom
glowingMesh.layers.enable(BLOOM_LAYER);

// Dark material for non-blooming objects
const darkMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
const materials = {};

function darkenNonBloomed(obj) {
  if (obj.isMesh && !bloomLayer.test(obj.layers)) {
    materials[obj.uuid] = obj.material;
    obj.material = darkMaterial;
  }
}

function restoreMaterial(obj) {
  if (materials[obj.uuid]) {
    obj.material = materials[obj.uuid];
    delete materials[obj.uuid];
  }
}

// Custom render loop
function render() {
  // Render bloom pass
  scene.traverse(darkenNonBloomed);
  composer.render();
  scene.traverse(restoreMaterial);

  // Render final scene over bloom
  renderer.render(scene, camera);
}
```

### FXAA (Anti-Aliasing)

```javascript
import { ShaderPass } from "three/addons/postprocessing/ShaderPass.js";
import { FXAAShader } from "three/addons/shaders/FXAAShader.js";

const fxaaPass = new ShaderPass(FXAAShader);
fxaaPass.material.uniforms["resolution"].value.set(
  1 / window.innerWidth,
  1 / window.innerHeight,
);

composer.addPass(fxaaPass);

// Update on resize
function onResize() {
  fxaaPass.material.uniforms["resolution"].value.set(
    1 / window.innerWidth,
    1 / window.innerHeight,
  );
}
```

### SMAA (Better Anti-Aliasing)

```javascript
import { SMAAPass } from "three/addons/postprocessing/SMAAPass.js";

const smaaPass = new SMAAPass(
  window.innerWidth * renderer.getPixelRatio(),
  window.innerHeight * renderer.getPixelRatio(),
);

composer.addPass(smaaPass);
```

### SSAO (Ambient Occlusion)

```javascript
import { SSAOPass } from "three/addons/postprocessing/SSAOPass.js";

const ssaoPass = new SSAOPass(
  scene,
  camera,
  window.innerWidth,
  window.innerHeight,
);
ssaoPass.kernelRadius = 16;
ssaoPass.minDistance = 0.005;
ssaoPass.maxDistance = 0.1;

composer.addPass(ssaoPass);

// Output modes
ssaoPass.output = SSAOPass.OUTPUT.Default;
// SSAOPass.OUTPUT.Default - Final composited output
// SSAOPass.OUTPUT.SSAO - Just the AO
// SSAOPass.OUTPUT.Blur - Blurred AO
// SSAOPass.OUTPUT.Depth - Depth buffer
// SSAOPass.OUTPUT.Normal - Normal buffer
```

### Depth of Field (DOF)

```javascript
import { BokehPass } from "three/addons/postprocessing/BokehPass.js";

const bokehPass = new BokehPass(scene, camera, {
  focus: 10.0, // Focus distance
  aperture: 0.025, // Aperture (smaller = more DOF)
  maxblur: 0.01, // Max blur amount
});

composer.addPass(bokehPass);

// Update focus dynamically
bokehPass.uniforms["focus"].value = distanceToTarget;
```

### Film Grain

```javascript
import { FilmPass } from "three/addons/postprocessing/FilmPass.js";

const filmPass = new FilmPass(
  0.35, // noise intensity
  0.5, // scanline intensity
  648, // scanline count
  false, // grayscale
);

composer.addPass(filmPass);
```

### Vignette

```javascript
import { ShaderPass } from "three/addons/postprocessing/ShaderPass.js";
import { VignetteShader } from "three/addons/shaders/VignetteShader.js";

const vignettePass = new ShaderPass(VignetteShader);
vignettePass.uniforms["offset"].value = 1.0; // Vignette size
vignettePass.uniforms["darkness"].value = 1.0; // Vignette intensity

composer.addPass(vignettePass);
```

### Color Correction

```javascript
import { ShaderPass } from "three/addons/postprocessing/ShaderPass.js";
import { ColorCorrectionShader } from "three/addons/shaders/ColorCorrectionShader.js";

const colorPass = new ShaderPass(ColorCorrectionShader);
colorPass.uniforms["powRGB"].value = new THREE.Vector3(1.2, 1.2, 1.2); // Power
colorPass.uniforms["mulRGB"].value = new THREE.Vector3(1.0, 1.0, 1.0); // Multiply

composer.addPass(colorPass);
```

### Gamma Correction

```javascript
import { GammaCorrectionShader } from "three/addons/shaders/GammaCorrectionShader.js";

const gammaPass = new ShaderPass(GammaCorrectionShader);
composer.addPass(gammaPass);
```

### Pixelation

```javascript
import { RenderPixelatedPass } from "three/addons/postprocessing/RenderPixelatedPass.js";

const pixelPass = new RenderPixelatedPass(6, scene, camera); // 6 = pixel size

composer.addPass(pixelPass);
```

### Glitch Effect

```javascript
import { GlitchPass } from "three/addons/postprocessing/GlitchPass.js";

const glitchPass = new GlitchPass();
glitchPass.goWild = false; // Continuous glitching

composer.addPass(glitchPass);
```

### Halftone

```javascript
import { HalftonePass } from "three/addons/postprocessing/HalftonePass.js";

const halftonePass = new HalftonePass(window.innerWidth, window.innerHeight, {
  shape: 1, // 1 = dot, 2 = ellipse, 3 = line, 4 = square
  radius: 4, // Dot size
  rotateR: Math.PI / 12,
  rotateB: (Math.PI / 12) * 2,
  rotateG: (Math.PI / 12) * 3,
  scatter: 0,
  blending: 1,
  blendingMode: 1,
  greyscale: false,
});

composer.addPass(halftonePass);
```

### Outline

```javascript
import { OutlinePass } from "three/addons/postprocessing/OutlinePass.js";

const outlinePass = new OutlinePass(
  new THREE.Vector2(window.innerWidth, window.innerHeight),
  scene,
  camera,
);

outlinePass.edgeStrength = 3;
outlinePass.edgeGlow = 0;
outlinePass.edgeThickness = 1;
outlinePass.pulsePeriod = 0;
outlinePass.visibleEdgeColor.set(0xffffff);
outlinePass.hiddenEdgeColor.set(0x190a05);

// Select objects to outline
outlinePass.selectedObjects = [mesh1, mesh2];

composer.addPass(outlinePass);
```

## Custom ShaderPass

Create your own post-processing effects.

```javascript
import { ShaderPass } from "three/addons/postprocessing/ShaderPass.js";

const CustomShader = {
  uniforms: {
    tDiffuse: { value: null }, // Required: input texture
    time: { value: 0 },
    intensity: { value: 1.0 },
  },
  vertexShader: `
    varying vec2 vUv;

    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform sampler2D tDiffuse;
    uniform float time;
    uniform float intensity;
    varying vec2 vUv;

    void main() {
      vec2 uv = vUv;

      // Wave distortion
      uv.x += sin(uv.y * 10.0 + time) * 0.01 * intensity;

      vec4 color = texture2D(tDiffuse, uv);
      gl_FragColor = color;
    }
  `,
};

const customPass = new ShaderPass(CustomShader);
composer.addPass(customPass);

// Update in animation loop
customPass.uniforms.time.value = clock.getElapsedTime();
```

### Invert Colors Shader

```javascript
const InvertShader = {
  uniforms: {
    tDiffuse: { value: null },
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform sampler2D tDiffuse;
    varying vec2 vUv;

    void main() {
      vec4 color = texture2D(tDiffuse, vUv);
      gl_FragColor = vec4(1.0 - color.rgb, color.a);
    }
  `,
};
```

### Chromatic Aberration

```javascript
const ChromaticAberrationShader = {
  uniforms: {
    tDiffuse: { value: null },
    amount: { value: 0.005 },
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform sampler2D tDiffuse;
    uniform float amount;
    varying vec2 vUv;

    void main() {
      vec2 dir = vUv - 0.5;
      float dist = length(dir);

      float r = texture2D(tDiffuse, vUv - dir * amount * dist).r;
      float g = texture2D(tDiffuse, vUv).g;
      float b = texture2D(tDiffuse, vUv + dir * amount * dist).b;

      gl_FragColor = vec4(r, g, b, 1.0);
    }
  `,
};
```

## Combining Multiple Effects

```javascript
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/addons/postprocessing/UnrealBloomPass.js";
import { ShaderPass } from "three/addons/postprocessing/ShaderPass.js";
import { FXAAShader } from "three/addons/shaders/FXAAShader.js";
import { VignetteShader } from "three/addons/shaders/VignetteShader.js";
import { GammaCorrectionShader } from "three/addons/shaders/GammaCorrectionShader.js";

const composer = new EffectComposer(renderer);

// 1. Render scene
composer.addPass(new RenderPass(scene, camera));

// 2. Bloom
const bloomPass = new UnrealBloomPass(
  new THREE.Vector2(window.innerWidth, window.innerHeight),
  0.5,
  0.4,
  0.85,
);
composer.addPass(bloomPass);

// 3. Vignette
const vignettePass = new ShaderPass(VignetteShader);
vignettePass.uniforms["offset"].value = 0.95;
vignettePass.uniforms["darkness"].value = 1.0;
composer.addPass(vignettePass);

// 4. Gamma correction
composer.addPass(new ShaderPass(GammaCorrectionShader));

// 5. Anti-aliasing (always last before output)
const fxaaPass = new ShaderPass(FXAAShader);
fxaaPass.uniforms["resolution"].value.set(
  1 / window.innerWidth,
  1 / window.innerHeight,
);
composer.addPass(fxaaPass);
```

## Render to Texture

```javascript
// Create render target
const renderTarget = new THREE.WebGLRenderTarget(512, 512);

// Render scene to target
renderer.setRenderTarget(renderTarget);
renderer.render(scene, camera);
renderer.setRenderTarget(null);

// Use texture
const texture = renderTarget.texture;
otherMaterial.map = texture;
```

## Multi-Pass Rendering

```javascript
// Multiple composers for different scenes/layers
const bgComposer = new EffectComposer(renderer);
bgComposer.addPass(new RenderPass(bgScene, camera));

const fgComposer = new EffectComposer(renderer);
fgComposer.addPass(new RenderPass(fgScene, camera));
fgComposer.addPass(bloomPass);

// Combine in render loop
function animate() {
  // Render background without clearing
  renderer.autoClear = false;
  renderer.clear();

  bgComposer.render();

  // Render foreground over it
  renderer.clearDepth();
  fgComposer.render();
}
```

## WebGPU Post-Processing (Three.js r150+)

```javascript
import { postProcessing } from "three/addons/nodes/Nodes.js";
import { pass, bloom, dof } from "three/addons/nodes/Nodes.js";

// Using node-based system
const scenePass = pass(scene, camera);
const bloomNode = bloom(scenePass, 0.5, 0.4, 0.85);

const postProcessing = new THREE.PostProcessing(renderer);
postProcessing.outputNode = bloomNode;

// Render
function animate() {
  postProcessing.render();
}
```

## Performance Tips

1. **Limit passes**: Each pass adds a full-screen render
2. **Lower resolution**: Use smaller render targets for blur passes
3. **Disable unused effects**: Toggle passes on/off
4. **Use FXAA over MSAA**: Less expensive anti-aliasing
5. **Profile with DevTools**: Check GPU usage

```javascript
// Disable pass
bloomPass.enabled = false;

// Reduce bloom resolution
const bloomPass = new UnrealBloomPass(
  new THREE.Vector2(window.innerWidth / 2, window.innerHeight / 2),
  strength,
  radius,
  threshold,
);

// Only apply effects in high-performance scenarios
const isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent);
if (!isMobile) {
  composer.addPass(expensivePass);
}
```

## Handle Resize

```javascript
function onWindowResize() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const pixelRatio = renderer.getPixelRatio();

  camera.aspect = width / height;
  camera.updateProjectionMatrix();

  renderer.setSize(width, height);
  composer.setSize(width, height);

  // Update pass-specific resolutions
  if (fxaaPass) {
    fxaaPass.material.uniforms["resolution"].value.set(
      1 / (width * pixelRatio),
      1 / (height * pixelRatio),
    );
  }

  if (bloomPass) {
    bloomPass.resolution.set(width, height);
  }
}

window.addEventListener("resize", onWindowResize);
```

## See Also

- `threejs-shaders` - Custom shader development
- `threejs-textures` - Render targets
- `threejs-fundamentals` - Renderer setup
