import React from 'react'
import ContentHeader from './ContentHeader'
import MainContent from './MainContent'

function ContentWrapper(props) {
    return (
        <div className="content-wrapper">
            <ContentHeader />
            <MainContent />
        </div>
    )
}

export default ContentWrapper
