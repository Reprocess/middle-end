import Link from 'next/prefetch'
import React from 'react'
import InlineList from './InlineList'
import InlineItem from './InlineItem'
import menuItems from './menuItems'

const link = {
  textDecoration: 'none',
  padding: '.5em 1em',
  color: 'white',
  backgroundColor: 'none'
}

const navPostion = {
  position: 'absolute',
  right: '0',
  zIndex: '1',
  padding: '1.5em'
}

export default () => (
  <nav style={navPostion}>
    <InlineList>
      {menuItems.map(item => (
        <InlineItem key={item.text}>
          <Link href={item.link}><a style={link}>{item.text}</a></Link>
        </InlineItem>
      ))}
    </InlineList>
  </nav>
)
