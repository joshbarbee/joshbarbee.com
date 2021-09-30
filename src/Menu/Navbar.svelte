<script>
  import Sidenav from './Sidenav.svelte'
</script>


<nav>
  <div class="nav-wrapper">
    <a href={'#'} data-target="mobile" class="sidenav-trigger"><i class="material-icons hide-on-med-and-up">menu</i></a>
    <ul class="left hide-on-small-and-down">
      <li><a href="sass.html">About</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </div>
</nav>

<Sidenav></Sidenav>

<style>
  div {
    background-color: var(--primary-color)
  }

  a {
    font-size: var(--text-font-size);
  }

  a:visited {
    color: #eeeeff;
  }
</style>