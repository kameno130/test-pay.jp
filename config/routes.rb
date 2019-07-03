Rails.application.routes.draw do
  devise_for :users
  resources :cards
  root 'items#index'
  get 'items' => 'items#index'
  post 'items/pay' => 'items#pay'

end
