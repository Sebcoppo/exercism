
# Write your code for the 'Difference Of Squares' exercise in this file. Make the tests in
# `difference_of_squares_test.rb` pass.

# To get started with TDD, see the `README.md` file in your
# `ruby/difference-of-squares` directory.


class Squares
  attr_reader :number

  def initialize(number)
    @number = number
  end

  def sum_of_squares
    (1..number).to_a.map { |x| x ** 2 }.reduce(:+)
  end

  def square_of_sum
    (1..number).to_a.reduce(:+)**2
  end

  def difference
    square_of_sum - sum_of_squares
  end
end
