require 'date'

class Meetup

  DAYS_OF_WEEK = {
    sunday: 0,
    monday: 1,
    tuesday: 2,
    wednesday: 3,
    thursday: 4,
    friday: 5,
    saturday: 6
  }.freeze

  START_DAYS = {
    first: 1,
    second: 8,
    teenth: 13,
    third: 15,
    fourth: 22
  }.freeze

  def initialize(month, year)
    @month = month
    @year = year
  end

  attr_reader :month, :year

  def day(day_of_week, occurance)
    date = Date.new(year, month, start_day(occurance))

    6.times do
      break if date.wday == DAYS_OF_WEEK[day_of_week]

      date = date.next_day
    end

    date
  end

  private

  def last_start_day
    Date.new(year, month, 1).next_month - 7
  end

  def start_day(occurance)
    return last_start_day.mday if occurance == :last

    START_DAYS[occurance]
  end
end
