import "../pages/css/Home.css"




const BreadCrumbsPath = ({setCurrentPath,  path, setFolderPath1 }) => {
    const parts = path;

    const setUpPath = (parts, part) => {
        console.log(parts);
        console.log(part);
        
        
        const list = [];

        for (let index = 0; index < parts.length; index++) {
            const element = parts[index];
            console.log(element);
            
            
            list.push(element)
            if (part === element) {
                setFolderPath1(part);
                break;
            }
        }
        setCurrentPath(list);

        
        
    }

    const setUpPathInit = (path) => {

        setFolderPath1(path);
        setCurrentPath([]);
        
    }
    

    return (
        <nav aria-label="breadcrumb" className='bradcrumb'>
            <ol className="breadcrumb">
                {
                    parts[0] === '' && (
                        <li className='breadcrumb-item' aria-current='page' onClick={() => setUpPathInit("")}>File</li>
                    )
                }
                {
                    parts[0] !== '' && (
                        <li className='breadcrumb-item' aria-current='page' onClick={() => setUpPathInit("")}>File</li>
                    )
                }
                {parts[0] !== '' && parts.length > 0 && parts.map((part, index) => (
                    <li
                        key={index}
                        className={`breadcrumb-item ${index === parts.length - 1 ? "active" : ""}`}
                        aria-current={index === parts.length - 1 ? "page" : undefined}
                        onClick={() => setUpPath(parts, part)}
                    >
                    
                        {part.split("/").pop()}
                    </li>
                ))}

            </ol>
        </nav>
    )
}

export default BreadCrumbsPath