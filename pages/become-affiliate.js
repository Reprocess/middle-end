import React, { Component } from 'react'
import Page from '../components/page'
import BecomeAffiliate from '../components/become-affiliate'
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
             <BecomeAffiliate />
           </Page>
  }
}
