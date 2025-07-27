// src/App.jsx
import UserProfile from './UserProfile'; 
function App() {
  return (
 <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
      {/* First Profile: Sarah Johnson */}
      <UserProfile
        name="Sarah Johnson"
        bio="Full-stack developer passionate about creating user-friendly applications."
        profileImage="/images/Sarah.png"
      />

      {/* Second Profile: Giovanni Stefan */}
      <UserProfile
        name="Giovanni Stefan"
        bio="Data scientist creating intelligent systems with a focus on deep learning."
        profileImage="/images/Giovanni.png"
      />
    </div>
  );
}

export default App;