$(document).ready ->
  paper = Raphael(10, 10, 320, 200)  

  radar = new Radar(paper, [
    {score:5, label:'2.4%'},
    {score:4, label:'2.3%'},
    {score:3, label:'2.2%'},
    {score:2, label:'2.1%'},
    {score:1, label:'2.0%'}
    ])
  radar.draw()
