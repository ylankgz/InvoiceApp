class Invoice < ActiveRecord::Base
  def self.delete_old
  	@old_invoices = Invoice.where('date < ?', 30.days.ago)
  	@old_invoices.delete_all
  end
end
