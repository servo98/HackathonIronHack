<template>
  <div class="">
  <div class="has-text-centered">
   <h1 class="title" style="margin-bottom:10px">Albergues</h1>
  
  </div>
   <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-250x250">
            <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">Albergue Chido</p>
          <p class="subtitle is-6">5km de aquí</p>
          <button class="button is-warning">cómo llegar?</button>
        </div>
      </div>
      <progress class="progress is-link" value="30" max="100">30%</progress>
      <div class="container has-text-centered">
        <h2 class="subtitle">
          30% capacidad
        </h2>
      </div>
    </div>
  </div>

    <br>

     <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-250x250">
            <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">Albergue Chido</p>
          <p class="subtitle is-6">5km de aquí</p>
          <button class="button is-warning">cómo llegar?</button>
        </div>
      </div>
      <progress class="progress is-link" value="30" max="100">30%</progress>
      <div class="container has-text-centered">
        <h2 class="subtitle">
          30% capacidad
        </h2>
      </div>
    </div>
  </div>

<br>
 <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-250x250">
            <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">Albergue Chido</p>
          <p class="subtitle is-6">5km de aquí</p>
          <button class="button is-warning">cómo llegar?</button>
        </div>
      </div>
      <progress class="progress is-link" value="30" max="100">30%</progress>
      <div class="container has-text-centered">
        <h2 class="subtitle">
          30% capacidad
        </h2>
      </div>
    </div>
  </div>


<br>

    
    
  </div>
</template>

<script>

import http from '../mixins/axios'
export default {
  name: 'Home',
  mixins: [http],
  methods: {
      
  }
}
</script>
