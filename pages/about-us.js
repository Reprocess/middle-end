import React, { Component } from 'react'
import Page from '../components/page'
import AboutUs from '../components/about-us'
import { getAllCategories } from '../firebase'

export default class extends Component {

  static async getInitialProps () {

    const categories = await getAllCategories();
    return { categories }
  }

  render () {

    const { categories } = this.props
    return <Page
             categories={categories}
             >
             <AboutUs />
           </Page>
  }
}
