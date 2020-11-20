<template>
  <div class="donate">
      <div>
        <img class="donate-image" alt="Illustration of people donating and caring for the planet"
           src="../assets/donate.jpg">
      </div>
      <div>
          <h1>Help us work for a Better Future</h1>
          <div class="card-area">
          <DonateCard amount="100"
          description="A brief description of how we will utilize this amount"/>
         <DonateCard amount="500"
          description="A brief description of how we will utilize this amount"/>
         <DonateCard amount="1000"
          description="A brief description of how we will utilize this amount"/>
          <DonateCard amount="5000"
          description="A brief description of how we will utilize this amount"/>
          </div>
      </div>
  </div>
  <footer><a href="http://www.freepik.com">All Illustrations are Designed by pch.vector / Freepik</a></footer>
</template>

<script>
import DonateCard from '@/components/DonationCard.vue';

export default {
  components: {
    DonateCard,
  },
};
</script>

<style>
.donate
{
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
}
.donate-image
{
    width: 50vw;
    height:90vh;
}
@media screen and (max-width:768px){
    .donate-image
    {
        width: 100vw;
        height: 90vh;
    }
}
.card-area
{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}

</style>
