class BoutiqueInventory
  require 'ostruct'
  attr_reader :items

  def initialize(items)
    @items = items.map { |item| OpenStruct.new(item) }


    # raise "Refac tor this code so that items is an array of openstructs"
  end

  def item_names
    items.map(&:name).sort

    # raise "Refactor the code in item_names"
  end

  def total_stock
    items.map(&:quantity_by_size).map(&:values).sum(&:sum)

    # raise "Refactor the code in total_stock"
  end
end
