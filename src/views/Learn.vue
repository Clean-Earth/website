<template>
<div class="learn">
    <h1>WHAT YOU CAN DO</h1>
    <div class="flex-wrapper">
    <div class="learn-img-div">
    <img class="learn-img" alt="Illustration of man carrying garbage" src="../assets/learn.jpg">
    </div>
    <div class="learn-text">
    <div v-for="item in data" :key="item.title" :class="item.class+' b'">{{item.title}}
        <span class="hidden">{{item.desc}}</span></div>
    </div>
    </div>
 </div>
  <footer><a href="http://www.freepik.com">All Illustrations are Designed by pch.vector / Freepik</a></footer>
</template>

<script>
import learndata from '../data/data';

export default {
  data() {
    return { data: learndata.learndata };
  },
};
</script>>

<style>
.flex-wrapper{
    display: flex;
}
.learn-img-div
{
    display: flex;
    flex: 0.3;
}
.learn-img
{
    width:100%;
    height: 450px;
}
.learn-text
{
    display: flex;
    flex: 0.7;
    justify-content: space-around;
    height: max-content;
    align-items: center;
    flex-wrap: wrap;
}
.b
{
margin:0.5em;
background-color:forestgreen;
color:whitesmoke;
box-sizing: border-box;
width: 25%;
}
.hidden
{
    display: none;
}
.b:hover {
    border-radius: 0%;
}
.b:hover .hidden
{
    display: flex;
}
@media screen and (max-width: 768px){
.flex-wrapper
{
    flex-direction: column;
}
.b
{
    width: max-content;
}
.learn-img
{

width:100vw;
height:300px;
}
}
</style>
