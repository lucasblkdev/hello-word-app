import HelloWorld from "hello-agnostic-component";
import ImageRender from "./components/Banner/ImageRender";
import { graphql, useStaticQuery } from 'gatsby';

function App() {
  const data = useStaticQuery(graphql`
  query {
    file(relativePath: { eq: "logo.svg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`);

const imageFluid = data.file.childImageSharp.fluid;

  return (
    <>
      <div>
        <HelloWorld color="red" />
      </div>
      <div>
        <ImageRender fluid={imageFluid} alt="Descrição da imagem" />
      </div>
    </>
  );
}

export default App;