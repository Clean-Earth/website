<template>
  <div id="nav">
     <img class="logo" src="./assets/logo.svg" alt="green anchored logo" @click="navtoHome">
    <ul class="nav-links">
      <li>  <router-link to="/"   @click="navToggle()">Home</router-link></li>
      <li><router-link to="/about" @click="navToggle()">About</router-link></li>
      <li><router-link to="/learn" @click="navToggle()" >Learn</router-link></li>
      <li><router-link to="/donate"  @click="navToggle()">Donate</router-link></li>
    </ul>
    <div class="burger" @click="navToggle()">
      <div class="line1"></div>
      <div class="line2"></div>
      <div class="line3"></div>
    </div>
  </div>
  <router-view/>
</template>
<script>
export default
{
  methods:
  {
    navToggle: () => {
      document.querySelector('.nav-links').classList.toggle('nav-active');
      document.querySelector('.burger').classList.toggle('toggle');
    },
    // This is a workaround since i have no idea how to fix the layout changes when
    // wrapping an img in a link
    // Should fix this for better accesibility
    navtoHome() { return this.$router.push('/'); },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,700;0,800;1,900&display=swap');
#app {
  font-family: 'Poppins',sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: forestgreen;
}
#nav
{
  display: flex;
  justify-content: space-around;
  background-color: forestgreen;
}
#nav a
{
text-decoration: none;
color: whitesmoke;
font-size: 32px;
}
.logo
{
  height: 6em;
  width:20em;
}
#nav ul{
  list-style-type: none;
}
.nav-links{
  display: flex;
  justify-content: space-around;
  width: 50%;
  font-weight: bold;
}
.burger
{
  display: none;
}
.burger div
{
  background-color: whitesmoke;
  width:25px;
  height:3px;
  margin: 5px;
}
.toggle .line1
{
  transform: rotate(-45deg) translate(-5px,6px);
}
.toggle .line2
{
opacity: 0;
}
.toggle .line3
{
 transform: rotate(45deg) translate(-5px,-6px);
}
footer a,footer a:visited,footer a:active
{
  color: forestgreen;
  text-decoration: none;
}
div a,div a:visited,div a:active
{
  color: forestgreen;
  text-decoration: none;
}
@media screen and (max-width:768px){
#app
{
overflow-x: hidden;
position: relative;
}
.nav-links
{
  display: flex;
  flex-direction: column;
  height: 92vh;
  top:8vh;
  right:0px;
  width:50%;
  background-color: forestgreen;
  align-items: center;
  position: absolute;
  transform: translateX(100%);
  transition: transform 0.5s ease-in;
}
.nav-active
{
  transform: translateX(0%);
}
.burger
{
  display: block;
  margin: 2em;
}
}
</style>
