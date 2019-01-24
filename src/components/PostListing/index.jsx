import React from 'react'
import PostPreview from '../PostPreview'
import './PostListing.scss'

class PostListing extends React.Component {
  getPostList() {
    const { postEdges } = this.props
    const postList = []
    postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
      })
    })
    return postList
  }

  render() {
    const postList = this.getPostList()
    return (
      <div className="md-grid md-grid--no-spacing md-cell--middle">
        <div className="post-preview-wrap">
          {postList.map(post => (
            <PostPreview key={post.title} postInfo={post} />
          ))}
        </div>
      </div>
    )
  }
}

export default PostListing
