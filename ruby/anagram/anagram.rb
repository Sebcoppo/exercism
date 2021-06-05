
# Write your code for the 'Anagram' exercise in this file. Make the tests in
# `anagram_test.rb` pass.

# To get started with TDD, see the `README.md` file in your
# `ruby/anagram` directory.

class Anagram
  attr_reader :word

  def initialize(word)
    @word = word.downcase.split('')

  end

  def match(anagrams)
    anagrams.select do |el|
      anagram = el.downcase.split('')
      anagram != word && anagram.sort == word.sort
    end
  end
end
