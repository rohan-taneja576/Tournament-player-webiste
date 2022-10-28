import React from "react";
import "./index.css";

const AboutUs = () => {
  return (
    <>
      <div className="about-block">
        <div className="text-section">
          <h1 className="title-section">About us</h1>
        </div>
      </div>
      <div className="bottom-section">
        <div className="info-section">
          <p className="text-white ingress">
            The World Tournament Players Organization (WTPO) is an independent
            organization founded by professionals, for professionals.
          </p>
          <p>
            WTPO was founded by Jarmo Sandelin, who has been a member of the
            Swedish PGA since 1987. Today, he is honorary member of the Swedish
            PGA, Finnish PGA and the British PGA. Sandelin qualified for the
            European Tour in 1995 where he the same year was awarded “Sir Henry
            Cotton Rookie of the Year” and has five tournament victories, where
            he still is a member as well as in Legends Tour. In 1996, he played
            on the PGA tour and in 1999, he played the Ryder Cup for the
            European team.
          </p>
          <p>
            During his career, Sandelin and has visited over 600 golf
            destinations and it is with his combined experience he founded WTPO
            – a platform for World Tournament Players, offering new
            opportunities, new sponsorship concepts and membership services,
            while WTPO monitors members' interests vis-à-vis golf organizations
            and authorities.
          </p>
          <p>
            The WTPO initiative is endorsed by several PGA members throughout
            the world, Tournament Players and club professionals with extensive
            golf experience, and a pronounced interest in continuing to develop
            professional golf.&nbsp;
            <strong>
              All Tournament Players and club professionals around the world are
              welcome to become WTPO members.{" "}
            </strong>
          </p>
          <p>
            The WTPO platform will be a complement to existing competition
            organizations, where WTPO's competitions may be included in their
            schedule.
          </p>
          <p>
            A first step is to engage WTPO members, partners and investors,
            which will continue to December 31, 2023, in order to create
            opportunities for all member categories from 2024 onwards.
          </p>
          <div className="contact-btn">
            <button>Contact us to become a member</button>
          </div>
        </div>
        <div className="owner-section">
          <div className="owner-image">
            <div className="overlay" />
            <div className="text-wrapper">
              <a className="small-title" href="#modal-id" rel="modal:open">
                {" "}
                Jarmo Sandelin – merits
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
