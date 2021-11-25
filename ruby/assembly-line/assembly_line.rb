class AssemblyLine
  def initialize(speed)
    @speed = speed
  end

  def production_rate_per_hour
    # raise 'Please implement the AssemblyLine#production_rate_per_hour method'
    production_per_hour = @speed * 221
    success_rate = case @speed
    when 1..4
      1
    when 5..8
      0.9
    when 9
      0.8
    else
      0.77
    end
    production_per_hour * success_rate
  end

  def working_items_per_minute
    # raise 'Please implement the AssemblyLine#working_items_per_minute method'
    (production_rate_per_hour / 60).to_i
  end
end
