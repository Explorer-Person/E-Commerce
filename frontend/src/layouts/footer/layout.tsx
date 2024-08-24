
import {
  MDBFooter,
  MDBContainer,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter className='text-center' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>

        <section className=''>
          <form action=''>
            <MDBRow className='d-flex justify-content-center'>
              <MDBCol size="auto">
                <p className='pt-2'>
                  <strong>Sign up for our newsletter</strong>
                </p>
              </MDBCol>

              <MDBCol md='5' start>
                <MDBInput contrast type='email' placeholder='abc@gmail.com' className='mb-4' />
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn outline color='light' type='submit' className='mb-4'>
                  Subscribe
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section>


        <section className=''>
          <MDBRow className='mt-5'>
            <MDBCol lg='4'  className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Links</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Data Security Policy
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Personal Data Protecting
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Payment Options
                  </a>
                </li>
              </ul>
            </MDBCol>
            <MDBCol lg='4'  className='mb-4 mb-md-0'>
              <h4>Our Motto</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum repellat quaerat
                voluptatibus placeat nam, commodi optio pariatur est quia magnam eum harum corrupti dicta, aliquam
                sequi voluptate quas.
              </p>
            </MDBCol>
            <MDBCol lg='4'  className='mb-4 mb-md-0'>
              <h4>Info</h4>
              <ul className='list-unstyled mb-0'>
                <li>
                  <p className='text-white'>
                    +90 551 590 23 46
                  </p>
                </li>
                <li>
                  <p className='text-white'>
                    abcabc@gmail.com
                  </p>
                </li>
                <li>
                  <p className='text-white mx-5'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, possimus.
                  </p>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright:
        <a className='text-white' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
  );
}