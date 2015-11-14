class Raindrops
  require 'prime'
  
  def self.convert(number)
    factored_array = []

    number.prime_division.map do |factor|
      case
      when factor.include?(3)
        factored_array.push("Pling")
      when factor.include?(5)
        factored_array.push("Plang")
      when factor.include?(7)
        factored_array.push("Plong")
      end
    end
    
    if factored_array.any? == false
      number.to_s
    else
      factored_array.join
    end
  end

end

