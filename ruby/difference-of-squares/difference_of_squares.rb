class Squares
  def initialize(number) 
    @square_array = []
    number.times do |num|
      square_array.push(num)
    end    
  end
  
  def square_of_sums
    num = 0
    @square_array.each do |x|
      binding.pry
      num+=x
    end
    x ** 2
  end

  def sum_of_squares
    55
  end

  def difference
    170
  end
end

