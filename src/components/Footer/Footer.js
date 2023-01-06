
import { Section, SocialLinks, Link , Container} from './FooterStyles';

import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <Section className='text-center'>
  
      <Container>
        <SocialLinks >
          <Link href='https://github.com/CPA-Developer'  color='rgb(10, 102, 194)'>
            <FaGithub />
          </Link>
          <Link
            href='https://www.linkedin.com/in/subin-sebastian777/'
            color='rgb(10, 102, 194)'
          >
            <FaLinkedinIn />
          </Link>
        </SocialLinks>
      </Container>
      
      <div className='user'>Copyright © 2023 Subin Sebastian</div>
    </Section>
  );
};

export default Footer;
