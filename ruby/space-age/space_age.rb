=begin
Write your code for the 'Space Age' exercise in this file. Make the tests in
`space_age_test.rb` pass.

To get started with TDD, see the `README.md` file in your
`ruby/space-age` directory.
=end
class SpaceAge
  EARTH_YEAR = 31_557_600

  ORBITAL_PERIOD = {
    earth: 1.0,
    mercury: 0.2408467,
    venus: 0.61519726,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132
  }

  def initialize(seconds)
    @seconds = seconds
  end

  ORBITAL_PERIOD.each { |planet, planet_orbital_period|
    define_method("on_#{planet}") do
      @seconds / (EARTH_YEAR * planet_orbital_period).to_f
    end
  }
end
