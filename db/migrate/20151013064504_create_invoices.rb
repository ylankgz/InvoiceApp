class CreateInvoices < ActiveRecord::Migration
  def change
    create_table :invoices do |t|
      t.decimal :amount, precision: 15, scale: 2, default: 0
      t.string :company
      t.string :contragent
      t.string :currency
      t.date :date

      t.timestamps null: false
    end
  end
end
