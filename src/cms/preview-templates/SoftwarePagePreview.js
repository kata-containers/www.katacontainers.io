import React from 'react'
import PropTypes from 'prop-types'
import { SoftwarePageTemplate } from '../../templates/software-page'

const SoftwarePagePreview = ({ entry, getAsset, widgetFor }) => {
  const data = entry.getIn(['data']).toJS()

  const entryIntro = entry.getIn(['data', 'intro', 'buttons'])
  const buttonsList = entryIntro ? entryIntro.toJS() : []

  const entryArchitecture = entry.getIn(['data', 'architecture', 'columns'])
  const architectureColumns = entryArchitecture ? entryArchitecture.toJS() : []

  const entryIntegration = entry.getIn(['data', 'integration', 'table', 'columns'])
  const integrationColumns = entryIntegration ? entryIntegration.toJS() : []

  if (data) {    
    return(
      <SoftwarePageTemplate
        title={entry.getIn(['data', 'title'])}
        subTitle={entry.getIn(['data', 'subTitle'])}
        intro={{
          text: entry.getIn(['data', 'intro', 'text']),
          buttons: buttonsList
        }}
        architecture={{
          title: entry.getIn(['data', 'architecture', 'title']),
          image: entry.getIn(['data', 'architecture', 'image']),
          columns: architectureColumns,
        }}
        integration={{
          title: entry.getIn(['data', 'integration', 'title']),
          image: entry.getIn(['data', 'integration', 'image']),
          table: {
            title: entry.getIn(['data', 'integration', 'table', 'title']),
            columns: integrationColumns
          }
        }}
        content={widgetFor('body')}
      />
    )
  } else {
    return <div>Loading...</div>
  }  
}

SoftwarePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default SoftwarePagePreview
