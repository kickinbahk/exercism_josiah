class Complement  
  VERSION = 2

  def self.of_dna(dna_string)

    dna_string.each_char do |x|
      raise ArgumentError, "Not Valid Input" unless ["G", "C", "T", "A"].include? x
    end   
       
    # The complements from DNA(left) to RNA(right)
    # * `G` -> `C`
    # * `C` -> `G`
    # * `T` -> `A`
    # * `A` -> `U`

    dna_string.tr("GCTA", "CGAU")
  end

  def self.of_rna(rna_string)
    
    rna_string.each_char do |x|
      raise ArgumentError, "Not Valid Input" unless ["C", "G", "A", "U"].include? x
    end   

    # The complements from RNA(left) to DNA(right)
    # * `C` -> `G`
    # * `G` -> `C`
    # * `A` -> `T`
    # * `U` -> `A`

    rna_string.tr("CGAU", "GCTA")
  end
end

