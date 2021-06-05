=begin
Write your code for the 'Triangle' exercise in this file. Make the tests in
`triangle_test.rb` pass.

To get started with TDD, see the `README.md` file in your
`ruby/triangle` directory.
=end
class Triangle
  attr_accessor :side_lengths

  def initialize(side_lengths)
    @side_lengths = side_lengths
  end

  def triangle?
    side_lengths.max > 0 && triangle_inequality?
  end

  def equilateral?
    side_lengths.uniq.count == 1 && triangle?
  end

  def isosceles?
    side_lengths.uniq.count < 3 && triangle?
  end

  def scalene?
    side_lengths.uniq.count == 3 && triangle?
  end

  private

  def triangle?
    side_lengths.max.positive? && triangle_inequality?
  end

  def triangle_inequality?
    side_lengths.permutation(3).all? { |a, b, c| a <= b + c }
  end
end
