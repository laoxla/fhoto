class Api::FhotosController < ApplicationController
  def index
    @fhotos = Fhoto.all
    render json: {fhotosFound: @fhotos}
  end
end
