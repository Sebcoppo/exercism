class SimpleCalculator
  class UnsupportedOperation < StandardError
  end

  ALLOWED_OPERATIONS = ['+', '/', '*'].freeze

  def self.calculate(first_operand, second_operand, operation)
    begin
      raise "Division by zero is not allowed." if second_operand == 0 && operation == '/'
      raise ArgumentError unless first_operand.is_a?(Numeric) && second_operand.is_a?(Numeric)
      raise UnsupportedOperation unless ALLOWED_OPERATIONS.include?(operation)

      case operation
      when '+'
        answer = first_operand + second_operand
      when '*'
        answer = first_operand * second_operand
      when '/'
        answer = first_operand / second_operand
      end
    rescue RuntimeError => e
      return e.message
    end

    "#{first_operand} #{operation} #{second_operand} = #{answer}"
  end
end
