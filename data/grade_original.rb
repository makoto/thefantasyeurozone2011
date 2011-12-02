require 'csv'
data = CSV.read('data.csv')

def grade(pos, data, reverse = false)
  grade = 1
  counter = 1
  sorted = data.sort_by{|a| a[pos].to_f}
  sorted = sorted.reverse if reverse
  sorted.each_with_index{|b,c| 
    b.push grade
    counter = counter + 1
    if counter > 6
      grade = grade + 1 
      counter = 1
    end
  }
  data
end

data = grade 3, data
data = grade 4, data, true
data = grade 5, data, true
data = grade 6, data, true
data = grade 7, data
