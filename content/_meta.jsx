
 
export default {
  index: 'Home',
  tokendeployment: 'Token Deployment',
}
 
// Custom component for italicized text
function Italic({ children, ...props }) {
  return <i {...props}>{children}</i>
}