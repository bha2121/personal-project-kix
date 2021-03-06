create table shoes (
  shoe_id SERIAL PRIMARY KEY,
  brand varchar(80),
  model varchar(80),
  colorway varchar(80),
  size numeric (2,1),
  colorscheme varchar(80),
  sellingprice int,
  releasedate varchar(80),
  quantity int,
  img text
);

INSERT INTO shoes (
    brand,
    model,
    colorway,
    size,
    colorscheme,
    sellingprice,
    releaseDate,
    quantity,
    img
    
) VALUES (
    'Nike',
    'Air Max 97',
    'Off-White',
    8.5,
    'WHITE/CONE-ICE BLUE',
    1200,
    '11/01/2017',
    1,
    'https://stockx.imgix.net/Nike-Air-Max-97-Off-White-Product.jpg?fit=fill&bg=FFFFFF&w=358&h=255&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1545234240'
),
(
    'Jordan',
    '1 Retro High',
    'Bred Toe',
    8.5,
    'GYM RED/BLACK-SUMMIT WHITE',
    600,
    '02/24/2018',
    1,
    'https://stockx.imgix.net/Air-Jordan-1-Retro-High-Bred-Toe-Product.jpg?fit=fill&bg=FFFFFF&w=358&h=255&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1538080256'
),
(
    'Adidas',
    'Yeezy Boost 700',
    'Wave Runner',
    9,
    'SOLID GREY/CHALK WHITE/CORE BLACK',
    550,
    '11/01/2017',
    1,
    'https://stockx.imgix.net/Adidas-Yeezy-Wave-Runner-700-Solid-Grey-Product.jpg?fit=fill&bg=FFFFFF&w=358&h=255&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1538080256'
),
(
    'Nike',
    'Air Presto',
    'Off-White Black',
    9,
    'BLACK/WHITE-CON',
    900,
    '07/27/2018',
    1,
    'https://stockx.imgix.net/Nike-Air-Presto-Off-White-Black-2018-Product.jpg?fit=fill&bg=FFFFFF&w=358&h=255&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1538080256'
),
(
    'Nike',
    'Vapormax',
    'Off-White White',
    9,
    'WHITE/TOTAL ORANGE-BLACK',
    800,
    '04/14/2018',
    1,
    'https://stockx.imgix.net/Nike-Air-VaporMax-Off-White-2018-1.jpg?fit=fill&bg=FFFFFF&w=358&h=255&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1538080256'
),
(
    'Adidas',
    'Yeezy Boost 700',
    'Inertia',
    8.5,
    'GREY/GREY/INERTIA',
    350,
    '03/09/2019',
    1,
    'https://stockx.imgix.net/adidas-Yeezy-Boost-700-Inertia-Product.jpg?fit=fill&bg=FFFFFF&w=358&h=255&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1551991286'
),
(
    'Jordan',
    '1 Retro High',
    'Pine Green',
    9,
    'PINE GREEN/SAIL-BLACK',
    350,
    '09/22/2018',
    1,
    'https://stockx.imgix.net/Air-Jordan-1-Retro-High-Pine-Green-Product.jpg?fit=fill&bg=FFFFFF&w=358&h=255&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1538777452'
),
(
    'Jordan',
    'IV Retro',
    'Travis Scott-Cactus Jack',
    9,
    'PINE GREEN/SAIL-BLACK',
    650,
    '06/09/2018',
    2,
    'https://stockx.imgix.net/Air-Jordan-4-Retro-Travis-Scott-Cactus-Jack-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&trim=color&updated_at=1538080256&w=1600'
),
(
    'Nike',
    'AF1 Low',
    'Off-White Black',
    9,
    'WHITE/TOTAL ORANGE-BLACK',
    850,
    '12/19/2018',
    1,
    'https://stockx.imgix.net/Nike-Air-Force-1-Low-Off-White-Black-White-Product.jpg?fit=fill&bg=FFFFFF&w=358&h=255&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1546755764'
),
(
    'Adidas',
    'Yeezy Boost 350 V2',
    'Zebra',
    5.5,
    'WHITE/CORE BLACK/RED',
    550,
    '02/25/2019',
    1,
    'https://stockx.imgix.net/Adidas-Yeezy-Boost-350-V2-Zebra-Product.jpg?fit=fill&bg=FFFFFF&w=358&h=255&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1538080256'
),
(
    'Adidas',
    'Yeezy Boost 350 V2',
    'Static Reflective',
    8,
    'STATIC/STATIC/STATIC',
    800,
    '12/26/2019',
    1,
    'https://stockx.imgix.net/adidas-Yeezy-Boost-350-V2-Static-Reflective-Product.jpg?fit=fill&bg=FFFFFF&w=358&h=255&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1545956613'
),
(
    'Adidas',
    'Yeezy Boost 350 V2',
    'Static Reflective',
    8.5,
    'STATIC/STATIC/STATIC',
    770,
    '12/26/2019',
    4,
    'https://stockx.imgix.net/adidas-Yeezy-Boost-350-V2-Static-Reflective-Product.jpg?fit=fill&bg=FFFFFF&w=358&h=255&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1545956613'
),
(
    'Adidas',
    'Yeezy Boost 350 V2',
    'Static Reflective',
    9,
    'STATIC/STATIC/STATIC',
    750,
    '12/26/2019',
    5,
    'https://stockx.imgix.net/adidas-Yeezy-Boost-350-V2-Static-Reflective-Product.jpg?fit=fill&bg=FFFFFF&w=358&h=255&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1545956613'
),
(
    'Adidas',
    'Yeezy Boost 350 V2',
    'Static Reflective',
    9.5,
    'STATIC/STATIC/STATIC',
    750,
    '12/26/2019',
    1,
    'https://stockx.imgix.net/adidas-Yeezy-Boost-350-V2-Static-Reflective-Product.jpg?fit=fill&bg=FFFFFF&w=358&h=255&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1545956613'
),
(
    'Jordan',
    '1 Retro High',
    'ROTY',
    9,
    'GOLD HARVEST/BLACK-SAIL',
    275,
    '11/17/2018',
    1,
    'https://stockx.imgix.net/Air-Jordan-1-Retro-High-Rookie-Of-The-Year-Product.jpg?fit=fill&bg=FFFFFF&w=358&h=255&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1540493582'
),
-- (
--     'Adidas',
--     'Yeezy Boost 350 V2',
--     'Static Reflective',
--     10,
--     'STATIC/STATIC/STATIC',
--     750,
--     '12/26/2019',
--     1,
--     'https://stockx.imgix.net/adidas-Yeezy-Boost-350-V2-Static-Reflective-Product.jpg?fit=fill&bg=FFFFFF&w=358&h=255&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1545956613'
-- ),
(
    'Adidas',
    'Yeezy Boost 350 V2',
    'Sesame',
    9.5,
    'SESAME/SESAME/SESAME',
    320,
    '11/23/2018',
    1,
    'https://stockx.imgix.net/Adidas-Yeezy-Boost-350-V2-Sesame-Thumb.jpg?fit=fill&bg=FFFFFF&w=358&h=255&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1541007855'
),
(
    'Adidas',
    'Yeezy Boost 350 V2',
    'Sesame',
    5.5,
    'SESAME/SESAME/SESAME',
    400,
    '11/23/2018',
    1,
    'https://stockx.imgix.net/Adidas-Yeezy-Boost-350-V2-Sesame-Thumb.jpg?fit=fill&bg=FFFFFF&w=358&h=255&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1541007855'
),
(
    'Adidas',
    'Yeezy Boost 350 V2',
    'Frozen Yellow',
    9,
    'SEMI FROZEN YELLOW/RAW STEEL/RED',
    280,
    '11/18/2017',
    1,
    'https://stockx.imgix.net/Adidas-Yeezy-Boost-350-V2-Semi-Frozen-Yellow-Product.jpg?fit=fill&bg=FFFFFF&w=358&h=255&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1538080256'
),
(
    'Adidas',
    'Y-3 Runner 4D II',
    'Black',
    9,
    'BLACK/BLACK/BLACK',
    930,
    '09/07/2018',
    1,
    'https://stockx.imgix.net/adidas-Y-3-Runner-4D-II-Black.png?fit=fill&bg=FFFFFF&w=358&h=255&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1538080256'
),
(
    'Adidas',
    'Alphaedge 4D',
    'White',
    9,
    'FOOTWEAR WHITE/GREY 2/CORE BLACK',
    300,
    '11/17/2018',
    1,
    'https://stockx.imgix.net/adidas-Alphaedge-4D-White-Product.jpg?fit=fill&bg=FFFFFF&w=358&h=255&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1543950666'
),
(
    'Adidas',
    'Ultra Boost 1.0',
    'OG (2018)',
    9.5,
    'CORE BLACK/CORE BLACK/GOLD METALLIC',
    180,
    '12/01/2018',
    1,
    'https://stockx.imgix.net/adidas-Ultra-Boost-OG-2018-Product.jpg?fit=fill&bg=FFFFFF&w=358&h=255&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1544657277'
),
(
    'Adidas',
    'Ultra Boost 1.0',
    'Solar Red',
    10,
    'SOLAR RED/BLACK/WHITE',
    400,
    '03/15/2015',
    1,
    'https://stockx.imgix.net/Adidas-Ultra-Boost-Solar-Red.jpg?fit=fill&bg=FFFFFF&w=358&h=255&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1538080256'
),
(
    'Adidas',
    'Ultra Boost 4.0',
    'Bape Camo',
    9.5,
    'BLACK/GREEN/YELLOW',
    300,
    '02/02/2019',
    3,
    'https://stockx.imgix.net/adidas-Ultra-Boost-4-Bape-Camo-Product.jpg?fit=fill&bg=FFFFFF&w=358&h=255&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1549047492'
),
(
    'Adidas',
    'Ultra Boost 4.0',
    'Bape Camo',
    5.5,
    'BLACK/GREEN/YELLOW',
    300,
    '02/02/2019',
    1,
    'https://stockx.imgix.net/adidas-Ultra-Boost-4-Bape-Camo-Product.jpg?fit=fill&bg=FFFFFF&w=358&h=255&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1549047492'
),
(
    'Adidas',
    'Ultra Boost 4.0',
    'Bape Camo',
    5,
    'BLACK/GREEN/YELLOW',
    300,
    '02/02/2019',
    1,
    'https://stockx.imgix.net/adidas-Ultra-Boost-4-Bape-Camo-Product.jpg?fit=fill&bg=FFFFFF&w=358&h=255&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1549047492'
),
(
    'Adidas',
    'Yeezy 500',
    'Blush',
    9.5,
    'BLUSH/BLUSH/BLUSH',
    440,
    '02/16/2018',
    1,
    'https://stockx.imgix.net/Adidas-Yeezy-500-Blush-Product.jpg?fit=fill&bg=FFFFFF&w=358&h=255&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1538080256'
),
(
    'Jordan',
    '1 Retro High',
    'Blue Chill',
    9,
    'OBSIDIAN/BLUE CHILL-WHITE',
    300,
    '02/14/2019',
    1,
   'https://stockx.imgix.net/Air-Jordan-1-Retro-High-UNC-Patent-W-Product.jpg?fit=fill&bg=FFFFFF&w=358&h=255&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1547848301'
),
(
    'Adidas',
    'Yeezy Boost 350 V2',
    'Clay',
    4.5,
    'CLAY/CLAY/CLAY',
    380,
    '03/30/2019',
    1,
    'https://stockx.imgix.net/adidas-Yeezy-Boost-350-V2-Clay-Product.jpg?fit=fill&bg=FFFFFF&w=358&h=255&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1551987026'
),
(
    'Adidas',
    'Yeezy Boost 350 V2',
    'Clay',
    5,
    'CLAY/CLAY/CLAY',
    410,
    '03/30/2019',
    1,
    'https://stockx.imgix.net/adidas-Yeezy-Boost-350-V2-Clay-Product.jpg?fit=fill&bg=FFFFFF&w=358&h=255&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1551987026'
),
(
    'Adidas',
    'Yeezy Boost 350 V2',
    'Clay',
    5.5,
    'CLAY/CLAY/CLAY',
    440,
    '03/30/2019',
    1,
    'https://stockx.imgix.net/adidas-Yeezy-Boost-350-V2-Clay-Product.jpg?fit=fill&bg=FFFFFF&w=358&h=255&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1551987026'
),
(
    'Adidas',
    'Yeezy Boost 350 V2',
    'Clay',
    6,
    'CLAY/CLAY/CLAY',
    430,
    '03/30/2019',
    2,
    'https://stockx.imgix.net/adidas-Yeezy-Boost-350-V2-Clay-Product.jpg?fit=fill&bg=FFFFFF&w=358&h=255&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1551987026'
),
(
    'Adidas',
    'Yeezy Boost 350 V2',
    'Clay',
    9,
    'CLAY/CLAY/CLAY',
    360,
    '03/30/2019',
    1,
    'https://stockx.imgix.net/adidas-Yeezy-Boost-350-V2-Clay-Product.jpg?fit=fill&bg=FFFFFF&w=358&h=255&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1551987026'
),
(
    'Adidas',
    'Yeezy Boost 350 V2',
    'Clay',
    11,
    'CLAY/CLAY/CLAY',
    360,
    '03/30/2019',
    2,
    'https://stockx.imgix.net/adidas-Yeezy-Boost-350-V2-Clay-Product.jpg?fit=fill&bg=FFFFFF&w=358&h=255&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1551987026'
),
(
    'Nike',
    'Air Max 97',
    'Off-White',
    9,
    'WHITE/CONE-ICE BLUE',
    1300,
    '11/01/2017',
    1,
    'https://stockx.imgix.net/Nike-Air-Max-97-Off-White-Product.jpg?fit=fill&bg=FFFFFF&w=358&h=255&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1545234240'
),

