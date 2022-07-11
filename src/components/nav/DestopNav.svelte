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
        color: $text_primary;
        text-decoration: underline;
        max-height: inherit;
        line-height: 1.5;
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
        -moz-transform: scale(1.1);
        -ms-transform: scale(1.1);
    }

    .non-animated:hover {
        -webkit-transform: scale(1);
        transform: scale(1);
        -moz-transform: scale(1);
        -ms-transform: scale(1);
    }

    .navbar-brand {
        display: flex;
        justify-content: center;
        align-content: center;
        }

    .navbar-wrapper-desktop {
        position: relative;
        margin-left: 0;
        margin-right: 0;
        width: 0%;
    }

    .navbar-container-desktop {
        align-items: center;
        display: flex;
        width: 40px !important;
    }

    .navbar-item {
        background-color: rgba(#000000, 0) !important;
        width: 110px;
        justify-content: center;
    }

    .navbar-item:hover {
        background-color: rgba(#000000, 0) !important;
        border-color: 0;
        border: none;
    }

    nav {
        background: none !important;
    }

    .navbar-divider {
        width: 2px;
        height: 50%;
        top: 10px;
        background-color: $background_dark;
        position: relative;
    }

    #dropdown-menu {
        display: none;
    }

    .is-active {
        display: inline-flex !important;
    }

    .dropdown {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-content: center;
        padding-left: 12px;
        padding-right: 12px;
    }

    .dropdown-content {
        border: none;
        text-decoration: none;
        background: none;
        padding-bottom: 0;
        box-shadow: none;
    }

    .dropdown-item {
        padding-left: 12px;
    }

    #navbar-items {
        margin: 0 auto;
    }

    .no-top-padding {
        padding-top: 0px;
    }

    .dropdown-trigger {
        padding-top: 8px;
    }
</style>
  
<script lang="ts">
    var show_burger: boolean = false;
    var is_mobile: boolean = false;
  
    var dropdown: Element | null;
    var dd_menu: Element | null;
  
    import { onMount } from "svelte";
  
    onMount(async () => {
      if (window.innerWidth < 1024) {
        is_mobile = true;
      }
  
      dropdown = document.querySelector(".dropdown");
      dd_menu = document.querySelector(".dropdown-menu");
  
      if (dropdown !== null && dd_menu !== null) {
        dropdown.addEventListener("click", event => {
          event.stopPropagation();
  
          dd_menu?.classList.toggle("is-active");
        });
      }
  
      let toggle = document.getElementById("navbar-toggle");
      if (toggle !== null) {
        toggle.addEventListener("mouseout", async () => {
          if (show_burger === false) {
            show_burger = false;
          }
        });
      }
    });
</script>

<nav
    class="navbar is-fixed-bottom"
    aria-label="main navigation"
    class:navbar-mobile={is_mobile && show_burger}
>
    <div class="navbar-brand" id="navbar-icons">
        <a
        role="button"
        class="navbar-burger"
        id="navbar-burger"
        href="#"
        class:is-active={show_burger === true}
        on:click={() => (show_burger = !show_burger)}
        aria-expanded="false"
        data-target=""
        >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        </a>
    </div>

    <div
        class="navbar-menu"
    >
        <div class="navbar-start" id="navbar-items">
        <hr class="navbar-divider" />
        <a class="navbar-item text" href="./"> Landing </a>
        <hr class="navbar-divider" />
        <a class="navbar-item text" href="./"> About Me </a>
        <hr class="navbar-divider" />
        <div class="navbar-item has-dropdown">
            <div class="dropdown is-up">
            <div class="dropdown-trigger" aria-haspopup="true" aria-controls="dropdown-menu">
                <span id = "dropdown-label" class="text no-top-padding">Projects</span>
                <span class="icon is-small">
                <i class="fa-solid fa-angle-up" aria-hidden="true" />
                </span>
            </div>
            <div class="dropdown-menu" id="dropdown-menu" role="menu">
                <div class="dropdown-content">
                <div class="dropdown-item">
                    <p class="text non-animated no-top-padding">Personal Projects</p>
                </div>
                <div class="dropdown-item">
                    <p class="text non-animated no-top-padding">School Projects</p>
                </div>
                <div class="dropdown-item">
                    <p class="text non-animated no-top-padding">Other Projects</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        <hr class="navbar-divider" />
        <a class="navbar-item text" href="./"> Mini-CTF </a>
        <hr class="navbar-divider" />
        <a class="navbar-item text" href="./"> Contact </a>
        <hr class="navbar-divider" />
        <a class="navbar-item text" href="./"> Resume </a>
        <hr class="navbar-divider" />
        </div>
        <div class="navbar-end navbar-wrapper-desktop">
        <a
            class="navbar-item navbar-container-desktop"
            href="https://github.com/joshbarbee"
            ><p class="fa-brands fa-github navbar-logo" /></a
        >
        <a
            class="navbar-item navbar-container-desktop"
            href="https://linkedin.com/in/josh-barbee"
            ><p class="fa-brands fa-linkedin navbar-logo" /></a
        >
        <a
            class="navbar-item navbar-container-desktop"
            href="mailto:joshbarbee1@gmail.com"
            ><p class="fa-solid fa-envelope navbar-logo" /></a
        >
        </div>
    </div>
</nav>
  