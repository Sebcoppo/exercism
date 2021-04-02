class Darts
  def initialize(x,y)
    @x = x
    @y = y
  end

  def score
    return 10 if distance <= 1
    return 5 if  distance <= 5
    return 1 if distance <= 10
    return 0 if distance > 10
  end

  def distance
    Math.sqrt(@x**2 + @y**2)
  end
end
