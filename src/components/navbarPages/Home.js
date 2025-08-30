import { FcFolder, FcFile } from "react-icons/fc";
import { FcMusic } from "react-icons/fc";
import { IoImageSharp } from "react-icons/io5";

const Home = () => {
  return (
    <div className="row">
                <span className='h4 button-title'>Home</span>
                <table className='table'>
                    <thead>
                        <tr>
                            <th scope='col'>Name</th>
                            <th scope='col-2'>Opened</th>
                            <th scope='col-1'>Owner</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='table-text'><FcFile className='margin-right-desktop' /> Aaris Notebook</td>
                            <td>5 Feb 2020</td>
                            <td>Aaris Kazi</td>
                        </tr>
                        <tr>
                            <td className='table-text'><FcFile className='margin-right-desktop' /> Event Schedule</td>
                            <td>5 Feb 2020</td>
                            <td>Aaris Kazi</td>
                        </tr>
                        <tr>
                            <td className='table-text'><FcFile className='margin-right-desktop' /> Book</td>
                            <td>5 Feb 2020</td>
                            <td>Aaris Kazi</td>
                        </tr>
                        <tr>
                            <td className='table-text'><FcFile className='margin-right-desktop' />Definition</td>
                            <td>5 Feb 2020</td>
                            <td>Aaris Kazi</td>
                        </tr>
                        <tr>
                            <td className='table-text'><FcFolder className='margin-right-desktop' /> Desktop</td>
                            <td>5 Feb 2020</td>
                            <td>Aaris Kazi</td>
                        </tr>
                        <tr>
                            <td className='table-text'><IoImageSharp className='margin-right-desktop' style={{ color: 'rgb(144, 202, 249)' }} /> Apple_wallpaper.png</td>
                            <td>5 Feb 2020</td>
                            <td>Aaris Kazi</td>
                        </tr>
                        <tr>
                            <td className='table-text'><FcMusic className='margin-right-desktop' />  hey.mp3</td>
                            <td>5 Feb 2020</td>
                            <td>Aaris Kazi</td>
                        </tr>
                    </tbody>
                </table>
            </div>
  )
}

export default Home