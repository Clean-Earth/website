<template>
  <div class="donate">
      <div>
        <img class="donate-image" alt="Illustration of people donating and caring for the planet"
           src="../assets/donate.jpg">
      </div>
      <div>
          <h1>Help us work for a Better Future</h1>
          <!-- Place for Cards Explaining Impact of Donation -->
      </div>
  </div>
  <footer><a href="http://www.freepik.com">All Illustrations are Designed by pch.vector / Freepik</a></footer>
</template>

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

</style>
