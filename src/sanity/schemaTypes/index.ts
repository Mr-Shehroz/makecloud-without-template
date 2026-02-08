import { type SchemaTypeDefinition } from 'sanity'
import branding from './branding'
import header from './header'
import hero from './hero'
import services from './services'
import partners from './partners'
import choose from './choose'
import marquee from './marquee'
import features from './features'
import trusted from './trusted'
import blogs from './blogs'
import contacts from './contacts'
import footer from './footer'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [branding, header, hero, services, partners, choose, marquee, features, trusted, blogs, contacts, footer],
}
