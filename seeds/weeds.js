exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('weeds').del()
    .then(() => {
      // Inserts seed entries
      return knex('weeds').insert([
        {
          id: 10,
          name: 'Amaranthus'
        },
        {
          id: 11,
          name: 'Barley Grass'
        },
        {
          id: 12,
          name: 'Bindweed'
        },
        {
          id: 13,
          name: 'Black Nightshade'
        },
        {
          id: 14,
          name: 'Brome - Giant'
        },
        {
          id: 15,
          name: 'Brome - Soft'
        },
        {
          id: 16,
          name: 'Brown Top'
        },
        {
          id: 17,
          name: 'Buttercup'
        },
        {
          id: 18,
          name: 'Capeweed'
        },
        {
          id: 19,
          name: 'Cats Ear'
        },
        {
          id: 20,
          name: 'Chickweed'
        },
        {
          id: 21,
          name: 'Chicory'
        },
        {
          id: 22,
          name: 'Cleavers'
        },
        {
          id: 23,
          name: 'Clover - Red'
        },
        {
          id: 24,
          name: 'Clover - Sub'
        },
        {
          id: 25,
          name: 'Clover - White'
        },
        {
          id: 26,
          name: 'Common Cotula'
        },
        {
          id: 27,
          name: 'Dandelion'
        },
        {
          id: 28,
          name: 'Docks'
        },
        {
          id: 29,
          name: 'Erodium'
        },
        {
          id: 30,
          name: 'Fat Hen'
        },
        {
          id: 31,
          name: 'Field Madder'
        },
        {
          id: 32,
          name: 'Field Pansy'
        },
        {
          id: 33,
          name: 'Fumitory'
        },
        {
          id: 34,
          name: 'Groundsel'
        },
        {
          id: 35,
          name: 'Hairgrass'
        },
        {
          id: 36,
          name: 'Hawkbit'
        },
        {
          id: 37,
          name: 'Hedge Mustard'
        },
        {
          id: 38,
          name: 'Henbit'
        },
        {
          id: 39,
          name: 'Lesser Swinecress'
        },
        {
          id: 40,
          name: 'Mallow'
        },
        {
          id: 41,
          name: 'Montia'
        },
        {
          id: 42,
          name: 'Mouse Eared Chickweed'
        },
        {
          id: 43,
          name: 'Nettle Leaved Goose Foot'
        },
        {
          id: 44,
          name: 'Nettles'
        },
        {
          id: 45,
          name: 'Parsley Piert'
        },
        {
          id: 46,
          name: 'Phalaris Minor'
        },
        {
          id: 47,
          name: 'Plantain'
        },
        {
          id: 48,
          name: 'Poppy - Opium'
        },
        {
          id: 49,
          name: 'Poppy - Rough'
        },
        {
          id: 50,
          name: 'Ragwort'
        },
        {
          id: 51,
          name: 'Redshank'
        },
        {
          id: 52,
          name: 'Ryegrass - Annual'
        },
        {
          id: 53,
          name: 'Ryegrass - Perennial'
        },
        {
          id: 54,
          name: 'Scarlet Pimpernel'
        },
        {
          id: 55,
          name: 'Shepherds Purse'
        },
        {
          id: 56,
          name: 'Sorrel'
        },
        {
          id: 57,
          name: 'Speedwell'
        },
        {
          id: 58,
          name: 'Spurrey'
        },
        {
          id: 59,
          name: 'Stagger - Weed'
        },
        {
          id: 60,
          name: 'Stinging Nettle'
        },
        {
          id: 61,
          name: 'Thistle - Californian'
        },
        {
          id: 62,
          name: 'Thistle - Slender'
        },
        {
          id: 63,
          name: 'Thistle - Sow'
        },
        {
          id: 64,
          name: 'Thistle - Spear'
        },
        {
          id: 65,
          name: 'Thistle - Variegated'
        },
        {
          id: 66,
          name: 'Thistle - Onion'
        },
        {
          id: 67,
          name: 'Thistle - Rope'
        },
        {
          id: 68,
          name: 'Toadrush'
        },
        {
          id: 69,
          name: 'Wild Oats'
        },
        {
          id: 70,
          name: 'Wild Radish'
        },
        {
          id: 71,
          name: 'Wild Turnip'
        },
        {
          id: 72,
          name: 'Winter Grass'
        },
        {
          id: 73,
          name: 'Wireweed'
        },
        {
          id: 74,
          name: 'Volunteer - Brassicas'
        },
        {
          id: 75,
          name: 'Volunteer - Cereals'
        },
        {
          id: 76,
          name: 'Volunteer - Potatoes'
        },
        {
          id: 77,
          name: 'Yorkshire Fog'
        }
      ])
    })
}
