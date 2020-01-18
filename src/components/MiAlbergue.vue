<template>
  <div class="">
  <div class="container">
    <img src="https://i.stack.imgur.com/zvx9E.png">
  </div>

  <div class="container">
    <div class="field">
     <button class="button is-warning  is-pulled-right">IR</button>
    </div>
    <div class="field is-pulled-left">
      <i class="fas fa-pen"></i><h2 class="subtitle">CheckList</h2>
    </div>
</div>

    <div class="field">
      <div class="control">
        <label class="checkbox">
          <input type="checkbox">
          Documentos
        </label>
      </div>
    </div>
    <div class="field">
      <div class="control">
        <label class="checkbox">
          <input type="checkbox">
          Dinero
        </label>
      </div>
    </div>
    <div class="field">
      <div class="control">
        <label class="checkbox">
          <input type="checkbox">
          Víveres
        </label>
      </div>
    </div>
    <div class="field">
      <div class="control">
        <label class="checkbox">
          <input type="checkbox">
          Ropa
        </label>
      </div>
    </div>
    <div class="field">
      <div class="control">
        <label class="checkbox">
          <input type="checkbox">
          Medicamentos
        </label>
      </div>
    </div>
  
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
