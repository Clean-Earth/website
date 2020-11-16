<template>
 <div class="main">
   <div class="text-content">
    <h1 class="main-text">Don't Trash The World<br><span>RE{{textContent}}</span></h1>
  </div>
  <div class="main-image">
    //Todo:Attribute this without losing visual appeal link->https://www.freepik.com/vectors/people'>People vector created by pch.vector - www.freepik.com
     <img alt="Illustration of woman and kid sorting garbage" src="../assets/main.jpg">
  </div>
 </div>
</template>

<script>
export default {
  name: 'Main',
  data() {
    return {
      words: ['USE', 'DUCE', 'CYCLE'],
      wordIndex: 0,
      charIndex: 0,
      textContent: '',
    };
  },
  methods:
  {
    typing() {
      if (this.wordIndex === this.words.length) this.wordIndex = 0;
      // eslint-disable-next-line no-plusplus
      const currentText = this.words[this.wordIndex].slice(0, ++this.charIndex);
      this.textContent = currentText;
      if (currentText.length === this.words[this.wordIndex].length) {
        this.wordIndex += 1;
        this.charIndex = 0;
      }
      setTimeout(this.typing, 500);
    },
  },
  mounted() { this.typing(); },
};
</script>

<style>
.main
{
  display: flex;
}
.text-content
{
  display: flex;
  flex: 0.6;
}
.main-image
{
  display: flex;
  flex: 0.4;
}
.main-image img
{
  width:650px;
  height: 650px;

}
.main-text
{
  font-size: 80px;
  color:forestgreen;
}
@media screen and (max-width:768px)
{
.main
 {
   flex-wrap: wrap;
 }
.main-image
  {
    align-items: center;
  }
  .main-image img
  {
    margin: 1em;
    width:450px;
    height: 450px;
  }
.text-content
{
  flex: 1;
}
}
</style>
