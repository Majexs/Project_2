export default function Home() {
    return (
      <div className="container pt-4">
        <h5>
        The taste of the food is the most important thing to me.
        </h5>
        <section className="features-icons bg-light text-center m-4">
          <div className="container">
            <div className="row p-2">
              <div className="col-lg-4">
                <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                  <div className="features-icons-icon d-flex">
                    <i className="bi-window m-auto text-primary" />
                  </div>
                  <h3>Fully Filling</h3>
                  <p className="lead mb-0">
                    This dish will taste great on any device, no matter the size!
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                  <div className="features-icons-icon d-flex">
                    <i className="bi-layers m-auto text-primary" />
                  </div>
        {/* <img src="/images/foodCenter.JPG" alt="FoodCenter" class="foodCenter" style={{width: '300px', height: 'auto'}}/> */}
                  <h3>Kitchen Ready</h3>
                  <p className="lead mb-0">
                    Featuring the latest build!
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                  <div className="features-icons-icon d-flex">
                    <i className="bi-terminal m-auto text-primary" />
                  </div>
                  <h3>Easy to Make</h3>
                  <p className="lead mb-0">
                    Ready to use with your own content, or customize the source
                    ingredients!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <p>
         TASTY
        </p>
        <h5>
         DELICIOUS
        </h5>
        <h5>
         SMELLS GOOD
        </h5>
      </div>
    );
  }