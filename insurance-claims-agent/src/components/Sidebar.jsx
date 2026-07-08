import { FaHome, FaFileAlt, FaCog } from "react-icons/fa";

function Sidebar() {
    return (
        <div className="sidebar">
            <h2>Insurance AI</h2>
            <ul>
                <li><FaHome />Dashboard</li>
                <li><FaFileAlt />Claims</li>
                <li><FaCog />Settings</li>
            </ul>
        </div>
    )
}

export default Sidebar;