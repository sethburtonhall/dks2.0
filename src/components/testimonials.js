import React from "react"
import { StaticQuery, graphql } from "gatsby"

// Styles
import { Container } from "../styles/GlobalStyles"

const Testimonials = () => {
  return (
    <StaticQuery
      query={testimonialQuery}
      render={data => {
        const {testimonial} = data.allFile.nodes[0].childMdx.frontmatter
        return (
          <Container>
            <h1>Testimonials</h1>
            <div className="testimonials">
              {testimonial.map((t, index) => (
                <div className="testimonial" key={index}>
                  <p>{t.quote}</p>
                  <p>
                    {t.name} - {t.position} - {t.company}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        )
      }}
    />
  )
}

const testimonialQuery = graphql`
  query TestimonialQuery {
    allFile(filter: { name: { eq: "testimonials" } }) {
      nodes {
        childMdx {
          frontmatter {
            testimonial {
              quote
              name
              position
              company
            }
          }
        }
      }
    }
  }
`

export default Testimonials
