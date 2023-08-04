import styles from "../styles.css"

function Footer(prop) {
  return (
    <div className="App">
      <footer>
        <ul aria-label="main-navigation" role="navigation">
          <a><li>Women's</li></a>
          <a><li>Men's</li></a>
          <a><li>On The Street</li></a>
          <a><li>The Catwalk</li></a>
          <a><li>AdWatch</li></a>
          <a><li>About</li></a>
        </ul>
      </footer>
    </div>
  );
}

export default Footer
