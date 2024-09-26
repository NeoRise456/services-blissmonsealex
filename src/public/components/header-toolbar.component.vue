<script>

export default {
  name: "header-toolbar",

}
</script>

<template>
  <header>
    <pv-toolbar style=" padding: 1rem 1rem 1rem 1.5rem;
    background-color: transparent; ">
      <template #start>
        <div class="flex items-center gap-2">
          <div class="flex justify-content-center p-3 mr-8">
            <a style="color: #37123c; font-weight: bold"> BLISS </a>
          </div>
          <pv-button label="Home" text plain style="color: #37123c"/>
          <pv-button label="Services" text plain style="color: #37123c"/>
          <pv-button label="Pricing" text plain style="color: #37123c"/>
          <pv-button label="Schedule" text plain style="color: #37123c" />

        </div>
      </template>
      <template #center>
        <div class="flex items
      -center gap-2">
          <pv-button icon="pi pi-user" text plain label="Login / Register" style="color: #37123c" />
          <pv-button icon="pi pi-search" text style="color: #37123c"/>
          <pv-button icon="pi pi-shopping-cart" text style="color: #37123c"/>
          <pv-button icon="pi pi-heart" text style="color: #37123c"/>
        </div>
      </template>
      <template #end>
        <div class="flex items-center gap-2">
          <pv-button label="Share" severity="contrast" size="small" />
          <i class="pi pi-cog" style="font-size: 2rem"></i>
        </div>
      </template>
    </pv-toolbar>
  </header>
</template>

<style scoped>


</style>