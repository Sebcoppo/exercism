class StrandLengthError < ArgumentError
  def initialize(message = 'Strands length must be identical')
    super
  end
end

class Hamming
  def self.compute(strand1, strand2)
    new(strand1, strand2).distance
  end

  private

  attr_reader :nucleotides

  def initialize(strand1, strand2)
    raise StrandLengthError unless valid?(strand1, strand2)

    @nucleotides = strand1.chars.zip(strand2.chars)
  end

  def valid?(strand1, strand2)
    strand1.length == strand2.length
  end

  public

  def distance
    nucleotides.count { |n1, n2| n1 != n2 }
  end
end

if $PROGRAM_NAME == __FILE__
  puts Hamming.new('AATG', 'AAA').distance
end
