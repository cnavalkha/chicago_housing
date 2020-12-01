var config = {
    style: 'mapbox://styles/bigdata20/ckhuqrpfu56jo19rnxkmlk8bn',
    accessToken: 'pk.eyJ1IjoiYmlnZGF0YTIwIiwiYSI6ImNraG96aWttbTA4bGwyem54NHR0Zm5uMXQifQ.onwLOv-bXCnRa0Tpk6r8WQ',
    showMarkers: false,
    theme: 'dark',
    alignment: 'right',
    // title: 'From Vacant Lots to Permanently Affordable Housing',
    // subtitle: 'Leveraging vacant properties in Chicago for affordable housing',
    // byline: 'By Jennah Haque, Chenab Navalkha, and Asher Simon',
    footer: 'Source: City of Chicago Data Portal',
    chapters: [
      {
          id: 'id-chicago-blank',
          title: 'Chicago',
          // image: './path/to/image/source.png',
          description: 'This is the city of Chicago. Before we dive right in, we will go over some nomenclature. A community land trust (CLT) is an organization that maintains several parcels of land originally owned by the community. The CLT then becomes a marshal of public housing, community parks and gardens, etc.',
          location: {
              center: [-87.560, 41.823],
              zoom: 8,
              pitch: 0,
              bearing: 0
          },
          onChapterEnter: [
               {
                   layer: 'cleaned-city-owned-inventory-080a1x',
                   opacity: 0
               }
          ],
          onChapterExit: [
               {
                   layer: 'cleaned-city-owned-inventory-080a1x',
                   opacity: 0
               }
          ]
      },
      {
          id: 'id-city-owned-land',
          title: 'City-Owned Land Inventory',
          // image: './path/to/image/source.png',
          description: 'We found all the city owned land inventories in Chicago. Here are the ones that are up for sale, owned solely by the city of Chicago, and have a zoning code that begins with R, for rent. This land could serve as potential sites for new affordable housing.',
          location: {
              center: [-87.560, 41.823],
              zoom: 10,
              pitch: 0,
              bearing: 0
          },
          onChapterEnter: [
               {
                   layer: 'cleaned-city-owned-inventory-080a1x',
                   opacity: 1
               }
          ],
          onChapterExit: [
               {
                   layer: 'cleaned-city-owned-inventory-080a1x',
                   opacity: 1
               }
          ]
      },
      {
            id: 'id-rentburden-community',
            title: 'Rent Burden',
            // image: './path/to/image/source.png',
            description: 'Chloropeth Map of rent burden by community area.',
            location: {
                center: [-87.560, 41.823],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                 {
                     layer: 'sea10026-by-community-area-d89drz',
                     opacity: 0.75
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'sea10026-by-community-area-d89drz',
                     opacity: 0
                 }
            ]
        },
        {
              id: 'id-rentburden-community-zoomed',
              title: 'Rent Burden',
              // image: './path/to/image/source.png',
              description: 'Chloropeth Map of rent burden by community area.',
              location: {
                  center: [-87.560, 41.823],
                  zoom: 11,
                  pitch: 0,
                  bearing: 0
              },
              onChapterEnter: [
                   {
                       layer: 'sea10026-by-community-area-d89drz',
                       opacity: 0.75
                   }
              ],
              onChapterExit: [
                   {
                       layer: 'sea10026-by-community-area-d89drz',
                       opacity: 0
                   }
              ]
          },
          {
                id: 'id-rentburden-tract',
                title: 'Rent Burden',
                // image: './path/to/image/source.png',
                description: 'Chloropeth Map of rent burden by Census tract.',
                location: {
                    center: [-87.560, 41.823],
                    zoom: 11,
                    pitch: 0,
                    bearing: 0
                },
                onChapterEnter: [
                     {
                         layer: 'sea10026-w-tracts-by-communit-71pqil',
                         opacity: 0.75
                     }
                ],
                onChapterExit: [
                     {
                         layer: 'sea10026-w-tracts-by-communit-71pqil',
                         opacity: 0
                     }
                ]
            },
        {
            id: 'id-evictions-community',
            title: 'Evictions',
            // image: './path/to/image/source.png',
            description: 'Chloropeth Map of evictions by community area.',
            location: {
                center: [-87.560, 41.823],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                 {
                     layer: 'evictions-commarea',
                     opacity: 0.75
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'evictions-commarea',
                     opacity: 0
                 }
            ]
        },
        {
            id: 'id-evictions-community-zoomed',
            title: 'Evictions',
            // image: './path/to/image/source.png',
            description: 'Chloropeth Map of evictions by community area.',
            location: {
                center: [-87.560, 41.823],
                zoom: 11,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                 {
                     layer: 'evictions-commarea',
                     opacity: 0.75
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'evictions-commarea',
                     opacity: 0
                 }
            ]
        },
        {
            id: 'id-evictions-tract',
            title: 'Evictions',
            // image: './path/to/image/source.png',
            description: 'Chloropeth Map of evictions by Census tract.',
            location: {
                center: [-87.560, 41.823],
                zoom: 11,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                 {
                     layer: 'eviction-tract',
                     opacity: 0.75
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'eviction-tract',
                     opacity: 0
                 }
            ]
        },
        {
            id: 'id-affordable-housing',
            title: 'Affordable Rental Housing Developments',
            // image: './path/to/image/source.png',
            description: 'Here all the affordable housing units within Chicago. This shows the efforts already in place by the city to address the affordability crisis. Notice how many are of the units are rather far from the two patches of city owned land inventory. This strengthens our argument that more affordable housing could be supplied in these regions.',
            location: {
                center: [-87.560, 41.823],
                zoom: 11,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                 {
                     layer: 'affordable-rental-housing-dev-31ve8k',
                     opacity: 1
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'affordable-rental-housing-dev-31ve8k',
                     opacity: 0
                 }
            ]
        },
        {
            id: 'id-grocerystores',
            title: 'Grocery Stores',
            // image: './path/to/image/source.png',
            description: 'Here are all the grocery and liquor stores in Chicago, collected in 2013. We wanted to avoid proposing a CLT in the middle of a food desert. Luckily, access to produce is widely available in the two largest concentrations of city owned land inventory that we focus on.',
            location: {
                center: [-87.560, 41.823],
                zoom: 11,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                 {
                     layer: 'grocery-stores-2013-bq0vo4',
                     opacity: 1
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'grocery-stores-2013-bq0vo4',
                     opacity: 0
                 }
            ]
        },
        {
            id: 'id-busstops',
            title: 'Bus Stops',
            // image: './path/to/image/source.png',
            description: 'Access to public transportation is also a key consideration for effective affordable housing. Here are all the CTA bus stops in the city of Chicago. There seems to be an ample amount within our regions of interest.',
            location: {
                center: [-87.560, 41.823],
                zoom: 11,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                 {
                     layer: 'cta-busstops-d2lkuk',
                     opacity: 1
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'cta-busstops-d2lkuk',
                     opacity: 0
                 }
            ]
        },
    ]
};
