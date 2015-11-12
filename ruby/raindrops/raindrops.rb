class Raindrops
  require 'prime'
  
  def self.convert(number)
   
    @number_array = number.prime_division
    factored_array = []

    @number_array.map do |factor|

      case
      when factor.include?(3)
        drop = "Pling"
      when factor.include?(5)
        drop = "Plang"
      when factor.include?(7)
        drop = "Plong"
      end
      factored_array.push(drop)      
    end
    if factored_array.any? == false
      number.to_s
    else
      factored_array.join
    end
  end

end

