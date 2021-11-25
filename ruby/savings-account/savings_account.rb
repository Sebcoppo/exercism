module SavingsAccount
  def self.interest_rate(balance)
    # raise 'Please implement the SavingsAccount.interest_rate method'
    case
    when balance < 0
      -3.213
    when balance < 1000
      0.5
    when balance < 5000
      1.621
    else
      2.475
    end
  end

  def self.annual_balance_update(balance)
    # raise 'Please implement the SavingsAccount.annual_balance_update method'
    rate = interest_rate(balance) / 100
    balance * (1 + rate.abs)
  end

  def self.years_before_desired_balance(current_balance, desired_balance)
    # raise 'Please implement the SavingsAccount.years_before_desired_balance method'
    return 0 if current_balance >= desired_balance

    years_before_desired_balance(annual_balance_update(current_balance), desired_balance) + 1
  end
end
