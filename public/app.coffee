$(document).ready ->
  paper = Raphael(10, 10, 320, 200)  

  radar = new Radar(paper, [5,4,3,2,1])
  radar.draw()
