import React from 'react';

const LinksContainer = () => {
  return (
    <div className="links-container">
      <div className="top-link first-link">
        <div className="quick-link-title">
          <span className="link-title-main">
            REAL ESTATE <i class="fas fa-external-link-alt"></i>
          </span>

          <span className="link-title-sub">
            PROPERTY CRITERIA &<br />
            SURPLUS LISTING
          </span>
        </div>
      </div>

      <div className="top-link second-link">
        <div className="quick-link-title">
          <span className="link-title-main">
            FRANCHISE <i class="fas fa-external-link-alt"></i>
          </span>

          <span className="link-title-sub">
            OWN YOUR OWN<br />
            BUSINESS
          </span>
        </div>
      </div>

      <div className="bottom-link third-link">
        <div className="quick-link-title">
          <span className="link-title-main">
            JOIN US <i class="fas fa-external-link-alt"></i><br />
            <span className="title-main-small">SEARCH AND APPLY FOR JOBS</span>
          </span>

          <span className="link-title-sub">
            ON THE ROAD TO<br />
            A GREATER CAREER
          </span>
        </div>
      </div>
    </div>
  );
};

export default LinksContainer;