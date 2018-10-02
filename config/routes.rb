Rails.application.routes.draw do
  get 'users/myself'
  post '/auth/register'
  post '/auth/authenticate'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
