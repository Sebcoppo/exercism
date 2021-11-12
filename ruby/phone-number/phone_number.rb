class PhoneNumber
  def self.clean(number)
    number.gsub!(/\D/, '')
    regexp = /^1?[2-9]\d{2}[2-9]\d{6}$/
    number.chars.last(10).join if number.match(regexp)
  end
end

