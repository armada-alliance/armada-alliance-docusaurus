import React from "react";
//import AllianceLogo from "../../../src/theme/Footer/armada-alliance-logo.png";
import Footer from '@theme-original/Footer';
import { MendableFloatingButton } from "@mendable/search"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

const style = { darkMode: false, accentColor: "#123456" }

const floatingButtonStyle = {
    color: "#fff",
    backgroundColor: "#31373d"
}

const icon = <img src="img/parrot2.png" width="75"/>

export default function FooterWrapper(props) {
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext();

  return (
    <>
      <footer className="footer">
        <div className="container container--fluid">
          <div className="row footer__links">
            <div className="col footer__col">
              <h4 className="footer__title">View</h4>
              <ul className="footer__items">
                <li className="footer__item">
                  <a
                    className="footer__link-item"
                    href="https://armada-alliance.com/"
                  >
                    Website
                  </a>
                </li>
                <li className="footer__item">
                  <a
                    className="footer__link-item"
                    href="https://armada-alliance.com/docs/"
                  >
                    Docs
                  </a>
                </li>
                <li className="footer__item">
                  <a
                    className="footer__link-item"
                    href="https://www.youtube.com/channel/UCligunhcmbMYaBUMvONsKwg"
                  >
                    Youtube
                  </a>
                </li>
              </ul>
            </div>
            <div className="col footer__col">
              <h4 className="footer__title">Community</h4>
              <ul className="footer__items">
                <li className="footer__item">
                  <a
                    className="footer__link-item"
                    href="https://armada-alliance.com/identities"
                  >
                    Users
                  </a>
                </li>
                <li className="footer__item">
                  <a
                    className="footer__link-item"
                    href="https://armada-alliance.com/stake-pools"
                  >
                    Stake Pools
                  </a>
                </li>
                <li className="footer__item">
                  <a
                    className="footer__link-item"
                    href="https://github.com/armada-alliance/"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
            <div className="col footer__col">
              <h4 className="footer__title">Social</h4>
              <ul className="footer__items">
                <li className="footer__item">
                  <a
                    className="footer__link-item"
                    href="https://t.me/joinchat/FeKTCBu-pn5OUZUz4joF2w"
                  >
                    Telegram
                  </a>
                </li>
                <li className="footer__item">
                  <a
                    className="footer__link-item"
                    href="https://twitter.com/alliance_armada"
                  >
                    Twitter
                  </a>
                </li>
                <li className="footer__item">
                  <a
                    className="footer__link-item"
                    href="https://discord.com/invite/Sqc398qk5a"
                  >
                    Discord
                  </a>
                </li>
              </ul>
            </div>
            <div className="col footer__col">
              <h4 className="footer__title">More</h4>
              <ul className="footer__items">
                <li className="footer__item">
                  <a
                    className="footer__link-item"
                    href="https://cardano.ideascale.com/c/idea/397744"
                  >
                    Project Catalyst
                  </a>
                </li>
                <li className="footer__item">
                  <a
                    className="footer__link-item"
                    href="https://armada-alliance.com/blogs"
                  >
                    Blog
                  </a>
                </li>
                <li className="footer__item">
                  <a
                    className="footer__link-item"
                    href="https://shop.armada-alliance.com"
                  >
                    Store
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="text--center">
            <div className="margin-bottom--sm">
            <img style={{ height: 'px', width:'150px'}} src={require('@site/static/img/armada-alliance-logo.png').default} />
            </div>
            Copyright © {new Date().getFullYear()} Armada Alliance.
          </div>
        </div>
        <MendableFloatingButton icon={icon} cmdShortcutKey="J" dialogPlaceholder="Ask" anon_key={customFields.mendableAnonKey} style={style} floatingButtonStyle={floatingButtonStyle} />
        <Footer {...props} />
      </footer>
    </>
  );
}
