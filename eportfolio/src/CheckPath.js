export function checkPath(path, navigate) {
    const pathSegments = path.split('/').filter(Boolean);
  
    // Check if there are unknown segments
    if (pathSegments.length > 2) {
      alert("handling path");
      //navigate('/not-found'); // Redirect to the "Not Found" page
      return true; // Return true to indicate the path was handled
    }
  
    return false; // Return false if the path was not handled
  }