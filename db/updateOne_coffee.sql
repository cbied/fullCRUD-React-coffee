UPDATE coffee SET
name = $2, 
price = $3,
image_url = $4
WHERE coffee_id = $1;