class Country

  constructor: (array) ->
    [@name, @code, @isEuroZone, @deficit, @debt, @yield, @unemployment, @gdp] = array 
      
window.Country = Country