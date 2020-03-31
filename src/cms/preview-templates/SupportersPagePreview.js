import React from 'react'
import PropTypes from 'prop-types'
import { SupportersPageTemplate } from '../../templates/supporters-page'

const SupportersPagePreview = ({ entry, getAsset, widgetFor }) => {
  const data = entry.getIn(['data']).toJS()

  const entryButtons = entry.getIn(['data', 'buttons'])
  const buttons = entryButtons ? entryButtons.toJS() : []

  const entryDonors = entry.getIn(['data', 'donors', 'list'])
  const donorsList = entryDonors ? entryDonors.toJS() : []

  const entryCompanies = entry.getIn(['data', 'companies', 'list'])
  const companiesList = entryCompanies ? entryCompanies.toJS() : []

  const entrySupport = entry.getIn(['data', 'support', 'list'])
  const supportList = entrySupport ? entrySupport.toJS() : []

  if (data) {    
    return(
      <SupportersPageTemplate
        title={entry.getIn(['data', 'title'])}
        subTitle={entry.getIn(['data', 'subTitle'])}
        buttons={buttons}
        donors={{
          title: entry.getIn(['data', 'donors', 'title']),
          list: donorsList
        }}
        companies={{
          title: entry.getIn(['data', 'companies', 'title']),
          list: companiesList
        }}
        support={{
          text: entry.getIn(['data', 'support', 'text']),
          text2: entry.getIn(['data', 'support', 'text2']),
          button: {
            text: entry.getIn(['data', 'support', 'button', 'text']),
            link: entry.getIn(['data', 'support', 'button', 'link']),
          },
          list: supportList,
        }}
        content={widgetFor('body')}
      />
    )
  } else {
    return <div>Loading...</div>
  }  
}

SupportersPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
  widgetFor: PropTypes.func,
}

export default SupportersPagePreview
