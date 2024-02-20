/* eslint-disable prettier/prettier */
import Link from 'next/link';
import { getPublicUrl } from '@sitecore-jss/sitecore-jss-nextjs/utils';
import { useState } from 'react';
import { Navbar, Nav, NavDropdown, Dropdown } from 'react-bootstrap';

// Prefix public assets with a public URL to enable compatibility with Sitecore Experience Editor.
// If you're not supporting the Experience Editor, you can remove this.
const publicUrl = getPublicUrl()

const Navigation = (): JSX.Element => {
  const [expanded, setExpanded] = useState(false);

  const handleNavbarToggle = () => {

    setExpanded(!expanded);
  };

  return (
    <Navbar className="navbar-wrapper" bg="dark" variant="dark" expand="xl" fixed="top">
      <Link href="/" passHref>
        <Navbar.Brand>
          <img src={`${publicUrl}/nav_logo.svg`} alt="GATE" aria-label="Gate's Logo" />
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="navbar" onClick={handleNavbarToggle} />
      <Navbar.Collapse>
        <Nav className="ml-auto">
          <div className="nav-item">
            <Link href="/offerta" passHref className="nav-link">
              {'Offerta'}
            </Link>
          </div>
          <NavDropdown title={'Veicoli'}>
            <div className="nav-item-header">{'I nostri veicoli'}</div>
            <NavDropdown.Item href="veicoli">{'La gamma GATE'}</NavDropdown.Item>
            <NavDropdown.Item href="veicoli-daily">{'Scopri e-Daily'}</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title={'Scopri GATE'}>
            <div className="nav-item-header">{'Scopri GATE'}</div>
            <NavDropdown.Item href="chi-siamo">{'Chi Siamo'}</NavDropdown.Item>
            <NavDropdown.Item href="news">{'News'}</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title={'supporto'}>
            <div className="nav-item-header">{'Supporto'}</div>
            <NavDropdown.Item href="faq">{'FAQ'}</NavDropdown.Item>
            <div className="nav-item-footer">
              <div className="heading">Hai avuto un guasto o un imprevisto?</div>
              <div className="underlined-text">
                <a href="tel:00 800 5656 7878">Chiama il 00 800 5656 7878</a>
              </div>
            </div>
          </NavDropdown>

          {/* Button da mostrare solo in visualizzazione mobile */}
          <div className="nav-item d-lg-block d-xl-none">
            <Link href="/contattaci" passHref className="nav-link">
              Trova concessionario
            </Link>
          </div>
          <div className="nav-item d-lg-block d-xl-none">
            <Link href="/contattaci" passHref className="nav-link primary-btn">
              Contattaci
            </Link>
          </div>
        </Nav>
      </Navbar.Collapse>
      {/* Button da mostrare solo in visualizzazione desktop */}
      <div className="navbar-right-section">
        <Link href="/contattaci" passHref className="nav-link navbar-right-element">
          Trova concessionario
        </Link>
        <Link href="/contattaci" passHref className="nav-link navbar-right-element primary-btn">
          Contattaci
        </Link>
      </div>
      <div className="lang-wrapper">
        <Dropdown>
          <Dropdown.Toggle variant="transparent">ITA</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>ITA</Dropdown.Item>
            <Dropdown.Item>ENG</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </Navbar>
  );
};

export default Navigation;