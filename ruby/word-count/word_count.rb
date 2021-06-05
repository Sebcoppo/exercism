class Phrase
  attr_accessor :sentence

  def initialize(sentence)
   @sentence = sentence
  end

  def word_count
    words.tally
  end

  def words
    sentence.downcase.scan(/\b[\w']+\b/)
  end
end
