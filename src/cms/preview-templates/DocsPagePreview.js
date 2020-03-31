import React from 'react'
import PropTypes from 'prop-types'
import { DocsPageTemplate } from '../../templates/docs-page'

const DocsPagePreview = ({ entry, widgetFor }) => (
  <DocsPageTemplate
    title={entry.getIn(['data', 'title'])}
    subTitle={entry.getIn(['data', 'subTitle'])}
    content={widgetFor('body')}
  />
)

DocsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default DocsPagePreview
