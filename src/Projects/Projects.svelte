<script>
  import { onMount } from "svelte";

  let cards = document.getElementsByClassName('card');
  var paddings = [0, 0, 0];

  let resizer = () => {      
      let heights = [0,0,0];

      /* calculating maximum height of all cards*/
      for(let i = 0; i < 3; i++){
        heights[i] = parseInt(document.defaultView.getComputedStyle(cards[i]).height);
      }

      for(let i = 0; i < heights.length; i++){
        let diff = heights[0] - heights[i];

        paddings[i] = paddings[i] + diff;
      }
    };

  onMount(()=>{
    resizer();

    window.addEventListener('resize', resizer);
  })

</script>

<div class = "container" id = "projects">
  <div>
    <h1>Projects: </h1>
  </div>
  <div class = "row">
    <div class = "col m4">
      <div class = "card">
        <div class="card-content">
          <span class = "card-title">Survey MM</span>
          <div>
            <div class = "chip">
              <img src = "/images/icons/python-icon.png" alt = "python icon">
            </div>
            <div class = "chip">
              <img src = "/images/icons/numpy-icon.svg" alt = "numpy icon">
            </div>
            <div class = "chip">
              <img src = "/images/icons/sql-icon.png" alt = "sql icon">
            </div>
          </div>
          <a class="btn-floating halfway-fab waves-effect waves-light" href = "https://github.com/joshbarbee/Survey-mm/"><i class="material-icons">code</i></a>
          <p>This project extracted survey data from a CSV and then conducted weighted comparision tests between the survey respondents. The project utilizes NumPy/Pandas for data analysis and leverages multithreading via ThreadPoolExecutor, then outputs the data results to a SQL DB.</p>
        </div>
      </div>
    </div>
    <div class = "col m4">
      <div class = "card">
        <div class="card-content">
          <span class = "card-title">Colligo</span>
          <div>
            <div class = "chip">
              <img src = "/images/icons/python-icon.png" alt = "python icon">
            </div>
            <div class = "chip">
              <img src = "/images/icons/cplusplus-icon.png" alt = "c++ icon">
            </div>
          </div>
          <a class="btn-floating halfway-fab waves-effect waves-light" href = "https://github.com/joshbarbee/Colligo"><i class="material-icons">code</i></a>
          <p>Colligo is a Python-based localized network that facilitates asychronous message writing / sending via multithreaded queues. Colligo additionally has a C++ variant that is currently in development.</p>
          <div style = "padding-bottom: {paddings[1]}px;"></div>
        </div>
      </div>
    </div>    
    <div class = "col m4">
      <div class = "card">
        <div class="card-content">
          <span class = "card-title">joshbarbee.com</span>
          <div>
            <div class = "chip">
              <img src = "/images/icons/svelte-icon.png" alt = "svelte ico">
            </div>
            <div class = "chip">
              <img src = "/images/icons/js-icon.png" alt = "nodejs ico">
            </div>
          </div>
          <a class="btn-floating halfway-fab waves-effect waves-light" href = "https://github.com/joshbarbee/joshbarbee.com"><i class="material-icons">code</i></a>
          <p>This website serves as a forray into Javascript development for me, particularly front-end JS. SvelteJS is being used for front-end reactive content and Materialize-CSS for css styling.</p>
          <div style = "padding-bottom: {paddings[2]}px;"></div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  a {
    background-color: var(--tertiary-color);
  }

  img {
    padding: 0;
    margin: 0;
    border-radius: 0;
  }

  .chip {
    margin: 0;
    padding: 0;
  }

  h1 {
    margin: 0 auto;
    text-align: center;
  }
</style>