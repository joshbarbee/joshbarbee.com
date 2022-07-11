

<script lang="ts">
  import { onMount } from "svelte";
  import DestopNav from "./DestopNav.svelte";
  import MobileNav from "./MobileNav.svelte";

  var is_mobile:boolean = false;

  onMount(async () => {
    if (window.innerWidth < 1024) {
      is_mobile = true;
    }

    window.addEventListener('resize',()=>{
      if (window.innerWidth < 1024) {
        is_mobile = true;
      } else {
        is_mobile = false;
      }
    })
  });
</script>

<svelte:head>
  <title>Conduit</title>
</svelte:head>

<div>
  {#if is_mobile}
  <MobileNav />
  {:else}
  <DestopNav />
  {/if}
</div>
