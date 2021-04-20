# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Seamount.destroy_all

Seamount.create :name => 'Standard Seamount', :rise => 727, :sea_floor => 4770
Seamount.create :name => 'Venus', :rise => 283, :sea_floor => 0
Seamount.create :name => 'Mars', :rise => 511, :sea_floor => 6

puts "#{ Seamount.count } seamounts created."