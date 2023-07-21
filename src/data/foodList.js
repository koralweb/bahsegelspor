let foodList = [
  {
    type: 'Saladas',
    name: 'Griego',
    description:
      'verduras frescas, queso feta, aceitunas, aceitunas, albahaca seca, hierbas, cebolla roja, sazonada con aceite de oliva',
    cost: 10,
    image: require('../assets/images/248363/bahse0_salads_1.jpg'),
  },
  {
    type: 'Saladas',
    name: 'César con pollo',
    description:
      'Lechuga Fresca, Pechuga De Pollo En Rodajas, Tomates Cherry, Queso Parmesano, Crutones, Aderezo César',
    cost: 12,
    image: require('../assets/images/248363/bahse0_salads_3.jpg'),
  },
  {
    type: 'Saladas',
    name: 'César con Camerún',
    description:
      'Lechuga Fresca, Langostinos Fritos, Tomates Cherry, Queso Parmesano, Crutones, Aderezo César',
    cost: 13,
    image: require('../assets/images/248363/bahse0_salads_4.jpg'),
  },
  {
    type: 'Saladas',
    name: 'Ensalada de calamares',
    description:
      'Col de Pekín, calamar, palitos de cangrejo, huevo, mayonesa, caviar de salmón',
    cost: 12,
    image: require('../assets/images/248363/bahse0_salads_5.jpg'),
  },
  {
    type: 'Saladas',
    name: 'Festivo',
    description:
      'lengua de res, pepino en escabeche, pimientos, guisantes, mayonesa',
    cost: 11,
    image: require('../assets/images/248363/bahse0_salads_7.jpg'),
  },
  {
    type: 'Saladas',
    name: 'Exótico',
    description:
      'pollo hervido, piña, champiñones, iceberg, mayonesa, curry, lechuga, tomate',
    cost: 11,
    image: require('../assets/images/248363/bahse0_salads_10.jpg'),
  },
  {
    type: 'Pizza',
    name: 'Pizzería "Alfredo"',
    description: 'tomates, cangrejos, calamares, camarones, aceitunas, queso',
    cost: 20,
    image: require('../assets/images/248363/bahse0_pizza_1.jpg'),
  },
  {
    type: 'Pizza',
    name: 'Pizza cremosa de peperoni',
    description: 'tomate, pepperoni, especias, queso',
    cost: 18,
    image: require('../assets/images/248363/bahse0_pizza_6.jpg'),
  },
  {
    type: 'Pizza',
    name: 'Pizza "Pollo Queso"',
    description: 'pollo ahumado, queso, queso ahumado, ajo',
    cost: 15,
    image: require('../assets/images/248363/bahse0_pizza_2.jpg'),
  },
  {
    type: 'Pizza',
    name: 'Pizza "Jamón y champiñones"',
    description: 'jamón, jamon, servelat, tomate, champiñones, chile, queso',
    cost: 20,
    image: require('../assets/images/248363/bahse0_pizza_7.jpg'),
  },
  {
    type: 'Pizza',
    name: 'Pizza "Hawaiana"',
    description: 'salsa de crema, champiñones, cebolla, queso',
    cost: 18,
    image: require('../assets/images/248363/bahse0_pizza_3.jpg'),
  },
  {
    type: 'Pizza',
    name: 'Pizza "Cuatro Estaciones"',
    description: 'filete de pollo, tomate, brócoli, queso',
    cost: 18,
    image: require('../assets/images/248363/bahse0_pizza_4.jpg'),
  },
  {
    type: 'Pizza',
    name: 'Pizza "Cuatro quesos"',
    description: 'salmón, espinacas, cebolla, queso, especias',
    cost: 20,
    image: require('../assets/images/248363/bahse0_pizza_8.jpg'),
  },
  {
    type: 'Pizza',
    name: 'Pizzería "Rústica"',
    description: 'queso mozzarella, queso holandés, crema agria',
    cost: 16,
    image: require('../assets/images/248363/bahse0_pizza_9.jpg'),
  },
  {
    type: 'Aperitivos',
    name: 'Plato de queso',
    description: 'tres tipos de quesos variados, servidos con nueces y miel',
    cost: 14,
    image: require('../assets/images/248363/bahse0_lermiona_1.jpg'),
  },
  {
    type: 'Aperitivos',
    name: 'Arenque',
    description:
      'filete de arenque s/s, papas hervidas, cebolla, limón, verduras',
    cost: 10,
    image: require('../assets/images/248363/bahse0_lermiona_2.jpg'),
  },
  {
    type: 'Aperitivos',
    name: 'Salmón salado propio',
    description: 's/s salmón, especias',
    cost: 15,
    image: require('../assets/images/248363/bahse0_lermiona_3.jpg'),
  },
  {
    type: 'Aperitivos',
    name: 'Lengua de toro',
    description: 'lengua de ternera hervida en rodajas, mostaza',
    cost: 10,
    image: require('../assets/images/248363/bahse0_lermiona_4.jpg'),
  },
  {
    type: 'Aperitivos',
    name: 'Desayuno "Raznosoli"',
    description:
      'chucrut, rodajas de pepino en escabeche, tomate en escabeche, cebolla, aceite vegetal',
    cost: 10,
    image: require('../assets/images/248363/bahse0_lermiona_5.jpg'),
  },
  {
    type: 'Aperitivos',
    name: 'Picatostes de centeno',
    description: '',
    cost: 8,
    image: require('../assets/images/248363/bahse0_lermiona_7.jpg'),
  },
  {
    type: 'Aperitivos',
    name: 'Camarón frito',
    description: '',
    cost: 13,
    image: require('../assets/images/248363/bahse0_lermiona_8.jpg'),
  },
  {
    type: 'Aperitivos',
    name: 'Alas de barbacoa',
    description: '',
    cost: 11,
    image: require('../assets/images/248363/bahse0_lermiona_9.jpg'),
  },
  {
    type: 'Adornar',
    name: 'Schnitzel de Wiener',
    description: 'cerdo frito rebozado, servido con papas fritas',
    cost: 15,
    image: require('../assets/images/248363/bahse0_hermiona_2.jpg'),
  },
  {
    type: 'Adornar',
    name: 'Carne en frances',
    description:
      'Picada con tomate, pepinillos, cebolla y champiñones, asada con mahonesa y queso',
    cost: 15,
    image: require('../assets/images/248363/bahse0_hermiona_4.jpg'),
  },
  {
    type: 'Adornar',
    name: 'Pollo de Tailandia',
    description:
      'Filete de pollo con piña y salsa de chili dulce servido con arroz basmati',
    cost: 14,
    image: require('../assets/images/248363/bahse0_hermiona_8.jpg'),
  },
  {
    type: 'Adornar',
    name: 'Brochetas de salmón',
    description:
      'salmón, naranja, champiñones, pimientos, servido con salsa de jengibre en brochetas',
    cost: 22,
    image: require('../assets/images/248363/bahse0_hermiona_9.jpg'),
  },
  {
    type: 'Adornar',
    name: 'Filete de salmón',
    description:
      'Filete de salmón frito, limón, aceitunas, aceitunas negras, hierbas, salsa con caviar rojo',
    cost: 13,
    image: require('../assets/images/248363/bahse0_hermiona_10.jpg'),
  },
  {
    type: 'Seguimientos',
    name: 'Papas fritas',
    description: '',
    cost: 7,
    image: require('../assets/images/248363/bahse0_germiona_1.jpg'),
  },
  {
    type: 'Seguimientos',
    name: 'Patatas rústicas',
    description: '',
    cost: 7,
    image: require('../assets/images/248363/bahse0_germiona_2.jpg'),
  },
  {
    type: 'Seguimientos',
    name: 'Vegetales asados',
    description: '',
    cost: 12,
    image: require('../assets/images/248363/bahse0_germiona_3.jpg'),
  },
  {
    type: 'Sushi',
    name: 'Salmón',
    description: 'nori, arroz, salmón',
    cost: 7,
    image: require('../assets/images/248363/bahse0_sussi_1.jpg'),
  },
  {
    type: 'Sushi',
    name: 'Pepinos',
    description: 'nori, arroz, pepino',
    cost: 6,
    image: require('../assets/images/248363/bahse0_sussi_2.jpg'),
  },
  {
    type: 'Sushi',
    name: 'Acné',
    description: 'nori, arroz, anguila',
    cost: 6,
    image: require('../assets/images/248363/bahse0_sussi_3.jpg'),
  },
  {
    type: 'Sushi',
    name: 'Camarón',
    description: 'nori, arroz, camarones',
    cost: 8,
    image: require('../assets/images/248363/bahse0_sussi_4.jpg'),
  },
  {
    type: 'Sushi',
    name: 'Palta',
    description: 'nori, arroz, aguacate',
    cost: 8,
    image: require('../assets/images/248363/bahse0_sussi_5.jpg'),
  },
  {
    type: 'Sushi',
    name: 'Filadelfia',
    description: 'arroz, queso crema, salmón, aguacate',
    cost: 12,
    image: require('../assets/images/248363/bahse0_sussi_6.jpg'),
  },
  {
    type: 'Sushi',
    name: 'Chukago',
    description: 'arroz, queso crema, pepino, camarones tigre',
    cost: 10,
    image: require('../assets/images/248363/bahse0_sussi_7.jpg'),
  },
  {
    type: 'Sushi',
    name: 'Kioto',
    description: 'arroz, queso crema, pepino, salmón, caviar de salmón',
    cost: 9,
    image: require('../assets/images/248363/bahse0_sussi_8.jpg'),
  },
  {
    type: 'Sushi',
    name: 'El dragón',
    description:
      'arroz, anguila, queso crema, lechuga, pimientos, caviar tobiko, sésamo',
    cost: 12,
    image: require('../assets/images/248363/bahse0_sussi_9.jpg'),
  },
  {
    type: 'Sushi',
    name: 'Anguila blanda',
    description: 'arroz, anguila, queso crema, aguacate, sésamo',
    cost: 12,
    image: require('../assets/images/248363/bahse0_sussi_10.jpg'),
  },
];

foodList = [...foodList].map(el => {
  return {
    ...el,
    added: false,
    count: 1,
    id: Math.random(),
  };
});

export default foodList;
