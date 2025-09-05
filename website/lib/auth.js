// lib/auth.js
// This is a mock authentication module for demonstration purposes
export async function getLoggedInUser() {
  // In a real app, you would get this from a session or cookie
  // For the hackathon, we can hardcode it for demonstration
  return {
    name: 'Shaurya_Gupta',
    id: '12345',
  };
}