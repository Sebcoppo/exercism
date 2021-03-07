=begin
Write your code for the 'Resistor Color Duo' exercise in this file. Make the tests in
`resistor_color_duo_test.rb` pass.

To get started with TDD, see the `README.md` file in your
`ruby/resistor-color-duo` directory.
=end
class ResistorColorDuo
    @COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"]

  def self.value(color_duo)

    [@COLORS.index(color_duo[0]), @COLORS.index(color_duo[1])].join.to_i

  end

end
