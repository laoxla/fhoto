class CreateFhotos < ActiveRecord::Migration
  def change
    create_table :fhotos do |t|
      t.string :image_id

      t.timestamps null: false
    end
  end
end
