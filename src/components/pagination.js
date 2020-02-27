import React from 'react';
import { Link } from "gatsby"

const Pagination = ({ previous, next, type }) => (
  <ul
    style={{
      display: `flex`,
      flexWrap: `wrap`,
      justifyContent: `space-between`,
      listStyle: `none`,
      padding: 0,
    }}
  >
    <li>
      {previous && (
        <Link to={`${type}${previous.fields.slug}`} rel="prev">
          ← {previous.frontmatter.title}
        </Link>
      )}
    </li>
    <li>
      {next && (
        <Link to={`${type}${next.fields.slug}`} rel="next">
          {next.frontmatter.title} →
        </Link>
      )}
    </li>
  </ul>
)

export default Pagination