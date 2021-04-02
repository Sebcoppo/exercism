module Acronym
  def self.abbreviate(string)
    string.scan(/[\w']+/).map{|char| char[0].upcase}.join('')
  end
end

