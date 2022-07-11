<style lang="scss">
  @import "../../app.scss";

  section {
    width: 100%;
    height: 100%;
    background: $background;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -100;
    padding: 0 !important;
  }

  canvas {
    height: 100%;
    width: 100%;
    position: fixed;
    image-rendering: optimizeQuality;
    display: block;
    z-index: -9999;
    top: 0;
    left: 0;
  }
</style>

<script lang="ts">
  import { onMount } from "svelte";
  import { isBlur } from "../../stores/store";

  type Node = {
    height: number;
    width: number;
    x: number;
    y: number;
    dx: number;
    dy: number;
    color: string;
    loops: number;
    connections: Node[];
  };

  var width: number;
  var height: number;

  var canvas: HTMLCanvasElement;
  var ctx: CanvasRenderingContext2D;

  const color = "#E0E0E0E0";
  const size = 6;

  var last_spawned = -1;
  var objects: Node[] = []!;

  var addListener = async (e: Window) => {
    width = e.innerWidth;
    height = e.innerHeight;

    e.addEventListener("resize", () => {
      let dpi = window.devicePixelRatio;

      let style_height = +getComputedStyle(canvas)
        .getPropertyValue("height")
        .slice(0, -2);
      let style_width = +getComputedStyle(canvas).getPropertyValue("width").slice(0, -2);
      canvas.height = style_height * dpi;
      canvas.width = style_width * dpi;

      width = window.innerWidth;
      height = window.innerHeight;

      ctx.lineWidth = 0.05;
      ctx.strokeStyle = "#F0F0F0";
    });
  };

  var create_graph = async () => {
    for (let i = 0; i < Math.random() * 12 + 6; i++) {
      let rand_x = Math.floor(Math.random() * width);
      let rand_y = Math.floor(Math.random() * height);

      // find closests neighbors
      let shuffled_nodes = objects.sort(
        (a, b) =>
          Math.sqrt(Math.pow(a.x, 2) + Math.pow(a.y, 2)) -
          Math.sqrt(Math.pow(b.x, 2) + Math.pow(b.y, 2))
      );
      let connections = shuffled_nodes.slice(0, Math.round(Math.random() * 5));

      let new_elem: Node = {
        height: size,
        width: size,
        x: rand_x,
        y: rand_y,
        dx: 0,
        dy: 0,
        color: color,
        loops: 0,
        connections: connections
      };

      objects.push(new_elem);
    }
  };

  var draw_streak = async (streak: Node) => {
    ctx.beginPath();
    ctx.moveTo(streak.x, streak.y);

    if (streak.loops % 200 === 0) {
      streak.dx = Math.random() * 0.5 - 0.25;
      streak.dy = Math.random() * 0.5 - 0.25;
    }

    streak.x += streak.dx;
    streak.y += streak.dy;

    for (var j = 0; j < streak.connections.length; j++) {
      if (
        streak.connections[j] == undefined ||
        streak.connections[j]?.x === undefined ||
        streak.connections[j]?.y === undefined
      ) {
        return;
      }

      let to_x: number = (streak.connections[j]?.x ?? 0).valueOf();
      let to_y: number = (streak.connections[j]?.y ?? 0).valueOf();

      ctx.lineTo(to_x, to_y);
      ctx.lineTo(streak.x, streak.y);
    }

    ctx.fillStyle = streak.color;
    ctx.arc(streak.x, streak.y, streak.height, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    streak.loops++;
  };

  var animate = async () => {
    var current_time = Date.now();

    let delta = Math.round((current_time - last_spawned) / 1000);
    let alpha = -1 * Math.pow((delta - 10) / 10, 2) + 1 + 0.01 * delta;

    canvas.style.opacity = alpha.toString();

    if (current_time > last_spawned + 22000) {
      objects = [];
      await create_graph();
      last_spawned = current_time;
    }

    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    requestAnimationFrame(animate);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (var i = 0; i < objects.length; i++) {
      await draw_streak(objects[i]!);
    }
  };

  onMount(async () => {
    let dpi = window.devicePixelRatio;

    let ctx_wrapper = canvas.getContext("2d");

    if (ctx_wrapper instanceof CanvasRenderingContext2D) {
      ctx = ctx_wrapper;
    }

    addListener(window);

    let style_height = +getComputedStyle(canvas).getPropertyValue("height").slice(0, -2);
    let style_width = +getComputedStyle(canvas).getPropertyValue("width").slice(0, -2);
    canvas.height = style_height * dpi;
    canvas.width = style_width * dpi;

    ctx.lineWidth = 0.05;
    ctx.strokeStyle = "#F0F0F0";
    ctx.imageSmoothingEnabled = true;

    void animate();
  });
</script>

<section class="section" class:blur={$isBlur === true}>
  <canvas id="canvas" bind:this={canvas} />
</section>
