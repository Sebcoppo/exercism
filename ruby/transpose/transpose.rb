
# Write your code for the 'Transpose' exercise in this file. Make the tests in
# `transpose_test.rb` pass.

# To get started with TDD, see the `README.md` file in your
# `ruby/transpose` directory.

class Transpose
  def self.transpose(input)
    rows = input.split("\n")
    max_size = rows.map(&:size).max
    rows
      .map {|line| line.ljust(max_size, '!').chars}
      .transpose
      .map(&:join)
      .join("\n")
      .gsub(/!*$/, '')
      .gsub('!', ' ')
  end
end
