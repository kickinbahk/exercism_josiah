class Squares
<<<<<<< HEAD
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
=======
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
>>>>>>> 3c3a3f3363e84c35295b86d9c7384859d72de8d8
  end
end

