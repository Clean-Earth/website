<template>
  <div class="d-card">
      <p class="amount">{{amount}}</p>
      <p>{{description}}</p>
      </div>
</template>

<script>
export default {
  props: ['amount', 'description'],
};
</script>>

<style scoped>
.d-card
{
    color: white;
    background-color: forestgreen;
    width:10em;
    border-radius: 10%;
    margin: 1em;
    padding: 1em;
}
.amount
{
    font-size: 2em;
}
.amount::before
{
    content:"\20B9";
}

</style>
