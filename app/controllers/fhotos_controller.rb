class FhotosController < ApplicationController
  def index
    @fhotos = Fhoto.all
  end

  def show
  end

  def new
    @fhoto = Fhoto.new
  end

  def create
    @fhoto = Fhoto.new params.require(:fhoto).permit(:profile_image_name)
    if @fhoto.save
      redirect_to root_path
    else
      render :new

    end
  end
end
