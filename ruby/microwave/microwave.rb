class Microwave
  attr_reader :seconds

  def initialize(seconds)
    @seconds = seconds
  end

  def timer
   min, sec = seconds.divmod(100)
    if sec > 59
      min += 1
      sec -= 60
   end

    format('%02d:%02d', min, sec)
  end
end
