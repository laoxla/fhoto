class AddProfileImageToFhoto < ActiveRecord::Migration
  def change
    add_column :fhotos, :profile_image_id, :string
  end
end
