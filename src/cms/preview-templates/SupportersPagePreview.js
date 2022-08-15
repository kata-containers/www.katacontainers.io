import React from 'react'
import PropTypes from 'prop-types'
import { SupportersPageTemplate } from '../../templates/supporters-page'

const SupportersPagePreview = ({ entry, getAsset, widgetFor }) => {
  const data = entry.getIn(['data']).toJS()

  const entryButtons = entry.getIn(['data', 'buttons'])
  const buttons = entryButtons ? entryButtons.toJS() : []

  const entrySupport = entry.getIn(['data', 'support', 'list'])
  const supportList = entrySupport ? entrySupport.toJS() : []

  if (data) {    
    return(
      <SupportersPageTemplate
        buttons={buttons}
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
