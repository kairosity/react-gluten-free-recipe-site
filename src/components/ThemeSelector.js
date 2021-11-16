import modeIcon from '../assets/mode-icon.svg'

// hooks
import { useTheme } from '../hooks/useTheme'

// styles 
import './ThemeSelector.css'

const themeColors = ['#5f279c', '#3a9661', '#b70233']


export default function ThemeSelector() {

    const { changeColor, changeMode, mode } = useTheme()

    const toggleMode = () => {
        changeMode(mode === 'dark' ? 'light' : 'dark')
    }

    return (
        <div className='theme-selector'>
            <div className='mode-toggle'>
                <img 
                    src={modeIcon} 
                    alt="dark/light toggle icon" 
                    onClick={toggleMode}
                    style={{ filter: mode === 'dark' ? 'invert(100%)' : 'invert(20%)'}}
                />
            </div>
            <div className='theme-buttons'>
                {themeColors.map( (color) => (
                    <div
                        key={color}
                        onClick={() => changeColor(color)}
                        style={{ background: color }}
                    />
                ))}
            </div>
        </div>
    )
}
