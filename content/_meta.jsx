
 
export default {
  index: 'Home',
    contact: 'Contact Us',
  about: {
    title: 'About Us'
}
}
 
// Custom component for italicized text
function Italic({ children, ...props }) {
  return <i {...props}>{children}</i>
}