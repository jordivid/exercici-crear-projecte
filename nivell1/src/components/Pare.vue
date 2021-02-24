<template>
    <div class="container d-flex flex-column align-items-center">
        <h3 class="text-center">Component Pare</h3>
        <Fill v-for="num in 3" :key="num"></Fill>
    </div>
</template>

<script src="./../scripts/Pare.js"></script>