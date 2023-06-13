import '../styles/footer.css'

function Footer() {
  return (
    <footer>
       <div className='x-axis'>
          <img alt='fb_icon' src='/icons/fb.png' className='logo'/>
          <img alt='twitter_icon' src='/icons/twitter.png' className='logo'/>
          <img alt='insta_icon' src='/icons/insta.png' className='logo'/>
        </div>
        <div>
          <p>© 2023 Study Space. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer