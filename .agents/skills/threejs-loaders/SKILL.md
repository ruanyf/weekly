---
name: threejs-loaders
description: Three.js asset loading - GLTF, textures, images, models, async patterns. Use when loading 3D models, textures, HDR environments, or managing loading progress.
---

# Three.js Loaders

## Quick Start

```javascript
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

// Load GLTF model
const loader = new GLTFLoader();
loader.load("model.glb", (gltf) => {
  scene.add(gltf.scene);
});

// Load texture
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load("texture.jpg");
```

## LoadingManager

Coordinate multiple loaders and track progress.

```javascript
const manager = new THREE.LoadingManager();

// Callbacks
manager.onStart = (url, loaded, total) => {
  console.log(`Started loading: ${url}`);
};

manager.onLoad = () => {
  console.log("All assets loaded!");
  startGame();
};

manager.onProgress = (url, loaded, total) => {
  const progress = (loaded / total) * 100;
  console.log(`Loading: ${progress.toFixed(1)}%`);
  updateProgressBar(progress);
};

manager.onError = (url) => {
  console.error(`Error loading: ${url}`);
};

// Use manager with loaders
const textureLoader = new THREE.TextureLoader(manager);
const gltfLoader = new GLTFLoader(manager);

// Load assets
textureLoader.load("texture1.jpg");
textureLoader.load("texture2.jpg");
gltfLoader.load("model.glb");
// onLoad fires when ALL are complete
```

## Texture Loading

### TextureLoader

```javascript
const loader = new THREE.TextureLoader();

// Callback style
loader.load(
  "texture.jpg",
  (texture) => {
    // onLoad
    material.map = texture;
    material.needsUpdate = true;
  },
  undefined, // onProgress - not supported for image loading
  (error) => {
    // onError
    console.error("Error loading texture", error);
  },
);

// Synchronous (returns texture, loads async)
const texture = loader.load("texture.jpg");
material.map = texture;
```

### Texture Configuration

```javascript
const texture = loader.load("texture.jpg", (tex) => {
  // Color space (important for color accuracy)
  tex.colorSpace = THREE.SRGBColorSpace; // For color/albedo maps
  // tex.colorSpace = THREE.LinearSRGBColorSpace;  // For data maps (normal, roughness)

  // Wrapping
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  // ClampToEdgeWrapping, RepeatWrapping, MirroredRepeatWrapping

  // Repeat/offset
  tex.repeat.set(2, 2);
  tex.offset.set(0.5, 0.5);
  tex.rotation = Math.PI / 4;
  tex.center.set(0.5, 0.5);

  // Filtering
  tex.minFilter = THREE.LinearMipmapLinearFilter; // Default
  tex.magFilter = THREE.LinearFilter; // Default
  // NearestFilter - pixelated
  // LinearFilter - smooth
  // LinearMipmapLinearFilter - smooth with mipmaps

  // Anisotropic filtering (sharper at angles)
  tex.anisotropy = renderer.capabilities.getMaxAnisotropy();

  // Flip Y (usually true for standard textures)
  tex.flipY = true;

  tex.needsUpdate = true;
});
```

### CubeTextureLoader

For environment maps and skyboxes.

```javascript
const loader = new THREE.CubeTextureLoader();

// Load 6 faces
const cubeTexture = loader.load([
  "px.jpg",
  "nx.jpg", // positive/negative X
  "py.jpg",
  "ny.jpg", // positive/negative Y
  "pz.jpg",
  "nz.jpg", // positive/negative Z
]);

// Use as background
scene.background = cubeTexture;

// Use as environment map
scene.environment = cubeTexture;
material.envMap = cubeTexture;
```

### HDR/EXR Loading

```javascript
import { RGBELoader } from "three/addons/loaders/RGBELoader.js";
import { EXRLoader } from "three/addons/loaders/EXRLoader.js";

// HDR
const rgbeLoader = new RGBELoader();
rgbeLoader.load("environment.hdr", (texture) => {
  texture.mapping = THREE.EquirectangularReflectionMapping;
  scene.environment = texture;
  scene.background = texture;
});

// EXR
const exrLoader = new EXRLoader();
exrLoader.load("environment.exr", (texture) => {
  texture.mapping = THREE.EquirectangularReflectionMapping;
  scene.environment = texture;
});
```

### PMREMGenerator

Generate prefiltered environment maps for PBR.

```javascript
import { RGBELoader } from "three/addons/loaders/RGBELoader.js";

const pmremGenerator = new THREE.PMREMGenerator(renderer);
pmremGenerator.compileEquirectangularShader();

new RGBELoader().load("environment.hdr", (texture) => {
  const envMap = pmremGenerator.fromEquirectangular(texture).texture;

  scene.environment = envMap;
  scene.background = envMap;

  texture.dispose();
  pmremGenerator.dispose();
});
```

