class Hamming
  VERSION = 1

  def self.compute(sample_one, sample_two)
    raise ArgumentError,
          "Please enter strings of equal length" unless sample_one.size == sample_two.size
    
    sample_one.size.times.count { |x| sample_one[x] != sample_two[x] }
  end

end


