import React from 'react'
import PropTypes from 'prop-types'
import { LearnPageTemplate } from '../../templates/learn-page'

const LearnPagePreview = ({ entry, getAsset, widgetFor }) => {
  const data = entry.getIn(['data']).toJS()

  const entryButtons = entry.getIn(['data', 'intro', 'buttons'])
  const buttons = entryButtons ? entryButtons.toJS() : []

  const entryGallery = entry.getIn(['data', 'intro', 'gallery'])
  const gallery = entryGallery ? entryGallery.toJS() : []

  const entryVideos = entry.getIn(['data', 'intro', 'videos'])
  const videos = entryVideos ? entryVideos.toJS() : []

  if (data) {
    return(
      <LearnPageTemplate        
        title={entry.getIn(['data', 'title'])}
        subTitle={entry.getIn(['data', 'subTitle'])}
        intro={{
          text: entry.getIn(['data', 'intro', 'text']),
          buttons: buttons,
          gallery: gallery,
          videos: videos
        }}
        content={widgetFor('body')}
      />
    )
  } else {
    return <div>Loading...</div>
  }  
}

LearnPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
  widgetFor: PropTypes.func,
}

export default LearnPagePreview
