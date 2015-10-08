require "test_helper"

class FhotoTest < ActiveSupport::TestCase
  def fhoto
    @fhoto ||= Fhoto.new
  end

  def test_valid
    assert fhoto.valid?
  end
end
