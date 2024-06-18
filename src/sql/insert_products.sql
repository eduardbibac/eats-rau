insert into categories (
	id,
	list_position,
	ro_name,
	en_name
) values (
	1,
	1,
	'Mic dejun',
	'Breakfast'
),(
	2,
	2,
	'Prânz',
	'Lunch'
),(
	3,
	3,
	'Cină',
	'Dinner'
),(
	4,
	4,
	'Gustări',
	'Snacks'
),(
	5,
	5,
	'Garnitură',
	'Side Dish'
),(
	6,
	6,
	'Băuturi',
	'Beverages'
),(
	7,
	7,
	'Supă',
	'Soup'
),(
	8,
	8,
	'Vegan',
	'Vegan'
),(
	9,
	9,
	'Porc',
	'Pork'
),(
	10,
	10,
	'Vită',
	'Beef'
),(
	11,
	11,
	'Pui',
	'Chicken'
),(
	12,
	14,
	'Pește',
	'Fish'
),(
	13,
	13,
	'Paste',
	'Pasta'
);


insert into products (
	id,
	ro_product_name,
	en_product_name,
	price,
	image_link
) values (
	1,
	'Cartofi prăjiți',
	'French fries',
	8.99,
	'https://images.unsplash.com/photo-1585109649139-366815a0d713'
),(
	2,
	'Omletă cu legume',
	'Vegetable Omelette',
	12.99,
	'https://images.unsplash.com/photo-1510693206972-df098062cb71'
),(
	3,
	'Pancakes cu sirop de arțar',
	'Pancakes with Maple Syrup',
	15.99,
	'https://images.unsplash.com/photo-1586985288123-2495f577c250'
),(
	4,
	'Sandwich cu pui',
	'Chicken Sandwich',
	18.99,
	'/images/chicken_sandwich.png'
),(
	5,
	'Salată Caesar',
	'Caesar Salad',
	14.99,
	'https://images.unsplash.com/photo-1550304943-4f24f54ddde9'
),(
	6,
	'Burger de vită',
	'Beef Burger',
	22.99,
	'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9'
),(
	7,
	'Paste carbonara',
	'Carbonara Pasta',
	19.99,
	'https://images.unsplash.com/photo-1693820206774-d4a769355142'
),(
	8,
	'Covrigei sărați',
	'Salted Pretzels',
	5.99,
	'https://images.unsplash.com/photo-1658248551412-67e1af833a02'
),(
	9,
	'Nachos cu brânză',
	'Cheese Nachos',
	10.99,
	'https://images.unsplash.com/photo-1571328003963-9742129e3951'
),(
	10,
	'Piure de cartofi',
	'Mashed Potatoes',
	9.99,
	'https://images.unsplash.com/photo-1600984177310-c86c8f8fa9c7'
),(
	11,
	'Legume la grătar',
	'Grilled Vegetables',
	11.99,
	'https://images.unsplash.com/photo-1523813301608-f54a198f6b5f'
),(
	12,
	'Limonadă',
	'Lemonade',
	6.99,
	'https://images.unsplash.com/photo-1583064313642-a7c149480c7e'
),(
	13,
	'Smoothie de fructe',
	'Fruit Smoothie',
	8.99,
	'https://images.unsplash.com/photo-1553177595-4de2bb0842b9'
),(
	14,
	'Burger vegan',
	'Vegan Burger',
	59.99,
	'https://images.unsplash.com/photo-1532768641073-503a250f9754'
),(
	15,
	'Cotlet de porc',
	'Pork Chop',
	25.99,
	'https://images.unsplash.com/photo-1432139555190-58524dae6a55'
),(
	16,
	'Coaste de porc BBQ',
	'BBQ Pork Ribs',
	27.99,
	'https://plus.unsplash.com/premium_photo-1664478272084-532c1bfebd25'
),(
	17,
	'Friptură de vită',
	'Beef Steak',
	29.99,
	'https://images.unsplash.com/photo-1546964124-0cce460f38ef'
),(
	18,
	'Piept de pui la grătar',
	'Grilled Chicken Breast',
	18.99,
	'https://images.unsplash.com/photo-1642689690500-f429a042cad1'
),(
	19,
	'Aripioare de pui picante',
	'Spicy Chicken Wings',
	17.99,
	'https://plus.unsplash.com/premium_photo-1701109142342-dd587224b967'
),(
	20,
	'Somon la cuptor',
	'Baked Salmon',
	26.99,
	'https://images.unsplash.com/photo-1601316585772-ba1e6dae9cfc'
),(
	21,
	'Spaghete bolognese',
	'Spaghetti Bolognese',
	19.99,
	'https://plus.unsplash.com/premium_photo-1664478291780-0c67f5fb15e6'
);

insert into product_categories (
	product_id,
	category_id
) values (
	1,
	4
),(
	1,
	5
),(
	2,
	1
),(
	3,
	1
),(
	4,
	2
),(
	5,
	2
),(
	6,
	2
),(
	7,
	2
),(
	8,
	4
),(
	9,
	4
),(
	10,
	5
),(
	11,
	5
),(
	12,
	6
),(
	13,
	6
),(
	14,
	8
),(
	15,
	2
),(
	16,
	2
),(
	17,
	10
),(
	18,
	11
),(
	19,
	11
),(
	20,
	12
),(
	21,
	13
);

insert into menu (
	id,
	menu_name,
	is_active,
	list_position
) values (
	1,
	'Meniu Standard',
	true,
	1
);

insert into menu_products (
	menu_id,
	product_id,
	menu_quantity,
	current_quantity,
	list_position
) values (
	1,
	1,
	20,
	0,
	1
),(
	1,
	2,
	20,
	0,
	2
),(
	1,
	3,
	20,
	0,
	3
),(
	1,
	4,
	20,
	0,
	4
),(
	1,
	5,
	20,
	0,
	5
),(
	1,
	6,
	20,
	0,
	6
),(
	1,
	7,
	20,
	0,
	7
),(
	1,
	8,
	20,
	0,
	8
),(
	1,
	9,
	20,
	0,
	9
),(
	1,
	10,
	20,
	0,
	10
),(
	1,
	11,
	20,
	0,
	11
),(
	1,
	12,
	20,
	0,
	12
),(
	1,
	13,
	20,
	0,
	13
),(
	1,
	14,
	20,
	0,
	14
),(
	1,
	15,
	20,
	0,
	15
),(
	1,
	16,
	20,
	0,
	16
),(
	1,
	17,
	20,
	0,
	17
),(
	1,
	18,
	20,
	0,
	18
),(
	1,
	19,
	20,
	0,
	19
),(
	1,
	20,
	20,
	0,
	20
),(
	1,
	21,
	20,
	0,
	21
);

-- SET Sequences... this is because we didn't use the seuqences when setting IDs manually, app would use the sequences so it will work proeprly from now
select setval(
	'categories_id_seq',
	(
		select max(id)
		  from categories
	) + 1
);
select setval(
	'products_id_seq',
	(
		select max(id)
		  from products
	) + 1
);
select setval(
	'menu_id_seq',
	(
		select max(id)
		  from menu
	) + 1
);
select setval(
	'menu_products_id_seq',
	(
		select max(id)
		  from menu_products
	) + 1
);