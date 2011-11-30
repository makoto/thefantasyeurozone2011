$(document).ready ->
  new Radar(Raphael('aggregates', 300, 300)  , [
    {score:4, label:'2.4%'},
    {score:2, label:'2.3%'},
    {score:5, label:'2.2%'},
    {score:4, label:'2.1%'},
    {score:5, label:'2.0%'}
  ]).draw()

  for i in ["BE","BG","CZ","DK","DE","EE","IE","GR","ES","FR","IT","CY","LV","LT","LU","HU","MT","NL","AT","PL","PT","RO","SI","SK","FI","SE","GB","IS","NO"]
    console.log(i)
    new Radar(Raphael('france', 90, 90)  , [
      {score:5, label:'2.4%'},
      {score:5, label:'2.3%'},
      {score:5, label:'2.2%'},
      {score:4, label:'2.1%'},
      {score:5, label:'2.0%'}
    ]).draw()

