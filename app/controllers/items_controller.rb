class ItemsController < ApplicationController
  def index
  end
  
  def pay
      Payjp.api_key =  Rails.application.credentials.pay_jp[:secret_access_key]
      charge = Payjp::Charge.create(
      :amount => 3500,
      :card => params['payjp-token'],
      :currency => 'jpy',
  )
  end
end
