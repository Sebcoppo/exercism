
# Write your code for the 'Sum Of Multiples' exercise in this file. Make the tests in
# `sum_of_multiples_test.rb` pass.

# To get started with TDD, see the `README.md` file in your
# `ruby/sum-of-multiples` directory.


class SumOfMultiples
  attr_reader :numbers
  attr_accessor :result

  def initialize(*numbers)
    @numbers = numbers
    @result = []
  end

  def to(limit)
    (1...limit).each { |number| multiple?(number) }
    result.uniq.sum
  end

  def multiple?(num)
    numbers.each { |number| result << num if (num % number).zero? }
  end
end
