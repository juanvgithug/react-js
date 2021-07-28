//R34c7
import React from "react";

import "./Spinner.scss";

//Material UI
import CircularProgress from "@material-ui/core/CircularProgress";

const Spinner = () => {
  return (
    <>
      <body>
        <div id="notfound">
          <div class="notfound">
            <div class="notfound-404">
              <h1>
                <CircularProgress />
              </h1>
              {/* <h2>Cargando!</h2> */}
            </div>
          </div>
        </div>
      </body>
    </>
  );
};

export default Spinner;
