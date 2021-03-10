class ResistorColorDuo
    BANDS = {
      "black"   => 0,
      "brown"   => 1,
      "red"     => 2,
      "orange"  => 3,
      "yellow"  => 4,
      "green"   => 5,
      "blue"    => 6,
      "violet"  => 7,
      "grey"    => 8,
      "white"   => 9
    }

  def self.value(colors)

    ones = colors.take(2)
    ones.map {|color| BANDS[color]}.join("").to_i

  end
end
