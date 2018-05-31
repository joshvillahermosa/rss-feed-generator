/**
 * @file extras.js
 * @description This holds extra information for the feed that we may need to add in later
 */
export default {
  custom_namespaces: {
    'itunes': 'http://www.itunes.com/dtds/podcast-1.0.dtd'
  },
  custom_elements: [{
      'itunes:subtitle': 'A show about everything'
    },
    {
      'itunes:author': 'John Doe'
    },
    {
      'itunes:summary': 'All About Everything is a show about everything. Each week we dive into any subject known to man and talk about it as much as we can. Look for our podcast in the Podcasts app or in the iTunes Store'
    },
    {
      'itunes:owner': [{
          'itunes:name': 'John Doe'
        },
        {
          'itunes:email': 'john.doe@example.com'
        }
      ]
    },
    {
      'itunes:image': {
        _attr: {
          href: 'http://example.com/podcasts/everything/AllAboutEverything.jpg'
        }
      }
    },
    {
      'itunes:category': [{
          _attr: {
            text: 'Technology'
          }
        },
        {
          'itunes:category': {
            _attr: {
              text: 'Gadgets'
            }
          }
        }
      ]
    }
  ]
}