## GLTF/GLB Loading

The most common 3D format for web.

```javascript
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const loader = new GLTFLoader();

loader.load("model.glb", (gltf) => {
  // The loaded scene
  const model = gltf.scene;
  scene.add(model);

  // Animations
  const animations = gltf.animations;
  if (animations.length > 0) {
    const mixer = new THREE.AnimationMixer(model);
    animations.forEach((clip) => {
      mixer.clipAction(clip).play();
    });
  }

  // Cameras (if any)
  const cameras = gltf.cameras;

  // Asset info
  console.log(gltf.asset); // Version, generator, etc.

  // User data from Blender/etc
  console.log(gltf.userData);
});
```

### GLTF with Draco Compression

```javascript
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/addons/loaders/DRACOLoader.js";

const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath(
  "https://www.gstatic.com/draco/versioned/decoders/1.5.6/",
);
dracoLoader.preload();

const gltfLoader = new GLTFLoader();
gltfLoader.setDRACOLoader(dracoLoader);

gltfLoader.load("compressed-model.glb", (gltf) => {
  scene.add(gltf.scene);
});
```

### GLTF with KTX2 Textures

```javascript
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { KTX2Loader } from "three/addons/loaders/KTX2Loader.js";

const ktx2Loader = new KTX2Loader();
ktx2Loader.setTranscoderPath(
  "https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/libs/basis/",
);
ktx2Loader.detectSupport(renderer);

const gltfLoader = new GLTFLoader();
gltfLoader.setKTX2Loader(ktx2Loader);

gltfLoader.load("model-with-ktx2.glb", (gltf) => {
  scene.add(gltf.scene);
});
```

### Process GLTF Content

```javascript
loader.load("model.glb", (gltf) => {
  const model = gltf.scene;

  // Enable shadows
  model.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  // Find specific mesh
  const head = model.getObjectByName("Head");

  // Adjust materials
  model.traverse((child) => {
    if (child.isMesh && child.material) {
      child.material.envMapIntensity = 0.5;
    }
  });

  // Center and scale
  const box = new THREE.Box3().setFromObject(model);
  const center = box.getCenter(new THREE.Vector3());
  const size = box.getSize(new THREE.Vector3());

  model.position.sub(center);
  const maxDim = Math.max(size.x, size.y, size.z);
  model.scale.setScalar(1 / maxDim);

  scene.add(model);
});
```

## Other Model Formats

### OBJ + MTL

```javascript
import { OBJLoader } from "three/addons/loaders/OBJLoader.js";
import { MTLLoader } from "three/addons/loaders/MTLLoader.js";

const mtlLoader = new MTLLoader();
mtlLoader.load("model.mtl", (materials) => {
  materials.preload();

  const objLoader = new OBJLoader();
  objLoader.setMaterials(materials);
  objLoader.load("model.obj", (object) => {
    scene.add(object);
  });
});
```

### FBX

```javascript
import { FBXLoader } from "three/addons/loaders/FBXLoader.js";

const loader = new FBXLoader();
loader.load("model.fbx", (object) => {
  // FBX often has large scale
  object.scale.setScalar(0.01);

  // Animations
  const mixer = new THREE.AnimationMixer(object);
  object.animations.forEach((clip) => {
    mixer.clipAction(clip).play();
  });

  scene.add(object);
});
```

### STL

```javascript
import { STLLoader } from "three/addons/loaders/STLLoader.js";

const loader = new STLLoader();
loader.load("model.stl", (geometry) => {
  const material = new THREE.MeshStandardMaterial({ color: 0x888888 });
  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);
});
```

### PLY

```javascript
import { PLYLoader } from "three/addons/loaders/PLYLoader.js";

const loader = new PLYLoader();
loader.load("model.ply", (geometry) => {
  geometry.computeVertexNormals();
  const material = new THREE.MeshStandardMaterial({ vertexColors: true });
  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);
});
```

## Async/Promise Loading

### Promisified Loader

```javascript
function loadModel(url) {
  return new Promise((resolve, reject) => {
    loader.load(url, resolve, undefined, reject);
  });
}

// Usage
async function init() {
  try {
    const gltf = await loadModel("model.glb");
    scene.add(gltf.scene);
  } catch (error) {
    console.error("Failed to load model:", error);
  }
}
```

### Load Multiple Assets

