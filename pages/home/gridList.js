import React from 'react'
import { GridList, GridTile } from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton'
import Subheader from 'material-ui/Subheader'
import StarBorder from 'material-ui/svg-icons/toggle/star-border'

const styles = {
  gridList: {
    overflowY: 'auto'
  }
}

const tilesData = [
  {
    img: 'https://elearningindustry.com/wp-content/uploads/2015/07/digital-learning-technology-will-technology-transform-digital-learning-next-decades.jpg',
    title: 'Course 1',
    author: 'jill111'
  },
  {
    img: 'https://elearningindustry.com/wp-content/uploads/2015/07/digital-learning-technology-will-technology-transform-digital-learning-next-decades.jpg',
    title: 'Course 2',
    author: 'pashminu'
  },
  {
    img: 'https://elearningindustry.com/wp-content/uploads/2015/07/digital-learning-technology-will-technology-transform-digital-learning-next-decades.jpg',
    title: 'Course 3',
    author: 'Danson67'
  },
  {
    img: 'https://elearningindustry.com/wp-content/uploads/2015/07/digital-learning-technology-will-technology-transform-digital-learning-next-decades.jpg',
    title: 'Course 4',
    author: 'fancycrave1'
  },
  {
    img: 'https://elearningindustry.com/wp-content/uploads/2015/07/digital-learning-technology-will-technology-transform-digital-learning-next-decades.jpg',
    title: 'Course 5',
    author: 'Hans'
  },
  {
    img: 'https://elearningindustry.com/wp-content/uploads/2015/07/digital-learning-technology-will-technology-transform-digital-learning-next-decades.jpg',
    title: 'Course 6',
    author: 'fancycravel'
  },
  {
    img: 'https://elearningindustry.com/wp-content/uploads/2015/07/digital-learning-technology-will-technology-transform-digital-learning-next-decades.jpg',
    title: 'Course 7',
    author: 'jill111'
  },
  {
    img: 'https://elearningindustry.com/wp-content/uploads/2015/07/digital-learning-technology-will-technology-transform-digital-learning-next-decades.jpg',
    title: 'Course 8',
    author: 'BkrmadtyaKarki'
  }
]

const GridListExampleSimple = () => (
  <div>
    <GridList
      cellHeight={280}
      style={styles.gridList}
      cols={4}
    >
      <Subheader>Latest courses</Subheader>
      {tilesData.map(tile => (
        <GridTile
          key={tile.title}
          title={tile.title}
          subtitle={<span>by <b>{tile.author}</b></span>}
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
        >
          <img src={tile.img} alt="Altenative" />
        </GridTile>
      ))}
    </GridList>
  </div>
)

export default GridListExampleSimple
