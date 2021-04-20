Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root :to => 'seamounts#index'
  get '/seamounts' => 'seamounts#index'
  get '/seamounts/new' => 'seamounts#new', :as => :new_seamount
  post '/seamounts' => 'seamounts#create'
  get '/seamounts/:id' => 'seamounts#show', :as => :seamount
  get '/seamounts/:id/edit' => 'seamounts#edit', :as => :edit_seamount
  post '/seamounts/:id' => 'seamounts#update'
  delete '/seamounts/:id' => 'seamounts#destroy'

end
