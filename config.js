var config = {
    style: 'mapbox://styles/bigdata20/ckhuqrpfu56jo19rnxkmlk8bn',
    accessToken: 'pk.eyJ1IjoiYmlnZGF0YTIwIiwiYSI6ImNraG96aWttbTA4bGwyem54NHR0Zm5uMXQifQ.onwLOv-bXCnRa0Tpk6r8WQ',
    showMarkers: false,
    theme: 'dark',
    alignment: 'right',
    // title: 'From Vacant Lots to Permanently Affordable Housing',
    // subtitle: 'Leveraging vacant properties in Chicago for affordable housing',
    // byline: 'By Jennah Haque, Chenab Navalkha, and Asher Simon',
    footer: 'Here are our recommendations for potential parcels for affordable housing. Hover over each point for more information. We had to generalize our recommendations due to time and COVID-19 restricting us from seeing specific lots in person. We had to rely solely on the avaliable data from the Chicago Open Data Portal. Because of this, these limited parcels are simply a starting point. Additional field research and considerations about access to transit, and local social networks, would be needed to down-select final parcel options.',
    chapters: [
      {
          id: 'id-chicago-blank',
          title: 'Chicago',
          // image: './path/to/image/source.png',
          description: 'This is the city of Chicago. Before we dive right in, we will go over some nomenclature. A community land trust (CLT) is an alternative to market-based approaches to housing. A CLT is typically a nonprofit community-based organization run by a mix of community residents, residents of the land trust itself, and public representatives. In a CLT, the land upon which housing sits is owned by the organization, and CLT residents rent or purchase the homes or apartments on top of the land. This model allows for lower purchase prices and rental rates because the housing units are not tied to the value of the land itself. This model allows for long-term affordability, because the housing units in the CLT are not susceptible to fluctuations in the market. CLT operate outside of typical property markets, and as a result residents are not at risk of displacement due to speculation and gentrification.',
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
          description: 'We mapped city-owned properties that are residentially zoned and currently un-leased in Chicago. These lots represent the available properties that we believe could be transferred from the City of Chicago to local organizations for integration into permanently affordable housing in the form of a CLT.',
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
            description: 'The U.S. Census Bureau designates those households that spend more than 30% of their income on rent as rent burdened. There are two tiers of rent burden reported in the Census Bureau’s data: the proportion of residents paying more than 30% and the proportion spending more than 50% of their income on rent. <br>\n<br>\n In Chicago, 22% of renters spend more than a third of their income on rent, and 25% of renters spend more than half of their income on rent. These are roughly equivalent to national rates of rent burden at each of these levels. <br>\n<br>\n Here, we see that the community areas with higher rates of rent burden are located on the west and south sides of the city.',
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
              description: 'Zooming in, we see that many city-owned properties are available in the especially rent-burdened communities of West Garfield Park, East Garfield Park, North Lawndale, Englewood, and West Englewood.',
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
                description: 'For additional detail, here is the rent-burden data presented at the U.S. Census tract level. We see here that within each of the community areas, there is a good amount of heterogeneity across tracts in the rate of rent burden, but the available city-owned properties are in close proximity to tracts with the highest rates of burden.',
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
            title: 'Eviction Filings Between 2013-2017 in Chicago',
            // image: './path/to/image/source.png',
            description: 'Using data from the Lawyers’ Committee for Better Housing, we mapped the average rate of eviction filing (average number of filings as a proportion of total renter households) by community area from 2013-2017.<br>\n<br>\n We include eviction filings as an additional measure of housing insecurity because this goes a bit farther than simply rent burden in identifying areas where households are at risk of losing their homes and being displaced. Across the country, average rates of rent burden are generally high, but these statistics do not necessarily capture where and who is at risk of losing their housing. Eviction filings help us better understand where housing precarity is most acute. <br>\n<br>\n Given evidence that eviction records, which are generated when a landlord files an eviction notice with the court systems, have negative impacts on tenants regardless of whether the eviction takes place, we focused on the rate of filings rather than official judgments for eviction. <br>\n<br>\n The annual average of eviction filings between 2013 and 2017: 22,443 <br>\n<br>\n 53% of these cases ended in an eviction order: an average of about 4,500 households per year ',
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
            title: 'Eviction Filings Between 2013-2017 in Chicago',
            // image: './path/to/image/source.png',
            description: 'We see high rates of eviction filing on the south and west sides of Chicago, following similar patterns of rent burden. However, it appears that eviction filings are a bit more widespread across these regions, suggesting a need for measures that can stabilize tenancy and keep renters in their homes. <br>\n<br>\n We see that there are clusters of city-owned propeerties available in the communities that experienced especially high rates of eviction between 2013 and 2017: West Garfield Park, East Garfield Park, North Lawndale, Englewood, and West Englewood. <br>\n<br>\n These communities were also shown to be relatively rent burdened in the previous map.',
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
            description: 'For additional detail, here are average rates of eviction filing presented at the U.S. Census tract level. Here we see that there are many tracts with higher rates of eviction in tracts within which there are available city-owned parcels--though notably many high-eviction filing tracts also fall outside of these areas.',
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
            description: 'We also wanted to visualize how the location of current affordable housing developments relate to the measures of housing insecurity under study here. This shows the efforts already in place by the city to address the affordability crisis. Notice how many are of the units are rather far from the two patches of city owned land inventory. This shows that expansion of the geographies in which affordable housing is available may better meet the needs of housing insecure residents, also allowing them to find affordable housing within their current communities without disrupting their existing social ties and networks.',
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
            description: 'These are all the grocery and liquor stores in Chicago, collected in 2013. While safe, affordable, stable housing is a human right, we recognize that there are disparities in access to food resources in many historically marginalized areas. <br>\n<br>\n We see here that it may be the case that the properties we identify here may not have adequate access to grocery stores. While this does not necessarily preclude creation of CLTs in this area, it does raise the question of what the City of Chicago or other stakeholders could do to ensure better food access within these community areas.',
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
            description: 'Similarly, connectivity to transit is an important consideration in enabling resident access to the city and employment. Here, we visualize Chicago Transit Authority bus stops as a way to start to understand where there may be gaps in access points. While we see a lot of bus stops in the areas of interest, there are a lot of other quesitons about transit accessibility and affordability that should be part of larger conversations about affordable housing.',
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
      {
          id: 'id-parcel2',
          title: 'But what do these properties look like?',
          image: './images/1501Scentralpark.png',
          description: 'Here is one example of a property we have identified.<br>\n<br>\n1501 South Central Park Avenue Chicago, Illinois',
          location: {
              center: [-87.560, 41.823],
              zoom: 11,
              pitch: 0,
              bearing: 0
          },
          onChapterEnter: [
               {
                   
                   layer: 'central park',
                   opacity: 1
               },
          ],
          onChapterExit: [
               {
                   layer: 'central park',
                   opacity: 0
               }
          ]
      },
    ]
};
