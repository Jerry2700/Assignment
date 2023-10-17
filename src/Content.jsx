import log1 from "../public/Group 7.svg";
import log2 from '../public/Group 8.svg';
import log3 from '../public/Group 9.svg';


import object from "../public/OBJECTS.svg";
import "./Content.css";
function Content() {
  return (
    <>
      <div className="content" style={{overflowY:'hidden'}}>
        <div className="all-content">
        <div className="main-heading">
        <h1 className="main-h1">Get Your Next Job In 3 Steps</h1>
      </div>
          <div className="content-1">
            <div className="logo-1">
              <img src={log1} alt="" height="80" />
            </div>

            <div className="logo-2">
              <span className="para-main">Create a Profile</span>
              <span className="para-main2">
                It takes 60 seconds to sign-up and create your free skills
                profile.
              </span>
            </div>
          </div>


          <div className="content-1">
            <div className="logo-1">
              <img src={log2} alt="" height="80" />
            </div>

            <div className="logo-2">
              <span className="para-main">Create a Profile</span>
              <span className="para-main2">
                It takes 60 seconds to sign-up and create your free skills
                profile.
              </span>
            </div>
          </div>



          <div className="content-1">
            <div className="logo-1">
              <img src={log3} alt="" height="80" />
            </div>

            <div className="logo-2">
              <span className="para-main">Create a Profile</span>
              <span className="para-main2">
                It takes 60 seconds to sign-up and create your free skills
                profile.
              </span>
            </div>
          </div>

          <div className="get-started-now">
                    <button>Get Started Now!</button>
                </div>


        </div>

        <div className="content-2" >
          <img src={object} alt="" className="obj-pic" />
        </div>
      </div>
    </>
  );
}

export default Content;
