class Integer
  VERSION = 1
  
  def to_roman
    numbers_cache = {
      1000 => "M",
      900  => "CM",
      500  => "D",
      400  => "CD",
      100  => "C",
      90   => "XC",
      50   => "L",
      40   => "XL",
      10   => "X",
      9    => "IX", 
      5    => "V",
      4    => "IV",
      1    => "I"      
    }
    
    number = self
    translated_roman_numeral = ""
    
    numbers_cache.each do |real_number, roman_numeral|
      while number >= real_number
        translated_roman_numeral << roman_numeral
        number -= real_number
      end      
    end
    translated_roman_numeral
  end
end