```javascript
async function loadAssets() {
  const [modelGltf, envTexture, colorTexture] = await Promise.all([
    loadGLTF("model.glb"),
    loadRGBE("environment.hdr"),
    loadTexture("color.jpg"),
  ]);

  scene.add(modelGltf.scene);
  scene.environment = envTexture;
  material.map = colorTexture;
}

// Helper functions
function loadGLTF(url) {
  return new Promise((resolve, reject) => {
    new GLTFLoader().load(url, resolve, undefined, reject);
  });
}

function loadRGBE(url) {
  return new Promise((resolve, reject) => {
    new RGBELoader().load(
      url,
      (texture) => {
        texture.mapping = THREE.EquirectangularReflectionMapping;
        resolve(texture);
      },
      undefined,
      reject,
    );
  });
}

function loadTexture(url) {
  return new Promise((resolve, reject) => {
    new THREE.TextureLoader().load(url, resolve, undefined, reject);
  });
}
```

## Caching

### Built-in Cache

```javascript
// Enable cache
THREE.Cache.enabled = true;

// Clear cache
THREE.Cache.clear();

// Manual cache management
THREE.Cache.add("key", data);
THREE.Cache.get("key");
THREE.Cache.remove("key");
```

### Custom Asset Manager

```javascript
class AssetManager {
  constructor() {
    this.textures = new Map();
    this.models = new Map();
    this.gltfLoader = new GLTFLoader();
    this.textureLoader = new THREE.TextureLoader();
  }

  async loadTexture(key, url) {
    if (this.textures.has(key)) {
      return this.textures.get(key);
    }

    const texture = await new Promise((resolve, reject) => {
      this.textureLoader.load(url, resolve, undefined, reject);
    });

    this.textures.set(key, texture);
    return texture;
  }

  async loadModel(key, url) {
    if (this.models.has(key)) {
      return this.models.get(key).clone();
    }

    const gltf = await new Promise((resolve, reject) => {
      this.gltfLoader.load(url, resolve, undefined, reject);
    });

    this.models.set(key, gltf.scene);
    return gltf.scene.clone();
  }

  dispose() {
    this.textures.forEach((t) => t.dispose());
    this.textures.clear();
    this.models.clear();
  }
}

// Usage
const assets = new AssetManager();
const texture = await assets.loadTexture("brick", "brick.jpg");
const model = await assets.loadModel("tree", "tree.glb");
```

## Loading from Different Sources

### Data URL / Base64

```javascript
const loader = new THREE.TextureLoader();
const texture = loader.load("data:image/png;base64,iVBORw0KGgo...");
```

### Blob URL

```javascript
async function loadFromBlob(blob) {
  const url = URL.createObjectURL(blob);
  const texture = await loadTexture(url);
  URL.revokeObjectURL(url);
  return texture;
}
```

### ArrayBuffer

```javascript
// From fetch
const response = await fetch("model.glb");
const buffer = await response.arrayBuffer();

// Parse with loader
const loader = new GLTFLoader();
loader.parse(buffer, "", (gltf) => {
  scene.add(gltf.scene);
});
```

### Custom Path/URL

```javascript
// Set base path
loader.setPath("assets/models/");
loader.load("model.glb"); // Loads from assets/models/model.glb

// Set resource path (for textures referenced in model)
loader.setResourcePath("assets/textures/");

// Custom URL modifier
manager.setURLModifier((url) => {
  return `https://cdn.example.com/${url}`;
});
```

## Error Handling

```javascript
// Graceful fallback
async function loadWithFallback(primaryUrl, fallbackUrl) {
  try {
    return await loadModel(primaryUrl);
  } catch (error) {
    console.warn(`Primary failed, trying fallback: ${error}`);
    return await loadModel(fallbackUrl);
  }
}

// Retry logic
async function loadWithRetry(url, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await loadModel(url);
    } catch (error) {
      if (i === maxRetries - 1) throw error;
      await new Promise((r) => setTimeout(r, 1000 * (i + 1)));
    }
  }
}

// Timeout
async function loadWithTimeout(url, timeout = 30000) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, { signal: controller.signal });
    clearTimeout(timeoutId);
    return response;
  } catch (error) {
    if (error.name === "AbortError") {
      throw new Error("Loading timed out");
    }
    throw error;
  }
}
```

## Performance Tips

1. **Use compressed formats**: DRACO for geometry, KTX2/Basis for textures
2. **Load progressively**: Show placeholders while loading
3. **Lazy load**: Only load what's needed
4. **Use CDN**: Faster asset delivery
5. **Enable cache**: `THREE.Cache.enabled = true`

```javascript
// Progressive loading with placeholder
const placeholder = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ wireframe: true }),
);
scene.add(placeholder);

loadModel("model.glb").then((gltf) => {
  scene.remove(placeholder);
  scene.add(gltf.scene);
});
```

## See Also

- `threejs-textures` - Texture configuration
- `threejs-animation` - Playing loaded animations
- `threejs-materials` - Material from loaded models
