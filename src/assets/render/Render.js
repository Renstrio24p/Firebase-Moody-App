export default async function Render() {
    // Dynamically import the components and modules
 
    const { default: UniqueHash } = await import("../security/hascode");
    const { default: NewApp } = await import("../../components/NewApp");
  
    // Get Render's ID
    const auths = document.getElementById('auths')
  
    // Hash Applied
    window.addEventListener('DOMContentLoaded', () => {
    
    });
  
    // Render's the JS Component
    NewApp(auths);
   
  }
  