<template>
  <div class="about">
      <img class="abt-image" alt="Illustration of people sorting garbage"
      src="../assets/about_us.jpg">
      <h1>What do we do?</h1>
      <div class="abt-text">
        <p>Green Anchored is a commitment to society and the care and protection of nature.</p>
          <p>Established as a nonprofit entity, it aims to create a world where people
          and nature can bloom in perfect sync and harmony.</p>
          <p>
          We function by collaborating with people at every level around the world to develop
          and deliver innovative solutions that protect communities, wildlife, and their ecosystems;
          </p>
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
.abt-text
{
  border: 0.4em solid forestgreen;
}
.abt-text p
{
 font-size: 1.5em;
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