(
    'Jordan',
    '1 Retro High',
    'Spider-Man Origin (GS)',
    7,
    'GYM RED/BLACK-WHITE-PHOTO BLUE',
    230,
    '02/14/2019',
    1,
   'https://stockx.imgix.net/Air-Jordan-1-Retro-High-Chicago-Crystal-GS-Product.jpg?fit=fill&bg=FFFFFF&w=358&h=255&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1546754307'
),
(
    'Adidas',
    'Yeezy 500',
    'Salt',
    9,
    'SALT/SALT/SALT',
    300,
    '11/30/2018',
    2,
    'https://stockx.imgix.net/adidas-Yeezy-500-Salt-Product.jpg?fit=fill&bg=FFFFFF&w=358&h=255&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1544024798'
),
(
    'Adidas',
    'Yeezy 500',
    'Salt',
    4,
    'SALT/SALT/SALT',
    540,
    '11/30/2018',
    1,
    'https://stockx.imgix.net/adidas-Yeezy-500-Salt-Product.jpg?fit=fill&bg=FFFFFF&w=358&h=255&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1544024798'
),
(
    'Adidas',
    'Yeezy 500',
    'Salt',
    6,
    'SALT/SALT/SALT',
    500,
    '11/30/2018',
    1,
    'https://stockx.imgix.net/adidas-Yeezy-500-Salt-Product.jpg?fit=fill&bg=FFFFFF&w=358&h=255&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1544024798'
),
(
    'Jordan',
    '1 Retro High',
    'Turbo Green',
    8,
    'TURBO GREEN/SAIL-WHITE-LIGHT',
    270,
    '02/15/2019',
    1,
   'https://stockx.imgix.net/Air-Jordan-1-Retro-High-Turbo-Green-Product.jpg?fit=fill&bg=FFFFFF&w=358&h=255&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1549055395'
),
(
    'Adidas',
    'Yeezy Boost 700',
    'Mauve',
    9,
    'MAUVE/MAUVE/MAUVE',
    310,
    '10/27/2018',
    1,
    'https://stockx.imgix.net/Adidas-Yeezy-700-Mauve-Product.jpg?fit=fill&bg=FFFFFF&w=358&h=255&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1539982972'
),
(
    'Adidas',
    'Yeezy Boost 700',
    'Mauve',
    6,
    'MAUVE/MAUVE/MAUVE',
    370,
    '10/27/2018',
    1,
    'https://stockx.imgix.net/Adidas-Yeezy-700-Mauve-Product.jpg?fit=fill&bg=FFFFFF&w=358&h=255&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1539982972'
),
(
    'Adidas',
    'Yeezy Boost 700',
    'Mauve',
    6,
    'MAUVE/MAUVE/MAUVE',
    360,
    '10/27/2018',
    2,
    'https://stockx.imgix.net/Adidas-Yeezy-700-Mauve-Product.jpg?fit=fill&bg=FFFFFF&w=358&h=255&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1539982972'
),
(
    'Adidas',
    'Yeezy 500',
    'Utility Black',
    5.5,
    'UTILITY BLACK',
    550,
    '07/07/2018',
    3,
    'https://stockx.imgix.net/Adidas-Yeezy-500-Utility-Black-Product.jpg?fit=fill&bg=FFFFFF&w=358&h=255&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1538080256'
),
(
    'Jordan',
    'IV Retro',
    'Travis Scott-Cactus Jack',
    8,
    'UNIVERSITY BLUE/BLACK-VARSITY',
    600,
    '06/09/2018',
    2,
    'https://stockx.imgix.net/Air-Jordan-4-Retro-Travis-Scott-Cactus-Jack-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&trim=color&updated_at=1538080256&w=1600'
),
(
    'Nike',
    'SB Dunk Low',
    'Concepts Green Lobster',
    9.5,
    'GREEN STONE/LEGION GREEN',
    425,
    '12/14/2018',
    1,
   'https://stockx.imgix.net/Nike-SB-Dunk-Low-Concepts-Green-Lobster-1-1.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&trim=color&updated_at=1555535998&w=1600'
),
(
    'Nike',
    'SB Dunk Low',
    'Concepts Green Lobster',
    8.5,
    'GREEN STONE/LEGION GREEN',
    450,
    '12/14/2018',
    1,
   'https://stockx.imgix.net/Nike-SB-Dunk-Low-Concepts-Green-Lobster-1-1.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&trim=color&updated_at=1555535998&w=1600'
),
(
    'Nike',
    'SB Dunk Low',
    'Concepts Green Lobster',
    8.5,
    'GREEN STONE/LEGION GREEN',
    455,
    '12/14/2018',
    1,
   'https://stockx.imgix.net/Nike-SB-Dunk-Low-Concepts-Green-Lobster-1-1.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&trim=color&updated_at=1555535998&w=1600'
),
(
    'Jordan',
    '1 Retro High',
    'Hyper Crimson',
    9,
    'NEUTRAL GREY/HYPER CRIMSON',
    200,
    '01/24/2019',
    2,
   'https://stockx.imgix.net/Air-Jordan-1-Retro-High-Neutral-Grey-Hyper-Crimson-Product.jpg?fit=fill&bg=FFFFFF&w=358&h=255&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1547669825'
),
(
    'Jordan',
    '1 Retro High',
    'Hyper Crimson',
    10,
    'NEUTRAL GREY/HYPER CRIMSON',
    200,
    '01/24/2019',
    2,
   'https://stockx.imgix.net/Air-Jordan-1-Retro-High-Neutral-Grey-Hyper-Crimson-Product.jpg?fit=fill&bg=FFFFFF&w=358&h=255&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1547669825'
),
(
    'Jordan',
    '1 Retro High',
    'Turbo Green (GS)',
    7,
    'TURBO GREEN/SAIL-WHITE-LIGHT',
    140,
    '02/15/2019',
    2,
   'https://stockx.imgix.net/Air-Jordan-1-Retro-High-Turbo-Green-Product.jpg?fit=fill&bg=FFFFFF&w=358&h=255&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1549055395'
),
(
    'Adidas',
    'Yeezy 500',
    'Super Moon Yellow',
    5,
    'SUPER MOON YELLOW',
    400,
    '06/09/2018',
    1,
    'https://stockx.imgix.net/Adidas-Yeezy-500-Moon-Yellow-Product.jpg?fit=fill&bg=FFFFFF&w=358&h=255&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1538080256'
)





