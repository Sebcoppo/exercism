=begin
Write your code for the 'Pangram' exercise in this file. Make the tests in
`pangram_test.rb` pass.

To get started with TDD, see the `README.md` file in your
`ruby/pangram` directory.
=end
module Pangram
  def self.pangram?(sentence)
    ('a'..'z').all? {|letter| sentence.downcase.include?(letter)}
  end

end
