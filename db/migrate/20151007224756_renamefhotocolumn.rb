class Renamefhotocolumn < ActiveRecord::Migration
  def change
    rename_column :fhotos, :profile_image_id, :profile_image_name
  end
end
