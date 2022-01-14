import { Link } from "react-router-dom";
const Footer = () => {
    return (
      <div>
        <footer class="text-center text-lg-start ">
          <section class="d-flex justify-content-center justify-content-lg-between p-4">
           
            <div>
              <a href="" class="me-4 ms-4 text-reset">
                
              </a>
              <a href="" class="me-4 text-reset">
                
           
              </a>
              <a href="" class="me-4 text-reset">
               
              </a>
              <a href="" class="me-4 text-reset">
              </a>
            </div>
          </section>
          <section>
            <div class="container">
              <div class="row mt-3">
                <div class="text-center mb-5">
                  
                
                  <h6 id="head">
                   All Seasons - Fresh & Healthy
                  </h6>
                  <p style={{color:"darkgray"}}>Fresh vegetables and fruits at your doorstep!</p>
                </div>
  
                <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 id="text" class="text-uppercase fw-bold ms-3 mb-4">
                  Products.
                </h6>
                <Link
                  to="/DryFruits"
                  style={{ textDecoration: "none", color: "darkgray" }}
                >
                  <p style={{marginLeft:20}}>
                   Dry Fruits
                  </p>
                </Link>
               
                <Link
                  to="/Vegetables"
                  style={{ textDecoration: "none", color: "darkgray" }}
                >
                  <p style={{marginLeft:20}}>
                    
                   Vegetables
                  </p>
                </Link>
                <Link
                  to="/Fruits"
                  style={{ textDecoration: "none", color: "darkgray" }}
                >
                  <p style={{marginLeft:20}}>
                   
                     Fruits
                  </p>
                  </Link>
              </div>
              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 id="text" class="text-uppercase fw-bold ms-3 mb-4">
                  Contact here.
                </h6>
                <p>
                  
                  <a
                    href="https://LDME.com/"
                    style={{ textDecoration: "none", color: "darkgray", marginLeft:20 }}
                  >
             
                    
                    shop.com
                  </a>
                </p>
                <p style={{color:"darkgray", marginLeft:20}}>
                 Lahore, 54000, Pakistan
                </p>
                <p style={{color:"darkgray", marginLeft:20}}>
                 + 92 000 000 00
                </p>
                <p style={{color:"darkgray", marginLeft:20}}>
                 Karachi, 54000, Pakistan
                </p>
                <p style={{color:"darkgray", marginLeft:20}}>
                 + 01 000 000 00
                </p>
              </div>
            </div>
          </div>
        </section>
        <hr style={{marginTop:20}}></hr>
      </footer>
 
    </div>
  );
};
export default Footer;

  