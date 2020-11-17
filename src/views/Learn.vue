<template>
<div class="learn">
    <h1>WHAT YOU CAN DO?</h1>
    <div class="flex-wrapper">
    <div class="learn-img-div">
    <img class="learn-img" alt="Illustration of man carrying garbage" src="../assets/learn.jpg">
    </div>
    <div class="learn-text">
        <div class="cu b">Buy Less</div>
        <div class="cb b">Repair and Reuse</div>
        <div class="bc b">Avoid Plastic</div>
        <div class="sb b">Compost Food Waste </div>
        <div class="bc b">Recycle </div>
        <div class="cu b">Use Electronic Media </div>
        <div class="cb b">Plan your Meals</div>
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
