<script>
    import { fade } from 'svelte/transition'
    import { onMount } from 'svelte'

    let inView = false;

    onMount(()=>{
        inView = true;
    })

</script>

<div class = "container" id = "contact">
    <div>
        <h1> Contacts: </h1>
    </div>
    {#if inView}
        <div transition:fade="{{delay:250, duration: 1000}}">
            <div>
                <div>  </div>
            </div>
            <div class = "carousel">
                <a class="carousel-item" href="https://www.linkedin.com/in/joshbarbee"><img src="/images/icons/linkedin-icon.png" alt = "linkedin icon"></a>
                <a class="carousel-item" href="https://www.github.com/joshbarbee"><img src="/images/icons/github-icon.png" alt = "github icon"></a>
                <a class="carousel-item" href="https://www.instagram.com/barbee.josh"><img src="/images/icons/instagram-icon.png" alt = "instagram icon"></a>
                <a class="carousel-item" href="mailto:joshbarbee1@gmail.com"><img src = "/images/icons/gmail-icon.png" alt = "gmail icon"></a>
            </div>
        </div>
    {/if}
</div>

<style>
    @media only screen and (max-width: 500px) {
        .container {
            width: 100% !important;
        }
    }

    h1 {
        font-size: var(--header-font-size);
        text-align: center;
    }

    .carousel {
        height: 300px;
    }
</style>