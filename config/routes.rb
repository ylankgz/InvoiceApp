Rails.application.routes.draw do
  resources :invoices, except: [:edit, :update, :destroy] do
    collection do
      match 'search' => 'invoices#search', via: [:get, :post], as: :search
    end
  end

  root 'invoices#index'
end
