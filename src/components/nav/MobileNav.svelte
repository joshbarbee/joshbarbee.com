<style lang="scss">
    @import "../../app.scss";
    
    .text {
        font-size: 16px;
        color: $text_gray;
        font-size: 16px;
        color: $text_gray;
        line-height: 1.5;
        text-decoration: none;
        box-sizing: border-box;
        padding-top: 1rem;
    }

    .text:hover {
        color: $text_gray !important;
        text-decoration: underline;
        max-height: inherit;
        line-height: 1.5;
        background-color: white !important;
    }

    .menu {
        background-color: white;
        margin-left: auto;
        margin-right: 0;
        height: 80vh;
        padding-top: 2rem;
    }

    .menu-container {
      height: 100%;
      width: 70%;
      min-width: 250px;
      position: absolute;
      right: 0;
      top: 0;
    }

    #list {
        border-left: 1px solid $background_light;
    }
</style>

<script lang="ts">
  import { isBlur } from "../../stores/store"; 
  import { onMount } from "svelte";

  var is_active: boolean = false;

  var toggleMenu = () => {
    is_active = !is_active;

    isBlur.update(e => 
      e = !e
    )
  }

  onMount(()=>{
    
  })
</script>

<div class="menu-container">
  <div class="menu">
    <ul class="menu-list">
      <li><a href="./" class="text">Landing</a></li>
      <li><a href="./about" class="text">About Me</a></li>
      <li><a href="./projects" class="text">Projects</a></li>
      <li>
        <ul id = "list">
          <li><a href="./projects/personal-projects" class="text">Personal Projects</a></li>
          <li><a href="./projects/school-projects" class="text">School Projects</a></li>
          <li><a href="./projects/other-projects" class="text">Other Projects</a></li>
        </ul>
      </li>
      <li><a href="./mini-ctf" class="text">Mini-CTF</a></li>
      <li><a href="./contact" class="text">Contact ME</a></li>
      <li><a href="./resume" class="text">Resume</a></li>
    </ul>
  </div>
  <div>
    <button on:click={toggleMenu}>Show Menu</button>
  </div>
</div>