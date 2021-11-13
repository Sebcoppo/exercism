class LogLineParser
  def initialize(line)
    @line = line
  end

  def message
    log_message = @line.split(':')
    return log_message[1].strip
  end

  def log_level
    log_message = @line.split(':')
    return log_message[0].downcase.tr('[]', '')
  end

  def reformat

    "#{message} (#{log_level})"
  end
end
