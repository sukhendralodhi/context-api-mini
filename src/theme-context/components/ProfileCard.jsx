import { useContext } from "react"
import ThemeContext from "../context/ThemeContext"


const ProfileCard = () => {

    const {theme, setTheme} = useContext(ThemeContext);

    const handleThemeChange = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }

  return (
    <>
    <div className={`max-w-sm mx-auto rounded-lg overflow-hidden shadow-lg mt-20 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
      <img 
        className="w-full h-48 object-cover"
        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
        alt="Profile"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">John Doe</div>
        <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
          Frontend Developer
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className={`inline-block ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'} rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2`}>
          #react
        </span>
        <span className={`inline-block ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'} rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2`}>
          #javascript
        </span>
        <span className={`inline-block ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'} rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2`}>
          #tailwind
        </span>
      </div>
     
    </div>

    <div className="mt-10 text-center">
        <button onClick={handleThemeChange} className={`${theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-800'} rounded px-4 py-2 hover:opacity-80 transition duration-300 ease-in-out border`}>
            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>    </>
  )
}

export default ProfileCard