# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Record.create!(
  title: "Low Edges", 
  artist: "Richard Hawley", 
  cover_url: "http://cdn.krrb.com/post_images/photos/000/000/361/Richard_Hawley_Lowedges1_large.jpg", 
  spotify_uri: "spotify:album:6O2x7QN3BqUeXBaH8Fot49"
)

Record.create!(
  title: "The Heart Of Sunday Night", 
  artist: "Tom Waits", 
  cover_url: "http://ijustreadaboutthat.files.wordpress.com/2011/09/75112.jpg", 
  spotify_uri: "spotify:album:7MLzdbFViVmpQdnNmxQXoE"
)

Record.create!(
  title: "OH (Ohio)", 
  artist: "Lambchop", 
  cover_url: "http://expressmilwaukee.com/imgs/hed/art5489widea.jpg", 
  spotify_uri: "spotify:album:4y9ebrmAx1TMyUlyCVJJL6"
)

# Record.create!(
#   title: "", 
#   artist: "", 
#   cover_url: "", 
#   spotify_uri: ""
# )
