const styles = {
    link: {
      color: 'white',
      textDecoration: 'none',
    },
    footer: {
      backgroundColor: 'blue',
      color: 'white',
      padding: '10px 0',
      textAlign: 'center',
    },
  };

function Footer() {
    return (
      <footer style={styles.footer}>
        <h5>Thanks for checking out the page.</h5>
        <div>
          <a href="https://github.com/Majexs/Project_2" style={styles.link}>GitHub</a>
           
        </div>
    
      </footer>
    );
  }

    export default Footer;