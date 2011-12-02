require 'yaml'
require 'csv'
euro = YAML.load_file('data.yml')

gdp = CSV.read('gdp.csv').map{|a| [a[0], a[1], a[51], a[52]]}
merged = euro.map{|e|
  matched = gdp.find{|g| g[0] == e[:name]}
  if matched
    e[:gdp] = matched.compact.last.to_f
  else
    e[:gdp] = 0
  end
  e
}.to_yaml

puts merged