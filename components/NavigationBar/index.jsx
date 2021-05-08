import { useRouter } from 'next/router';
import Link from 'next/link';
import styled from 'styled-components';

import { NavLinks } from './navLinks';
import { useMediaQuery } from 'react-responsive';
import { DeviceSizes } from '../responsive';
import { MobileNavLinks } from './mobileNavLinks';



const NavigationBar = () => {
  const router = useRouter();
  const isMobile = useMediaQuery({ maxWidth: DeviceSizes.mobile});

    return(
      <NavbarContainer>
        <LeftSection>
          <Logo onClick={() => router.push("/")}>
            <h3>TA</h3>
            {/* <img src="/images/autograf.png"/> */}
          </Logo>
        </LeftSection>
        <MiddleSection>
        </MiddleSection>
        <RightSection>
          {!isMobile && <NavLinks/>}
          {isMobile && <MobileNavLinks/>}
        </RightSection>
      </NavbarContainer>
    )
};



const NavbarContainer = styled.nav`
  width: 100%;
  height: 60px;
  box-shadow: 0 1px 3px rgba(15, 15, 15, 0.13);
  display: flex;
  align-items: center;
  padding: 0 1.5em;
`;

const LeftSection = styled.div`
  display: flex;
`;

const MiddleSection = styled.div`
  display: flex;
  flex: 2;
  height: 100%;
  justify-content: center;
`;

const RightSection = styled.div`
  display: flex;
`;




const Logo = styled.span`
  img{
      width: 12px;
  }

  cursor: pointer;
`;



export default NavigationBar;