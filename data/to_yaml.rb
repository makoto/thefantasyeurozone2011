require 'csv'
require 'yaml'
data = CSV.read('./data.csv')

d = data.map do |d|
  name, code, isEuroZone, deficit, yields, debt, unemployment, gdp =  d
  {
    name:name,
    code:code,
    isEuroZone:isEuroZone,
    isOriginalEuroZone:nil,
    deficit:deficit.to_f,
    yields:yields.to_f,
    debt:debt.to_f,
    unemployment:unemployment.to_f,
    gdp:nil
  }
end.to_yaml

puts d