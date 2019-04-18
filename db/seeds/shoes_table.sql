ccreate table shoes (
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
)