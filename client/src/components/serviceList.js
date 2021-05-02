import Nav from './layout/Nav.js'
import NavItem from './layout/NavItem.js'
import List from './layout/List.js'
import ListItem from './layout/ListItem.js'

export default function Recipes() {
  var recipes = [{id:1, name: 'nikhil', description: 'dsklfksjdnfkd', price:15, quantity:12}]
  return (
    <div className="divide-y divide-gray-100">
      <Nav>
        <NavItem href="/featured" isActive>Featured</NavItem>
        <NavItem href="/popular">Popular</NavItem>
        <NavItem href="/recent">Recent</NavItem>
      </Nav>
      <List>
        {recipes.map((recipe) => (
          <ListItem key={recipe.id} recipe={recipe} />
        ))}
      </List>
    </div>
  )
}