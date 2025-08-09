import "../pages/css/Home.css"

const BreadCrumbsPath = ({setCurrentPath,  path }) => {
    
    const parts = path.replace(/^\/|\/$/g, "").split("/");
    const breadcrumbPaths = parts.map((part, index) => {
        return "/" + parts.slice(0, index + 1).join("/");
    });

    return (
        <nav aria-label="breadcrumb" className='bradcrumb'>
            <ol className="breadcrumb">
                {
                    parts[0] === '' && (
                        <li className='breadcrumb-item' aria-current='page' onClick={() => setCurrentPath("/")}>File</li>
                    )
                }
                {
                    parts[0] !== '' && (
                        <li className='breadcrumb-item' aria-current='page' onClick={() => setCurrentPath("/")}>File</li>
                    )
                }
                {parts[0] !== '' && parts.length > 0 && parts.map((part, index) => (
                    <li
                        key={index}
                        className={`breadcrumb-item ${index === parts.length - 1 ? "active" : ""}`}
                        aria-current={index === parts.length - 1 ? "page" : undefined}
                        onDoubleClick={() => setCurrentPath(breadcrumbPaths[index])}
                    >
                    
                        {part}
                    </li>
                ))}

            </ol>
        </nav>
    )
}

export default BreadCrumbsPath