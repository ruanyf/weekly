---
name: threejs-animation
description: Three.js animation - keyframe animation, skeletal animation, morph targets, animation mixing. Use when animating objects, playing GLTF animations, creating procedural motion, or blending animations.
---

# Three.js Animation

## Quick Start

```javascript
import * as THREE from "three";

// Simple procedural animation
const clock = new THREE.Clock();

function animate() {
  const delta = clock.getDelta();
  const elapsed = clock.getElapsedTime();

  mesh.rotation.y += delta;
  mesh.position.y = Math.sin(elapsed) * 0.5;

  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
```

## Animation System Overview

Three.js animation system has three main components:

1. **AnimationClip** - Container for keyframe data
2. **AnimationMixer** - Plays animations on a root object
3. **AnimationAction** - Controls playback of a clip

## AnimationClip

Stores keyframe animation data.

```javascript
// Create animation clip
const times = [0, 1, 2]; // Keyframe times (seconds)
const values = [0, 1, 0]; // Values at each keyframe

const track = new THREE.NumberKeyframeTrack(
  ".position[y]", // Property path
  times,
  values,
);

const clip = new THREE.AnimationClip("bounce", 2, [track]);
```

### KeyframeTrack Types

```javascript
// Number track (single value)
new THREE.NumberKeyframeTrack(".opacity", times, [1, 0]);
new THREE.NumberKeyframeTrack(".material.opacity", times, [1, 0]);

// Vector track (position, scale)
new THREE.VectorKeyframeTrack(".position", times, [
  0,
  0,
  0, // t=0
  1,
  2,
  0, // t=1
  0,
  0,
  0, // t=2
]);

// Quaternion track (rotation)
const q1 = new THREE.Quaternion().setFromEuler(new THREE.Euler(0, 0, 0));
const q2 = new THREE.Quaternion().setFromEuler(new THREE.Euler(0, Math.PI, 0));
new THREE.QuaternionKeyframeTrack(
  ".quaternion",
  [0, 1],
  [q1.x, q1.y, q1.z, q1.w, q2.x, q2.y, q2.z, q2.w],
);

// Color track
new THREE.ColorKeyframeTrack(".material.color", times, [
  1,
  0,
  0, // red
  0,
  1,
  0, // green
  0,
  0,
  1, // blue
]);

// Boolean track
new THREE.BooleanKeyframeTrack(".visible", [0, 0.5, 1], [true, false, true]);

// String track (for morph targets)
new THREE.StringKeyframeTrack(
  ".morphTargetInfluences[smile]",
  [0, 1],
  ["0", "1"],
);
```

### Interpolation Modes

```javascript
const track = new THREE.VectorKeyframeTrack(".position", times, values);

// Interpolation
track.setInterpolation(THREE.InterpolateLinear); // Default
track.setInterpolation(THREE.InterpolateSmooth); // Cubic spline
track.setInterpolation(THREE.InterpolateDiscrete); // Step function
```

## AnimationMixer

Plays animations on an object and its descendants.

```javascript
const mixer = new THREE.AnimationMixer(model);

// Create action from clip
const action = mixer.clipAction(clip);
action.play();

// Update in animation loop
function animate() {
  const delta = clock.getDelta();
  mixer.update(delta); // Required!

  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
```

### Mixer Events

```javascript
mixer.addEventListener("finished", (e) => {
  console.log("Animation finished:", e.action.getClip().name);
});

mixer.addEventListener("loop", (e) => {
  console.log("Animation looped:", e.action.getClip().name);
});
```

## AnimationAction

Controls playback of an animation clip.

```javascript
const action = mixer.clipAction(clip);

// Playback control
action.play();
action.stop();
action.reset();
action.halt(fadeOutDuration);

// Playback state
action.isRunning();
action.isScheduled();

// Time control
action.time = 0.5; // Current time
action.timeScale = 1; // Playback speed (negative = reverse)
action.paused = false;

// Weight (for blending)
action.weight = 1; // 0-1, contribution to final pose
action.setEffectiveWeight(1);

// Loop modes
action.loop = THREE.LoopRepeat; // Default: loop forever
action.loop = THREE.LoopOnce; // Play once and stop
action.loop = THREE.LoopPingPong; // Alternate forward/backward
action.repetitions = 3; // Number of loops (Infinity default)

// Clamping
action.clampWhenFinished = true; // Hold last frame when done

// Blending
action.blendMode = THREE.NormalAnimationBlendMode;
action.blendMode = THREE.AdditiveAnimationBlendMode;
```

### Fade In/Out

