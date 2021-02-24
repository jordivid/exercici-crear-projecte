<template>
    <div class="container d-flex flex-column align-items-center">
        <h3 class="text-center">Component Pare</h3>
        <Fill v-for="miHijo in misHijos" 
          :key="miHijo.name"
          :name="miHijo.name"
          :contador="miHijo.contador"
          @sumar="adicion($event)"
        ></Fill>
    </div>
</template>

<script src="./../scripts/Pare.js"></script>