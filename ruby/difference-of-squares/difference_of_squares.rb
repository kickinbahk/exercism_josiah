class Squares
  VERSION = 1
  
  def initialize(number)
    @number = number
  end
  
  def square_of_sums
    counter = 0
    square_sum = 0
    @number.times do 
      counter += 1
      square_sum += counter
      
    end
    square_sum**2
  end

  def sum_of_squares
    squared_number = 0
    counter = 0
    sum_squares = 0
    @number.times do
      counter += 1
      squared_number = counter**2
      sum_squares += squared_number
    end
    sum_squares
  end
  
  def difference
    square_of_sums - sum_of_squares
  end
end

