class Squares
  VERSION = 1
  
  def initialize(number)
    @number = number
  end
  
  def square_of_sums
    square_sum = 0
    convert_num_to_array.map do |x|
      square_sum += x
    end
    square_sum**2
  end

  def sum_of_squares
    sum_squares = 0
    convert_num_to_array.map do |x|
      sum_squares += x**2
    end
    sum_squares
  end
  
  def difference
    square_of_sums - sum_of_squares
  end

  private
  def convert_num_to_array
    numbers_array = (1..@number).to_a
  end
end

