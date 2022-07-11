<style lang="scss">
  @import "../app.scss";

  section {
    text-align: center;
    height: 100%;
  }

  #right-title {
    color: $text_primary;
    opacity: 0;
  }

  #left-title {
    color: $text_primary;
    opacity: 0;
  }

  .title {
    display: inline-block;
  }

  #button-text {
    color: $text_primary;
  }

  .button {
    border-radius: 0%;
    background-color: $background2;
    border: 0;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    position: relative;
    overflow: hidden;
  }

  .button:before {
    content: "";
    position: absolute;
    z-index: -1;
    left: 0;
    right: 100%;
    bottom: 0;
    background: #2098d1;
    height: 4px;
    -webkit-transition-property: right;
    transition-property: right;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
  }

  .button:hover::before,
  .button:focus::before,
  .button:active::before {
    right: 0;
  }

  #button-col {
    justify-content: center;
    align-items: center;
    display: flex;
    position: relative;
    margin: 20px auto;
    background: rgba(100, 100, 100, 0);
    opacity: 0;
  }

  #button-wrapper {
    margin: 0 auto;
  }

  .column {
    padding: 0;
  }
</style>

<script lang="ts">
  import { onMount } from "svelte";
  import { subscribe } from "svelte/internal";
  import { isBlur } from "../stores/store";

  const MAXFADE = 3000;

  var is_blur: Boolean = false;

  var fade = async (elem: HTMLElement) => {
    var alpha = 0;

    let int = setInterval(async () => {
      alpha += 1;
      elem.style.opacity = (alpha / 100).toString();

      if (alpha >= 100) {
        clearInterval(int);
      }
    }, MAXFADE / 100); //maxfade / number of times we update opacity
  };

  onMount(async () => {
    let right_title: HTMLElement = document.getElementById("right-title")!;
    let left_title: HTMLElement = document.getElementById("left-title")!;
    let button: HTMLElement = document.getElementById("button-col")!;

    await fade(left_title);

    if (right_title) {
      setTimeout(async () => {
        await fade(right_title);
      }, MAXFADE / 2);

      setTimeout(async () => {
        await fade(button);
      }, MAXFADE);
    }
  });
</script>

<section class="section" class:blur={$isBlur === true}>
  <div class="container">
    <div class="columns is-mobile">
      <div class="column is-full">
        <div>
          <h1 class="title" id="left-title">Hi.&nbsp;</h1>
          <p class="title" id="right-title">I'm Josh Barbee</p>
        </div>
      </div>
    </div>
    <div id="button-wrapper">
      <div id="button-col">
        <button class="button is-large" id="button"
          ><p class="title is-3" id="button-text">See my work</p></button
        >
      </div>
    </div>
  </div>
</section>
