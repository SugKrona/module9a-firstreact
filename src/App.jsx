// src/App.jsx
import UserProfile from './UserProfile'; 
function App() {
  return (
 <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
      {/* First Profile: Sarah Johnson */}
      <UserProfile
        name="Sarah Johnson"
        bio="Full-stack developer passionate about creating user-friendly applications."
        profileImage="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
      />

      {/* Second Profile: Giovanni Stefan */}
      <UserProfile
        name="Giovanni Stefan"
        bio="Data scientist creating intelligent systems with a focus on deep learning."
        profileImage="https://images.unsplash.com/photo-1547425260-76bc4e198089?w=150&h=150&fit=crop&crop=face"
      />
    </div>
  );
}

export default App;