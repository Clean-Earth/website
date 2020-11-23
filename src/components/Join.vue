<template>
<div class="join">
    <div class="join-card">
        <h1>Join the Movement</h1>
      <div class="cards">
        <font-awesome-icon :icon="['fab', 'youtube']"/>
        <font-awesome-icon :icon="['fab', 'whatsapp']"/>
        <font-awesome-icon :icon="['fab', 'telegram']"/>
        <font-awesome-icon :icon="['fab', 'github']"/>
      </div>
        <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAANAAfurf8pUMllaNUxTVTROMVo5RVdFRzZOMTk3S1lETi4u"><div class="button">
        Become a Member</div></a>
    </div>
</div>
</template>

<style>
.join
{
    display: flex;
}
.join-card
{
    border:5px solid forestgreen;
    margin: 0.5em;
    flex: 1;
}
.cards
{
    display: flex;
    justify-content: space-between;
    padding: 1em;
    font-size: 3em;
}
.button
{
    background-color:whitesmoke;
    color: forestgreen;
    font-weight: bold;
    border: 1em solid;
    cursor: pointer;
    font-size: 3em;
}
</style>
