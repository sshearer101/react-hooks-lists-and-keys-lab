import React from 'react'

function NavBar() {
  const links = ['home', 'about', 'projects']

  const routes = links.map((link) => (<a key={link} href={'#' + link}>{link}</a>));

  return <nav>{routes}</nav>
}

export default NavBar
