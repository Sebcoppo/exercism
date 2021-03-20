class ResistorColorDuo
    BAND = {
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
    colors = colors.take(2)
    Integer colors.each_with_object(""){|color, str| str << "#{BAND[color]}" }


  end
end
