Rails.application.routes.draw do
  resources :invoices do
    collection do
      match 'search' => 'invoices#search', via: [:get, :post], as: :search
    end
  end

  root 'invoices#index'
end
