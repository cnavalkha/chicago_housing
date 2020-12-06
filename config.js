var config = {
    style: 'mapbox://styles/bigdata20/ckhuqrpfu56jo19rnxkmlk8bn',
    accessToken: 'pk.eyJ1IjoiYmlnZGF0YTIwIiwiYSI6ImNraG96aWttbTA4bGwyem54NHR0Zm5uMXQifQ.onwLOv-bXCnRa0Tpk6r8WQ',
    showMarkers: false,
    theme: 'dark',
    alignment: 'right',
    // title: 'From Vacant Lots to Permanently Affordable Housing',
    // subtitle: 'Leveraging vacant properties in Chicago for affordable housing',
    // byline: 'By Jennah Haque, Chenab Navalkha, and Asher Simon',
    footer: 'Here are our final recommendations for potential parcels for affordable housing. Hover over each dot for more information.',
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
               },
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
          description: 'We found all the city-owned land inventory in Chicago. Here are those that are available for sale, owned solely by the city of Chicago, and are zoned for residential use. These lots represent the available land that we believe can and should be used for the production of affordable housing via CLTs.',
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
            title: 'Rent Burdened Households in Chicago',
            // image: './path/to/image/source.png',
            description: 'The U.S. Census Bureau designates those households that spend more than 30% of their income on rent as rent burdened. There are two tiers of rent burden reported in the Census Bureau’s data: the proportion of residents paying more than 30% and the proportion spending more than 50% of their income on rent. <br>\n<br>\n In Chicago, 22% of renters spend more than a third of their income on rent, and 25% of renters spend more than half of their income on rent. These are roughly equivalent to national rates of rent burden at each of these levels.',
            location: {
                center: [-87.560, 41.823],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                 {
                     layer: 'sea10026-by-community-area-d89drz',
                     opacity: 0.8
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
              title: 'Rent Burdened Households in Chicago',
              // image: './path/to/image/source.png',
              description: 'We see that there are ample city-owned lots available in the especially rent-burdened communities of West Garfield Park, East Garfield Park, North Lawndale, Englewood, and West Englewood.',
              location: {
                  center: [-87.560, 41.823],
                  zoom: 11,
                  pitch: 0,
                  bearing: 0
              },
              onChapterEnter: [
                   {
                       layer: 'sea10026-by-community-area-d89drz',
                       opacity: 0.8
                   },
                   {
                       layer: 'Comm_Area_Labels',
                       opacity: 1
                   }
              ],
              onChapterExit: [
                   {
                       layer: 'sea10026-by-community-area-d89drz',
                       opacity: 0
                   },
                   {
                       layer: 'Comm_Area_Labels',
                       opacity: 0
                   }
              ]
          },
          {
                id: 'id-rentburden-tract',
                title: 'Rent Burdened Households in Chicago',
                // image: './path/to/image/source.png',
                description: 'For additional detail, here is the rent-burden data presented at the U.S. Census tract level.',
                location: {
                    center: [-87.560, 41.823],
                    zoom: 11,
                    pitch: 0,
                    bearing: 0
                },
                onChapterEnter: [
                     {
                         layer: 'sea10026-w-tracts-by-communit-71pqil',
                         opacity: 0.8
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
            title: 'Evictions Between 2013-2017 in Chicago',
            // image: './path/to/image/source.png',
            description: 'Using data from the Lawyers’ Committee for Better Housing, we mapped the average rate of eviction filings by community area from 2013-2017. <br>\n<br>\n Due to evidence that eviction records, which are generated when a landlord files an eviction notice with the court systems, have negative impacts on tenants regardless of whether the eviction takes place, we focused on the rate of filings rather than official judgments for eviction. <br>\n<br>\n The annual average of eviction filings between 2013 and 2017: 22,443 <br>\n<br>\n 53% of these cases ended in an eviction order: an average of about 4,500 households per year ',
            location: {
                center: [-87.560, 41.823],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                 {
                     layer: 'evictions-commarea',
                     opacity: 0.8
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
            title: 'Evictions Between 2013-2017 in Chicago',
            // image: './path/to/image/source.png',
            description: 'We see that there are ample city-owned lots available in the following communities that experienced especially high rates of eviction: West Garfield Park, East Garfield Park, North Lawndale, Englewood, and West Englewood. <br>\n<br>\n These communities were also shown to be relatively rent burdened in the previous map.',
            location: {
                center: [-87.560, 41.823],
                zoom: 11,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                 {
                     layer: 'evictions-commarea',
                     opacity: 0.8
                 },
                 {
                     layer: 'Comm_Area_Labels',
                     opacity: 1
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'evictions-commarea',
                     opacity: 0
                 },
                 {
                     layer: 'Comm_Area_Labels',
                     opacity: 0
                 }
            ]
        },
        {
            id: 'id-evictions-tract',
            title: 'Evictions Between 2013-2017 in Chicago',
            // image: './path/to/image/source.png',
            description: 'For additional detail, here is the evictions data presented at the U.S. Census tract level.',
            location: {
                center: [-87.560, 41.823],
                zoom: 11,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                 {
                     layer: 'eviction-tract',
                     opacity: 0.8
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
            description: 'Here are all the grocery and liquor stores in Chicago, collected in 2013. We wanted to avoid proposing a CLT in the middle of a food desert. As access to grocery stores seems to be uneven around the community owned land, decision makers should consider this when selecting parcels for affordable housing.',
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
