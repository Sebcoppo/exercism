class Attendee
  def initialize(height)
    @height = height
  end

  def issue_pass!(pass_id)
    @pass_id = pass_id
  end

  def revoke_pass!
    @pass_id = nil
  end

  # Do not edit above methods, add your own methods below.

  # rubocop:disable Naming/PredicateName
  def has_pass?
    return true if @pass_id
  end
  # rubocop:enable Naming/PredicateName

  def fits_ride?(ride_minimum_height)
    return true if ride_minimum_height <= @height
  end

  def allowed_to_ride?(ride_minimum_height)
    return true if fits_ride?(ride_minimum_height) == true && has_pass? == true
  end
end