```javascript
// Fade in
action.reset().fadeIn(0.5).play();

// Fade out
action.fadeOut(0.5);

// Crossfade between animations
const action1 = mixer.clipAction(clip1);
const action2 = mixer.clipAction(clip2);

action1.play();

// Later, crossfade to action2
action1.crossFadeTo(action2, 0.5, true);
action2.play();
```

## Loading GLTF Animations

Most common source of skeletal animations.

```javascript
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const loader = new GLTFLoader();
loader.load("model.glb", (gltf) => {
  const model = gltf.scene;
  scene.add(model);

  // Create mixer
  const mixer = new THREE.AnimationMixer(model);

  // Get all clips
  const clips = gltf.animations;
  console.log(
    "Available animations:",
    clips.map((c) => c.name),
  );

  // Play first animation
  if (clips.length > 0) {
    const action = mixer.clipAction(clips[0]);
    action.play();
  }

  // Play specific animation by name
  const walkClip = THREE.AnimationClip.findByName(clips, "Walk");
  if (walkClip) {
    mixer.clipAction(walkClip).play();
  }

  // Store mixer for update loop
  window.mixer = mixer;
});

// Animation loop
function animate() {
  const delta = clock.getDelta();
  if (window.mixer) window.mixer.update(delta);

  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
```

## Skeletal Animation

### Skeleton and Bones

```javascript
// Access skeleton from skinned mesh
const skinnedMesh = model.getObjectByProperty("type", "SkinnedMesh");
const skeleton = skinnedMesh.skeleton;

// Access bones
skeleton.bones.forEach((bone) => {
  console.log(bone.name, bone.position, bone.rotation);
});

// Find specific bone by name
const headBone = skeleton.bones.find((b) => b.name === "Head");
if (headBone) headBone.rotation.y = Math.PI / 4; // Turn head

// Skeleton helper
const helper = new THREE.SkeletonHelper(model);
scene.add(helper);
```

### Programmatic Bone Animation

```javascript
function animate() {
  const time = clock.getElapsedTime();

  // Animate bone
  const headBone = skeleton.bones.find((b) => b.name === "Head");
  if (headBone) {
    headBone.rotation.y = Math.sin(time) * 0.3;
  }

  // Update mixer if also playing clips
  mixer.update(clock.getDelta());
}
```

### Bone Attachments

```javascript
// Attach object to bone
const weapon = new THREE.Mesh(weaponGeometry, weaponMaterial);
const handBone = skeleton.bones.find((b) => b.name === "RightHand");
if (handBone) handBone.add(weapon);

// Offset attachment
weapon.position.set(0, 0, 0.5);
weapon.rotation.set(0, Math.PI / 2, 0);
```

## Morph Targets

Blend between different mesh shapes.

```javascript
// Morph targets are stored in geometry
const geometry = mesh.geometry;
console.log("Morph attributes:", Object.keys(geometry.morphAttributes));

// Access morph target influences
mesh.morphTargetInfluences; // Array of weights
mesh.morphTargetDictionary; // Name -> index mapping

// Set morph target by index
mesh.morphTargetInfluences[0] = 0.5;

// Set by name
const smileIndex = mesh.morphTargetDictionary["smile"];
mesh.morphTargetInfluences[smileIndex] = 1;
```

### Animating Morph Targets

```javascript
// Procedural
function animate() {
  const t = clock.getElapsedTime();
  mesh.morphTargetInfluences[0] = (Math.sin(t) + 1) / 2;
}

// With keyframe animation
const track = new THREE.NumberKeyframeTrack(
  ".morphTargetInfluences[smile]",
  [0, 0.5, 1],
  [0, 1, 0],
);
const clip = new THREE.AnimationClip("smile", 1, [track]);
mixer.clipAction(clip).play();
```

## Animation Blending

Mix multiple animations together.

```javascript
// Setup actions
const idleAction = mixer.clipAction(idleClip);
const walkAction = mixer.clipAction(walkClip);
const runAction = mixer.clipAction(runClip);

// Play all with different weights
idleAction.play();
walkAction.play();
runAction.play();

// Set initial weights
idleAction.setEffectiveWeight(1);
walkAction.setEffectiveWeight(0);
runAction.setEffectiveWeight(0);

// Blend based on speed
function updateAnimations(speed) {
  if (speed < 0.1) {
    idleAction.setEffectiveWeight(1);
    walkAction.setEffectiveWeight(0);
    runAction.setEffectiveWeight(0);
  } else if (speed < 5) {
    const t = speed / 5;
    idleAction.setEffectiveWeight(1 - t);
    walkAction.setEffectiveWeight(t);
    runAction.setEffectiveWeight(0);
  } else {
    const t = Math.min((speed - 5) / 5, 1);
    idleAction.setEffectiveWeight(0);
    walkAction.setEffectiveWeight(1 - t);
    runAction.setEffectiveWeight(t);
  }
}
```

