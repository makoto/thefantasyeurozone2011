require 'csv'
require 'yaml'
data = YAML.load_file('data.yml')

def grade(sym, data, reverse = false)
  grade = 1
  counter = 1
  sorted = data.sort_by{|a| a[sym].to_f}
  sorted = sorted.reverse if reverse
  sorted.each_with_index{|b,c| 
    grade_name = (sym.to_s + "Grade").to_sym
    b[grade_name] = grade
    counter = counter + 1
    if counter > 6
      grade = grade + 1 
      counter = 1
    end
  }
  data
end

data = grade :isEuroZone, data
data = grade :isOriginalEuroZone, data
data = grade :deficit, data
data = grade :yields, data, true
data = grade :debt, data, true
data = grade :unemployment, data, true
data = grade :gdp, data
puts data.to_yaml
