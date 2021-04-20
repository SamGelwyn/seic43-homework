Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root :to => 'pages#hello'
  get '/hello' => 'pages#hello'

  get '/eight_ball' => 'eight_ball#form'
  get '/eight_ball/result' => 'eight_ball#result'

  get '/guess' => 'guess#form'
  get '/guess/result' => 'guess#result'

  get '/janken' => 'janken#form'
  get '/janken/result' => 'janken#result'



end