### Additive Blending

```javascript
// Base pose
const baseAction = mixer.clipAction(baseClip);
baseAction.play();

// Additive layer (e.g., breathing)
const additiveAction = mixer.clipAction(additiveClip);
additiveAction.blendMode = THREE.AdditiveAnimationBlendMode;
additiveAction.play();

// Convert clip to additive
THREE.AnimationUtils.makeClipAdditive(additiveClip);
```

## Animation Utilities

```javascript
import * as THREE from "three";

// Find clip by name
const clip = THREE.AnimationClip.findByName(clips, "Walk");

// Create subclip
const subclip = THREE.AnimationUtils.subclip(clip, "subclip", 0, 30, 30);

// Convert to additive
THREE.AnimationUtils.makeClipAdditive(clip);
THREE.AnimationUtils.makeClipAdditive(clip, 0, referenceClip);

// Clone clip
const clone = clip.clone();

// Get clip duration
clip.duration;

// Optimize clip (remove redundant keyframes)
clip.optimize();

// Reset clip to first frame
clip.resetDuration();
```

## Procedural Animation Patterns

### Smooth Damping

```javascript
// Smooth follow/lerp
const target = new THREE.Vector3();
const current = new THREE.Vector3();
const velocity = new THREE.Vector3();

function smoothDamp(current, target, velocity, smoothTime, deltaTime) {
  const omega = 2 / smoothTime;
  const x = omega * deltaTime;
  const exp = 1 / (1 + x + 0.48 * x * x + 0.235 * x * x * x);
  const change = current.clone().sub(target);
  const temp = velocity
    .clone()
    .add(change.clone().multiplyScalar(omega))
    .multiplyScalar(deltaTime);
  velocity.sub(temp.clone().multiplyScalar(omega)).multiplyScalar(exp);
  return target.clone().add(change.add(temp).multiplyScalar(exp));
}

function animate() {
  current.copy(smoothDamp(current, target, velocity, 0.3, delta));
  mesh.position.copy(current);
}
```

### Spring Physics

```javascript
class Spring {
  constructor(stiffness = 100, damping = 10) {
    this.stiffness = stiffness;
    this.damping = damping;
    this.position = 0;
    this.velocity = 0;
    this.target = 0;
  }

  update(dt) {
    const force = -this.stiffness * (this.position - this.target);
    const dampingForce = -this.damping * this.velocity;
    this.velocity += (force + dampingForce) * dt;
    this.position += this.velocity * dt;
    return this.position;
  }
}

const spring = new Spring(100, 10);
spring.target = 1;

function animate() {
  mesh.position.y = spring.update(delta);
}
```

### Oscillation

```javascript
function animate() {
  const t = clock.getElapsedTime();

  // Sine wave
  mesh.position.y = Math.sin(t * 2) * 0.5;

  // Bouncing
  mesh.position.y = Math.abs(Math.sin(t * 3)) * 2;

  // Circular motion
  mesh.position.x = Math.cos(t) * 2;
  mesh.position.z = Math.sin(t) * 2;

  // Figure 8
  mesh.position.x = Math.sin(t) * 2;
  mesh.position.z = Math.sin(t * 2) * 1;
}
```

## Performance Tips

1. **Share clips**: Same AnimationClip can be used on multiple mixers
2. **Optimize clips**: Call `clip.optimize()` to remove redundant keyframes
3. **Disable when off-screen**: Stop mixer updates for invisible objects
4. **Use LOD for animations**: Simpler rigs for distant characters
5. **Limit active mixers**: Each mixer.update() has a cost

```javascript
// Pause animation when not visible
mesh.onBeforeRender = () => {
  action.paused = false;
};

mesh.onAfterRender = () => {
  // Check if will be visible next frame
  if (!isInFrustum(mesh)) {
    action.paused = true;
  }
};

// Cache clips
const clipCache = new Map();
function getClip(name) {
  if (!clipCache.has(name)) {
    clipCache.set(name, loadClip(name));
  }
  return clipCache.get(name);
}
```

## See Also

- `threejs-loaders` - Loading animated GLTF models
- `threejs-fundamentals` - Clock and animation loop
- `threejs-shaders` - Vertex animation in shaders
