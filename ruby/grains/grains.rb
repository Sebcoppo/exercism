class Grains

  def self.square(n)
    throw ArgumentError if n <= 0 || n > 64
    2**(n-1)
  end

  def self.total
     (1..64).map {|n| Grains.square(n)}.sum
  end
end
