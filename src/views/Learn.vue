<template>
<div class="learn">
    <h1>WHAT YOU CAN DO</h1>
    <div class="flex-wrapper">
    <div class="learn-img-div">
    <img class="learn-img" alt="Illustration of man carrying garbage" src="../assets/learn.jpg">
    </div>
    <!-- TODO: Pull this from data from a json file and use v-for to display -->
    <div class="learn-text">
        <div class="cu b">Buy Less<span class="hidden">Description</span></div>
        <div class="cb b">Repair and Reuse<span class="hidden">Description</span></div>
        <div class="bc b">Avoid Plastic<span class="hidden">Description</span></div>
        <div class="sb b">Compost Food Waste<span class="hidden">Description</span> </div>
        <div class="bc b">Recycle <span class="hidden">Description</span></div>
        <div class="cu b">Use Electronic Media<span class="hidden">Description</span> </div>
        <div class="cb b">Plan your Meals<span class="hidden">Description</span></div>
        <div class="sb b">Tell your Politicians<span class="hidden">Description</span></div>
    </div>
    </div>
 </div>
</template>

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
    width:450px;
    height: 450px;
}
.learn-text
{
    display: flex;
    flex: 0.7;
    justify-content: space-around;
    height: max-content;
    flex-wrap: wrap;
}
.b
{
margin: 1em;
background-color:forestgreen;
color:whitesmoke;
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
    display: block;
}
@media screen and (max-width: 768px){
.flex-wrapper
{
    flex-direction: column;
}
.learn-img
{

width:100vw;
height:100px;
}
}
</style>
