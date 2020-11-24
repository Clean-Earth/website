<template>
  <div class="about">
      <img class="abt-image" alt="Illustration of people sorting garbage"
      src="../assets/about_us.jpg">
      <h1>What do we do?</h1>
      <div class="abt-text">
        <p>This section will contain  a comprehensive description of our activities and services</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <h1>Upcoming Events</h1>
      <div class="event-section">
      <EventCard/>
      <EventCard/>
      </div>
      <h1>Past Activities</h1>
      <div class="event-section">
      <EventCard/>
      <EventCard/>
      <EventCard/>
      </div>
  </div>
   <footer><a href="http://www.freepik.com">All Illustrations are Designed by pch.vector / Freepik</a></footer>
</template>

<script>
import EventCard from '@/components/EventCard.vue';

export default {
  components: { EventCard },
};
</script>>

<style>
.abt-image
{
  width: 700px;
  height: 450px;
}
.event-section
{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
@media screen and (max-width:768px)
{
.abt-image
{
  width: 100vw;
}
}
</style>
