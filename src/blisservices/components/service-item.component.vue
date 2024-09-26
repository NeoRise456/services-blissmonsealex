<script>

export default {
  name: "service-item",

}
</script>

<template>
  <pv-card style="width: 25rem; overflow: hidden">
    <template #header>
      <img alt="user header" src="" />
    </template>
    <template #title>Service 1</template>
    <template #subtitle>Price: 100</template>
    <template #content>
      <p class="m-0">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
        quas!
      </p>
    </template>
    <template #footer>
      <div class="flex gap-4 mt-1">
        <Button label="Cancel" severity="secondary" outlined class="w-full" />
        <Button label="Save" class="w-full" />
      </div>
    </template>
  </pv-card>
</template>

<style scoped>

</style>